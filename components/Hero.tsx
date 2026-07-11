import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center bg-cream px-4 py-12 text-center sm:px-6 sm:py-16 lg:min-h-[1045px]">
      <div className="mx-auto flex w-full max-w-[790px] flex-col items-center">
        <p className="font-plex-mono text-[13px] font-medium leading-[120%] tracking-0 text-[#EB712F] sm:text-[16px]">
          TRESA COMPLIANCE FOR ONTARIO AGENTS
        </p>
        <h1 className="font-jakarta mt-6 text-[36px] font-medium leading-[110%] tracking-[-0.06%] text-[#1C1714] sm:text-[52px] lg:text-[80px]">
          Every OREA form
          <br />
          checked in minutes
        </h1>

        <div className="mt-8 h-[240px] w-[240px] rounded-2xl bg-paper sm:h-[360px] sm:w-[360px] lg:mt-0 lg:h-[512px] lg:w-[512px]">
          <div className="relative h-full w-full">
            <Image
              src="/townhouses.svg"
              alt="Illustration of townhouses"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-8 flex w-full max-w-[582px] justify-center lg:mt-0">
          <SubscribeForm
            formClassName="flex w-full max-w-[582px] flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            inputClassName="h-12 w-full sm:max-w-[405px] border border-cream-border bg-white text-text-dark placeholder:text-text-gray"
            buttonClassName="h-12 whitespace-nowrap bg-orange text-white hover:bg-orange-dark"
          />
        </div>
        <p className="font-plex-mono mt-3 text-[14px] font-normal leading-[100%] tracking-0 text-[#8C8178]">
          FREE DURING BETA. NO CREDIT CARD REQUIRED.
        </p>
      </div>
    </section>
  );
}
