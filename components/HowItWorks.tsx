import { ArrowIcon, LinkIcon } from "./icons";

const issues = [
  {
    severity: "CRITICAL",
    form: "OREA 100",
    icon: null,
    title: "Irrevocability date precedes Offer Date.",
    fix: "Ensure Irrevocability date/time is set to a future date/time relative to offer.",
  },
  {
    severity: "CRITICAL",
    form: "APS + Schedule A",
    icon: <LinkIcon className="h-3.5 w-3.5 text-navy" />,
    title: "Buyer name inconsistency.",
    fix: "Buyer name on Schedule A must match APS exactly (John Doe vs J. Doe).",
  },
  {
    severity: "ADVISORY",
    form: "Form 801",
    icon: null,
    title: "Missing timestamp on acknowledgement.",
    fix: "Add time of signature to ensure sequence clarity.",
  },
  {
    severity: "ADVISORY",
    form: "OREA 320",
    icon: null,
    title: "Notice of fulfillment wording vague.",
    fix: "Use standard OREA clauses for condition removal.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col justify-center bg-cream px-6 py-24 lg:min-h-[1045px]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.15em] text-orange">
          HOW IT WORKS
        </p>
        <h2 className="mt-6 text-3xl font-medium tracking-tight text-text-dark sm:text-4xl">
          Checked against every TRESA rule
        </h2>
        <p className="mt-4 text-base leading-7 text-text-gray">
          Verafy reads every form in your transaction, spots any TRESA
          issues, and tells you exactly what needs attention, turning hours
          of manual review into five minutes.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-cream-border bg-white">
        <div className="flex items-center justify-between border-b border-cream-border px-6 py-4">
          <p className="text-sm font-medium text-text-dark">
            Compliance Report
          </p>
          <p className="text-xs font-medium tracking-[0.1em] text-orange">
            4 ISSUES
          </p>
        </div>
        <div className="divide-y divide-cream-border">
          {issues.map((issue, i) => (
            <div key={i} className="flex gap-4 px-6 py-5 text-left">
              <p
                className={`w-20 shrink-0 text-xs font-medium tracking-[0.05em] ${
                  issue.severity === "CRITICAL"
                    ? "text-red-dot"
                    : "text-orange"
                }`}
              >
                {issue.severity}
              </p>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  {issue.icon}
                  <p className="text-xs font-medium tracking-[0.05em] text-text-gray">
                    {issue.form}
                  </p>
                </div>
                <p className="mt-1.5 text-sm font-medium text-text-dark">
                  {issue.title}
                </p>
                <p className="mt-1 text-sm text-text-gray">
                  Fix: {issue.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-border text-text-dark transition-colors hover:bg-cream-card"
        >
          <ArrowIcon direction="left" className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-border text-text-dark transition-colors hover:bg-cream-card"
        >
          <ArrowIcon direction="right" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
