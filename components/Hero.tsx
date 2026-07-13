"use client";

import Image from "next/image";
import { useState } from "react";
import SubscribeForm from "./SubscribeForm";
import { ROLES } from "./roles";

const roles = [
  { label: ROLES[0], width: 196 },
  { label: ROLES[1], width: 119 },
  { label: ROLES[2], width: 186 },
];

export default function Hero() {
  const [role, setRole] = useState<string>(ROLES[0]);

  return (
    <section className="flex flex-col justify-center bg-[#FBF8F5] px-4 py-12 text-center sm:px-6 sm:py-16 lg:min-h-[1045px]">
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
        <p className="mt-0 font-jakarta text-[20px] font-normal leading-[100%] tracking-[-0.03%] text-[#6B6058] sm:mt-3 sm:text-[20px]">I am a... (select one)</p>
        <div className="mx-auto mt-4 flex w-full max-w-[525px] flex-wrap items-center justify-center gap-3">
          {roles.map(({ label, width }) => (
            <button
              key={label}
              type="button"
              onClick={() => setRole(label)}
              style={{ width }}
              className={`flex h-[35px] max-w-full items-center justify-center rounded-full bg-white font-plex-mono text-[16px] leading-[120%] tracking-[0] uppercase transition-colors ${role === label
                ? "text-[#B34B17] font-bold"
                : "text-[#6B6058] font-medium"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex w-full max-w-[582px] justify-center lg:mt-3">
          <SubscribeForm
            role={role}
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
