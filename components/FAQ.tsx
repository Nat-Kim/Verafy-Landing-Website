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
      className="flex flex-col justify-center bg-cream px-6 py-24 lg:min-h-[1045px]"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-4xl font-medium tracking-tight text-text-dark">
          FAQ
        </h2>

        <div className="mt-12 divide-y divide-cream-border border-t border-cream-border">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="text-base font-medium text-text-dark">
                    {faq.question}
                  </span>
                  <PlusMinusIcon
                    open={open}
                    className="h-4 w-4 shrink-0 text-text-dark"
                  />
                </button>
                {open && (
                  <p className="max-w-lg pb-6 text-sm leading-6 text-text-gray">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
