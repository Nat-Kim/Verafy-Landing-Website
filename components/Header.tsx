import Logo from "./Logo";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Verafy", href: "#why-verafy" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-border bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-text-dark md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-dark"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}
