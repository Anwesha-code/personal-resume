"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import profile from "@data/profile.json";
import PixelWindow from "@/components/ui/PixelWindow";
import SectionHeading from "@/components/ui/SectionHeading";
import Mailbox from "./Mailbox";

type Status = "idle" | "sending" | "sent";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");

    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    setTimeout(() => {
      setStatus("sent");
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }, 900);

    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 3200);
  };

  return (
    <section id="contact" className="mt-14 scroll-mt-24 px-3">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Mailbox.exe"
          title="Send Me a Letter"
          description="Drop a note in the mailbox, it opens your email app with everything filled in, ready to send."
        />

        <PixelWindow appName="mailbox" icon="✉️">
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="relative flex justify-center">
              <Mailbox flagUp={status !== "idle"} />
              <AnimatePresence>
                {status === "sending" && (
                  <motion.div
                    initial={{ y: -30, opacity: 0, rotate: -8 }}
                    animate={{ y: 30, opacity: 1, rotate: 4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute top-6 text-3xl"
                    aria-hidden="true"
                  >
                    💌
                  </motion.div>
                )}
                {status === "sent" && (
                  <motion.div
                    initial={{ x: 0, y: 20, opacity: 1 }}
                    animate={{ x: 160, y: -80, opacity: 0 }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="absolute top-10 text-3xl"
                    aria-hidden="true"
                  >
                    🐦
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3">
              <label className="grid gap-1">
                <span className="font-chrome text-[10px] uppercase tracking-wide text-cocoa">Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="focus-ring rounded-lg border-2 border-cocoa bg-cream px-3 py-2 font-body text-sm text-cocoa"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-chrome text-[10px] uppercase tracking-wide text-cocoa">Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="focus-ring rounded-lg border-2 border-cocoa bg-cream px-3 py-2 font-body text-sm text-cocoa"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-chrome text-[10px] uppercase tracking-wide text-cocoa">Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="focus-ring rounded-lg border-2 border-cocoa bg-cream px-3 py-2 font-body text-sm text-cocoa"
                  placeholder="Say hello!"
                />
              </label>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="focus-ring flex items-center justify-center gap-2 rounded-lg border-2 border-cocoa bg-petal px-4 py-2.5 font-body text-sm font-semibold text-cream shadow-pixel transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                <Send size={16} />
                {status === "idle" && "Drop it in the mailbox"}
                {status === "sending" && "Sealing the envelope…"}
                {status === "sent" && "Sent! 🐦"}
              </button>
              <p className="text-center font-body text-xs text-plum">
                This opens your email app pre-filled — nothing is sent from this page directly.
              </p>
            </form>
          </div>
        </PixelWindow>
      </div>
    </section>
  );
}
