import Image from "next/image";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Verafy", href: "#why-verafy" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-20 pt-16 pb-8">
      <div>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Image
            src="/VerafyLogoWhite.svg"
            alt="Verafy"
            width={435}
            height={127}
            className="h-7 w-auto"
          />
          <nav className="font-jakarta flex items-center gap-12 text-[16px] font-medium leading-[120%] tracking-0 text-[#E7E0D8]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:contact@verafy.ca"
            className="font-plex-mono font-semibold text-[14px] text-[#FFFFFF] leading-[100%] tracking-0"
          >
            contact@verafy.ca
          </a>
        </div>

        <div className="font-plex-mono mt-10 flex flex-col gap-4 border-t border-white/10 pt-6   text-[#FFFFFF] opacity-40 sm:flex-row sm:justify-between">
          <p className="w-[484px] h-[38px] text-[14px] text-normal uppercase leading-[150%] tracking-0">
            This tool provides compliance guidance based on current Ontario
            regulations. It does not constitute legal advice.
          </p>
          <p className="font-plex-mono shrink-0 font-normal text-[14px] uppercase  leading-[100%] tracking-0 text-[#FFFFFF]">© 2026 Verafy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
