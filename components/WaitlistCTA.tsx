"use client";

import { useState } from "react";
import SubscribeForm from "./SubscribeForm";

const roles = [
  { label: "Real estate agent", width: 196 },
  { label: "Brokerage", width: 119 },
  { label: "Investor / Other", width: 186 },
];

export default function WaitlistCTA() {
  const [role, setRole] = useState(roles[0].label);

  return (
    <section
      id="waitlist"
      className="flex flex-col justify-center bg-[#EB712F] px-4 py-16 text-center sm:px-6 sm:py-24 lg:min-h-[800px]"
    >
      <div className="mx-auto max-w-xl">
        <p className="font-plex-mono text-[13px] font-medium leading-[120%] tracking-0 text-[#FBF8F5] sm:text-[16px]">
          JOIN THE WAITLIST
        </p>
        <h2 className="mt-4 font-jakarta text-[32px] font-medium leading-[110%] tracking-[-0.06%] text-[#FBF8F5] sm:text-[40px] lg:text-[48px]">
          Be the first to use Verafy
        </h2>
        <p className="mt-4 font-jakarta text-[16px] font-normal leading-[160%] tracking-[-0.03%] text-[#F4EFEA] sm:text-[18px]">
          Join the waitlist and get early access when we launch.
        </p>

        <p className="mt-16 font-jakarta text-[18px] font-normal leading-[160%] tracking-[-0.03%] text-[#FFFFFF] sm:mt-28 sm:text-[20px]">I am a... (select one)</p>
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

        <div className="mt-8 flex justify-center">
          <SubscribeForm
            role={role}
            formClassName="flex w-full max-w-[582px] flex-col items-stretch gap-3 sm:flex-row"
            inputClassName="h-12 w-full flex-1 border border-white/0 bg-white text-text-dark placeholder:text-text-gray"
            buttonClassName="flex h-12 w-full items-center justify-center bg-ink text-white hover:bg-black sm:w-[165px]"
          />
        </div>
      </div>
    </section>
  );
}
