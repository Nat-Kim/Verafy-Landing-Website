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
    <section className="flex flex-col justify-center bg-navy px-6 py-24 lg:min-h-[1045px]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium tracking-[0.15em] text-white/70">
          CURRENT PROBLEM
        </p>
        <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
          Ontario agents navigate TRESA requirements by hand — with no
          purpose-built compliance tool.
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-center rounded-2xl bg-cream-card px-6 py-10 text-center"
          >
            {card.graphic}
            <p className="mt-6 text-lg font-medium text-text-dark">
              {card.title}
            </p>
            <p className="mt-2 text-sm text-text-gray">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
