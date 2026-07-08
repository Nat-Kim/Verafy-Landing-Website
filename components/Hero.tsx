import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center bg-cream px-6 py-16 text-center lg:min-h-[1045px]">
      <div className="mx-auto flex w-full max-w-[790px] flex-col items-center">
        <p className="text-xs font-medium tracking-[0.15em] text-orange">
          TRESA COMPLIANCE FOR ONTARIO AGENTS
        </p>
        <h1 className="mt-6 text-[80px] font-medium leading-[1.1] tracking-tight text-text-dark">
          Every OREA form
          <br />
          checked in minutes
        </h1>

        <div className="h-[512px] w-[512px] rounded-2xl bg-paper">
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

        <div className="flex justify-center w-full max-w-[582px]">
          <SubscribeForm
            formClassName="flex w-full max-w-[582px] flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            inputClassName="h-12 w-full sm:max-w-[405px] border border-cream-border bg-white text-text-dark placeholder:text-text-gray"
            buttonClassName="h-12 whitespace-nowrap bg-orange text-white hover:bg-orange-dark"
          />
        </div>
        <p className="mt-3 text-[11px] tracking-[0.1em] text-text-gray">
          FREE DURING BETA. NO CREDIT CARD REQUIRED.
        </p>
      </div>
    </section>
  );
}
