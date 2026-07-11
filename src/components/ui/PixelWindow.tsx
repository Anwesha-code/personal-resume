import type { ReactNode } from "react";

interface PixelWindowProps {
  id?: string;
  appName: string;
  icon?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a section's content in a little retro-OS "window": a title bar with
 * traffic-light dots and an app-style name, echoed across every section so
 * the whole site reads like one cozy desktop.
 */
export default function PixelWindow({ id, appName, icon, children, className }: PixelWindowProps) {
  return (
    <div id={id} className={`pixel-window scroll-mt-24 ${className ?? ""}`}>
      <div className="pixel-window-titlebar">
        <div className="flex items-center gap-2">
          <span className="pixel-dot bg-petal" />
          <span className="pixel-dot bg-butter" />
          <span className="pixel-dot bg-mint" />
        </div>
        <p className="font-chrome text-[11px] uppercase tracking-widest text-cocoa">
          {icon ? `${icon} ` : ""}
          {appName}
        </p>
        <div className="w-[52px]" aria-hidden="true" />
      </div>
      <div className="p-5 sm:p-8">{children}</div>
    </div>
  );
}
