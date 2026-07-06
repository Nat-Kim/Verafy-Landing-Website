import Logo from "./Logo";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Verafy", href: "#why-verafy" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo inverted />
          <nav className="flex items-center gap-6 text-sm text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:contact@verafy.ca"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            contact@verafy.ca
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>
            This tool provides compliance guidance based on current Ontario
            regulations. It does not constitute legal advice.
          </p>
          <p className="shrink-0">© 2026 Verafy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
