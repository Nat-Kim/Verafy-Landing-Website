import Image from "next/image";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Verafy", href: "#why-verafy" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E0D8] bg-[#FBF8F5] backdrop-blur">
      <div className="flex items-center justify-between px-20 py-4">
        <Image
          src="/VerafyLogoBlack.svg"
          alt="Verafy"
          width={435}
          height={127}
          className="h-7 w-auto"
        />
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 text-sm text-text-dark md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-jakarta text-[16px] leading-[120%] tracking-0 font-normal text-[#1C1714] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            className="font-jakarta rounded-md bg-orange px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-dark"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
