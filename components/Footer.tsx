"use client";

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

export default function Footer() {
  return (
    <footer className="bg-ink px-4 pt-12 pb-8 sm:px-6 sm:pt-16 lg:px-20">
      <div>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
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
              src="/VerafyLogoWhite.svg"
              alt="Verafy"
              width={435}
              height={127}
              className="h-7 w-auto"
            />
          </Link>
          <nav className="font-jakarta flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[16px] font-medium leading-[120%] tracking-0 text-[#E7E0D8] sm:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:contact@verafy.ca"
            className="font-plex-mono font-semibold text-[14px] text-[#FFFFFF] leading-[100%] tracking-0 underline decoration-transparent underline-offset-4 transition-colors hover:decoration-white"
          >
            contact@verafy.ca
          </a>
        </div>

        <div className="font-plex-mono mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[#FFFFFF] opacity-40 sm:flex-row sm:justify-between">
          <p className="w-full max-w-[484px] text-[14px] text-normal uppercase leading-[150%] tracking-0">
            This tool provides compliance guidance based on current Ontario
            regulations. It does not constitute legal advice.
          </p>
          <p className="font-plex-mono shrink-0 font-normal text-[14px] uppercase leading-[100%] tracking-0 text-[#FFFFFF]">© 2026 Verafy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
