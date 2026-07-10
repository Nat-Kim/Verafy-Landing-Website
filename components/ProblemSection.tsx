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
    <section className="flex flex-col justify-center bg-[#0031AA] px-6 py-24 lg:min-h-[1045px]">
      <div className="mx-auto w-full max-w-[1228px] text-center " >
        <p className="font-plex-mono text-[16px] font-medium leading-[120%] tracking-0 text-[#FBF8F5]">
          CURRENT PROBLEM
        </p>
        <h2 className="font-jakarta mt-6 text-[48px] font-medium leading-[110%] tracking-[-0.06%] text-[#FBF8F5]">
          Ontario agents navigate TRESA
          <br />
          requirements by hand — with no
          <br />
          purpose-built compliance tool.
        </h2>
      </div>

      <div className="mx-auto mt-16 grid w-fit gap-x-[44px] gap-y-[64px] sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex h-[402px] w-[380px] flex-col items-center rounded-2xl bg-[#FBF8F5] px-6 py-10 text-center"
          >
            {card.graphic}
            <p className="font-jakarta mt-6 text-[28px] font-medium text-[#2C2521]">
              {card.title}
            </p>
            <p className="font-plex-mono mt-2 text-[15px] text-[#6B6058]">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
