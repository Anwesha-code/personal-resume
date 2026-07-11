"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "@data/navigation.json";
import profile from "@data/profile.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3">
      <nav
        aria-label="Primary"
        className="pixel-window mx-auto flex max-w-5xl items-center justify-between px-4 py-2 backdrop-blur-sm"
      >
        <a
          href="#home"
          className="focus-ring flex items-center gap-2 rounded-md font-pixel text-sm text-cocoa sm:text-base"
        >
          <span className="pixel-dot bg-petal" aria-hidden="true" />
          {profile.displayName.split(" ")[0]}
          <span aria-hidden="true">.exe</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="focus-ring rounded-md px-3 py-1.5 font-chrome text-[11px] uppercase tracking-wide text-cocoa transition-colors hover:bg-blush"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="focus-ring cursor-pointer rounded-md border-2 border-cocoa bg-blush p-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="pixel-window mx-auto mt-2 flex max-w-5xl flex-col gap-1 p-3 md:hidden"
        >
          {navigation.items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-md px-3 py-2 font-chrome text-xs uppercase tracking-wide text-cocoa hover:bg-blush"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
