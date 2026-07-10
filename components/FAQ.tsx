"use client";

import { useState } from "react";
import { PlusMinusIcon } from "./icons";

const faqs = [
  {
    question: "Which OREA forms does Verafy support?",
    answer:
      "Verafy supports the core OREA forms used in Ontario residential transactions, including the APS, Schedule A, and the most commonly used amendment, notice, and acknowledgement forms, with more being added regularly.",
  },
  {
    question: "Is my client data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, handled in a manner aligned with PIPEDA, and can be deleted on demand at any time.",
  },
  {
    question: "Does this replace my brokerage's review?",
    answer:
      "No. Verafy provides compliance guidance to help you catch issues faster — it doesn't replace your brokerage's review process or constitute legal advice.",
  },
  {
    question: "When does Verafy launch?",
    answer:
      "Verafy is currently in beta. Join the waitlist to get early access as soon as we open up availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center bg-[#FBF8F5] px-6 py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-center lg:h-[714px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-0.03] text-[#2C2521]">
            FAQ
          </h2>

          <div className="mt-12 divide-y divide-cream-border border-b border-cream-border">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between py-6 text-left"
                  >
                    <h3 className="font-jakarta text-[24px] font-medium leading-[120%] tracking-[-0.03] text-[#1C1714]">
                      {faq.question}
                    </h3>
                    <PlusMinusIcon
                      open={open}
                      className="h-4 w-4 shrink-0 text-text-dark"
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-lg pb-6 font-jakarta text-[20px] text-normal leading-[160%] tracking-[-0.03] text-[#1C1714]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
