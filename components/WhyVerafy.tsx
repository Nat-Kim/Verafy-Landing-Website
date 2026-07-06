import { ChecklistIcon, HomeIcon, LayersIcon, LightbulbIcon } from "./icons";

const features = [
  {
    icon: LayersIcon,
    title: "Cross-form validation",
    body: "Verafy compares names, dates, and deal terms across every form in your entire transaction.",
  },
  {
    icon: HomeIcon,
    title: "Built for TRESA, not generic",
    body: "Not a generic document reviewer. Every check is built around TRESA rules and OREA forms.",
  },
  {
    icon: ChecklistIcon,
    title: "You stay in control",
    body: "Disagree with a flag? Override it with a quick note. Verafy guides, you decide, and every call is logged.",
  },
  {
    icon: LightbulbIcon,
    title: "Plain-language fixes",
    body: "Every issue comes with a clear correction suggestion and the reason behind it — no jargon to decode.",
  },
];

export default function WhyVerafy() {
  return (
    <section
      id="why-verafy"
      className="flex flex-col justify-center bg-cream px-6 py-24 lg:min-h-[1045px]"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium tracking-[0.15em] text-orange">
          WHY VERAFY
        </p>
        <h2 className="mt-6 text-3xl font-medium tracking-tight text-text-dark sm:text-4xl">
          Built for the way you actually work
        </h2>
        <p className="mt-4 text-base leading-7 text-text-gray">
          Verafy understands your forms, your rules, and your judgment — not
          just your file uploads.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-cream-card p-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-white">
              <feature.icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-lg font-medium text-text-dark">
              {feature.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-gray">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
