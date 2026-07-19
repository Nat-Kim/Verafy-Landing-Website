import PadlockIllustration from "./PadlockIllustration";

export default function DataSecurity() {
  return (
    <section className="flex flex-col justify-center bg-ink px-4 py-16 sm:px-6 sm:py-24 lg:min-h-[800px]">
      <div className="mx-auto grid max-w-5xl items-center gap-10 sm:grid-cols-2 sm:gap-12">
        <div className="order-2 w-full max-w-[485px] sm:order-1">
          <h2 className="text-[28px] font-jakarta font-medium leading-[120%] tracking-[-0.06em] text-[#F4EFEA] sm:text-[42px]">
            Your client data,
            <br />
            handled responsibly
          </h2>
          <p className="font-jakarta mt-4 max-w-md text-[17px] font-normal leading-[160%] tracking-[-0.03em] text-[#F4EFEA] sm:text-[20px]">
            Encrypted in transit and at rest. PIPEDA-aligned. Deletable on
            demand.
          </p>
          <div className="flex justify-center py-8 sm:hidden">
            <div className="h-[220px] w-[220px]">
              <PadlockIllustration />
            </div>
          </div>
          <p className="font-ibm-plex-mono mt-8 text-[14px] font-normal tracking-[0] text-[#F4EFEA] sm:mt-10">
            VERAFY PROVIDES COMPLIANCE GUIDANCE, NOT LEGAL ADVICE.
          </p>
        </div>
        <div className="order-1 hidden justify-center sm:order-2 sm:flex">
          <div className="sm:h-[320px] sm:w-[320px] lg:h-[512px] lg:w-[512px]">
            <PadlockIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
