"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  titleId: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, titleId, children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-cocoa/40 p-4"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
            className="pixel-window max-h-[85vh] w-full max-w-lg overflow-y-auto"
          >
            <div className="pixel-window-titlebar">
              <div className="flex items-center gap-2">
                <span className="pixel-dot bg-petal" />
                <span className="pixel-dot bg-butter" />
                <span className="pixel-dot bg-mint" />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="focus-ring cursor-pointer rounded-md border-2 border-cocoa bg-cream p-1"
              >
                <X size={14} />
              </button>
            </div>
            <div className="p-5 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
