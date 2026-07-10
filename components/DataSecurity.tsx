import PadlockIllustration from "./PadlockIllustration";

export default function DataSecurity() {
  return (
    <section className="flex flex-col justify-center bg-ink px-6 py-24 lg:min-h-[800px]">
      <div className="mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-2">
        <div className="w-[485px] h-[276]">
          <h2 className="text-[42px] font-jakarta font-medium leading-[110%] tracking-[-0.06em] text-[#F4EFEA]">
            Your client data,
            <br />
            handled responsibly
          </h2>
          <p className="font-jakarta mt-4 max-w-md text-[20px] font-normal leading-[160%] tracking-[-0.03em] text-[#F4EFEA]">
            Encrypted in transit and at rest. PIPEDA-aligned. Deletable on
            demand.
          </p>
          <p className="font-ibm-plex-mono mt-10 text-[14px] font-normal tracking-[0] text-[#F4EFEA]">
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
