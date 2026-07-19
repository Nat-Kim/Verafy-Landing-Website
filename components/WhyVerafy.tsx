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
      className="flex flex-col justify-center bg-[#FBF8F5] px-4 py-16 sm:px-6 sm:py-24 lg:min-h-[1045px]"
    >
      <div className="mx-auto w-full max-w-[998px] text-center">
        <p className="text-[13px] font-medium tracking-[0.15em] text-orange sm:text-[16px]">
          WHY VERAFY
        </p>

        <h2 className="mt-6 font-jakarta text-[28px] font-medium tracking-tight text-text-dark sm:text-[36px] lg:text-[48px]">
          Built for the way you actually work
        </h2>

        <p className="mx-auto mt-4 w-full max-w-[384px] text-[16px] leading-7 text-text-gray sm:text-[18px]">
          Verafy understands your forms, your rules, and your judgment — not
          just your file uploads.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[998px] gap-6 sm:mt-12 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="grid w-full min-h-[228px] rounded-2xl bg-[#F4EFEA] card p-6 sm:min-h-[281px] sm:p-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-white">
              <feature.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[24px] font-medium leading-none text-text-dark sm:mt-6">
              {feature.title}
            </p>
            <p className="mt-2 text-[20px] leading-tight text-text-gray sm:mt-3">
              {feature.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
