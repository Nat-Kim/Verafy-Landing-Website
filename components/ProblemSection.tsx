import {
  ManualReviewGraphic,
  MultiFormErrorsGraphic,
  RealConsequencesGraphic,
} from "./ProblemGraphics";

const cards = [
  {
    graphic: <ManualReviewGraphic />,
    title: "2-3 hrs",
    body: "of manual review per transaction",
  },
  {
    graphic: <MultiFormErrorsGraphic />,
    title: "Multi-form errors",
    body: "Errors that span multiple forms are easy to miss",
  },
  {
    graphic: <RealConsequencesGraphic />,
    title: "Real consequences",
    body: "Non-compliance means delays, liability, and reputational risk",
  },
];

export default function ProblemSection() {
  return (
    <section className="flex flex-col justify-center bg-[#0031AA] px-4 py-16 sm:px-6 sm:py-24 lg:min-h-[1045px]">
      <div className="mx-auto w-full max-w-[1228px] text-center">
        <p className="font-plex-mono text-[13px] font-medium leading-[120%] tracking-0 text-[#FBF8F5] sm:text-[16px]">
          CURRENT PROBLEM
        </p>
        <h2 className="font-jakarta mt-6 text-[28px] font-medium leading-[120%] tracking-[-0.06%] text-[#FBF8F5] sm:text-[36px] lg:text-[48px]">
          Ontario agents navigate TRESA
          <br className="hidden sm:block" /> requirements by hand — with no
          <br className="hidden sm:block" /> purpose-built compliance tool.
        </h2>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-[380px] grid-cols-1 gap-y-8 sm:mt-16 sm:max-w-3xl sm:gap-y-10 lg:max-w-[1228px] lg:grid-cols-3 lg:gap-x-[44px] lg:gap-y-[64px]">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex h-full w-full flex-col items-center rounded-2xl bg-[#FBF8F5] px-6 py-8 text-center lg:py-10"
          >
            <div className="h-[140px] w-[140px] sm:h-[210px] sm:w-[210px]">
              {card.graphic}
            </div>
            <p className="font-jakarta mt-6 text-[24px] font-medium text-[#2C2521] sm:text-[28px]">
              {card.title}
            </p>
            <p className="font-plex-mono mt-2 text-[15px] text-[#6B6058]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
