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
      className="flex flex-col justify-center bg-[#FBF8F5] px-6 py-24 lg:min-h-[1045px]"
    >
      <div className="mx-auto w-full max-w-[998px] min-h-[162px] text-center">
        <p className="text-[16px] font-medium tracking-[0.15em] text-orange">
          WHY VERAFY
        </p>

        <h2 className="mt-6 font-jakarta text-[48px] font-medium tracking-tight text-text-dark">
          Built for the way you actually work
        </h2>

        <p className="mx-auto mt-4 w-[384px] min-h-[58px] text-[18px] leading-7 text-text-gray">
          Verafy understands your forms, your rules, and your judgment — not
          just your file uploads.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[998] max-h-[586] gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="grid w-full min-h-[281px] rounded-2xl bg-[#F4EFEA] card p-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-white">
              <feature.icon className="h-5 w-5" />
            </span>
            <p className="mt-0 text-[24px] font-medium leading-none text-text-dark">
              {feature.title}
            </p>
            <p className="mt-0 text-[20px] leading-tight text-text-gray">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
