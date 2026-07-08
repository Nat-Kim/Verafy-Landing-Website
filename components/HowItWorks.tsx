"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "./icons";

const slides = [
  {
    src: "/ComplianceReportPic1.svg",
    alt: "Compliance report showing flagged TRESA issues",
  },
  {
    src: "/UploadPic2.svg",
    alt: "Uploading a transaction form to Verafy",
  },
  {
    src: "/VerafyCheckPic3.svg",
    alt: "Verafy checking a form against every TRESA rule",
  },
  {
    src: "/getCorrectionPic4.svg",
    alt: "Getting the recommended correction for a flagged issue",
  },
];

export default function HowItWorks() {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

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

      <div className="mx-auto mt-12 w-full max-w-2xl overflow-hidden rounded-2xl border border-cream-border">
        <div className="relative aspect-[569/504] w-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="relative h-full w-full shrink-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(index - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-border text-text-dark transition-colors hover:bg-cream-card"
        >
          <ArrowIcon direction="left" className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-orange" : "bg-cream-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(index + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-border text-text-dark transition-colors hover:bg-cream-card"
        >
          <ArrowIcon direction="right" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}