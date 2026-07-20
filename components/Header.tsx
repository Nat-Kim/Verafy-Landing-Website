"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Verafy", href: "#why-verafy" },
  { label: "FAQ", href: "#faq" },
];

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E0D8] bg-[#FBF8F5] backdrop-blur">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-20">
        <Link
          href="/"
          aria-label="Verafy home"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/VerafyLogoBlack.svg"
            alt="Verafy"
            width={435}
            height={127}
            className="h-6 w-auto sm:h-7"
          />
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden items-center gap-8 text-sm text-text-dark md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-jakarta text-[16px] leading-[120%] tracking-0 font-normal text-[#1C1714] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            className="font-jakarta rounded-md bg-orange px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-dark sm:px-5"
          >
            Join the waitlist
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          >
            <span
              className={`block h-0.5 w-5 bg-text-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-dark transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#E7E0D8] px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setOpen(false);
                handleAnchorClick(e, link.href);
              }}
              className="font-jakarta rounded-md px-2 py-2.5 text-[16px] font-normal text-[#1C1714] transition-colors hover:bg-cream-card"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
