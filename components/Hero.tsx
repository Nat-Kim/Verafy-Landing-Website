import Image from "next/image";
import SubscribeForm from "./SubscribeForm";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center bg-cream px-6 pb-20 pt-20 text-center lg:min-h-[1045px]">
      <div className="mx-auto flex w-full max-w-[790px] flex-col items-center">
        <p className="text-xs font-medium tracking-[0.15em] text-orange">
          TRESA COMPLIANCE FOR ONTARIO AGENTS
        </p>
        <h1 className="mt-6 max-w-2xl text-5xl font-medium leading-[1.1] tracking-tight text-text-dark sm:text-6xl">
          Every OREA form
          <br />
          checked in minutes
        </h1>

        <div className="mt-10 flex aspect-[790/723] w-full max-w-[790px] items-center justify-center rounded-2xl bg-paper p-16">
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

        <div className="mt-10 flex justify-center">
          <SubscribeForm
            inputClassName="border border-cream-border bg-white text-text-dark placeholder:text-text-gray"
            buttonClassName="bg-orange text-white hover:bg-orange-dark"
          />
        </div>
        <p className="mt-4 text-[11px] tracking-[0.1em] text-text-gray">
          FREE DURING BETA. NO CREDIT CARD REQUIRED.
        </p>
      </div>
    </section>
  );
}
