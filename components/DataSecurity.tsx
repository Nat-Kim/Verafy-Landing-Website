import PadlockIllustration from "./PadlockIllustration";

export default function DataSecurity() {
  return (
    <section className="flex flex-col justify-center bg-ink px-6 py-24 lg:min-h-[800px]">
      <div className="mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-2">
        <div className="w-[485px] h-[276]">
          <h2 className="text-[42px] font-medium leading-tight tracking-tight text-white">
            Your client data,
            <br />
            handled responsibly
          </h2>
          <p className="mt-4 max-w-sm text-[20px] leading-7 text-white/60">
            Encrypted in transit and at rest. PIPEDA-aligned. Deletable on
            demand.
          </p>
          <p className="mt-10 text-[14px] tracking-[0.1em] text-white/40">
            VERAFY PROVIDES COMPLIANCE GUIDANCE, NOT LEGAL ADVICE.
          </p>
        </div>
        <div className="flex justify-center sm:justify-center">
          <div className="">
            <PadlockIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
