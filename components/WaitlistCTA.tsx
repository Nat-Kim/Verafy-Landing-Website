"use client";

import { useState } from "react";
import SubscribeForm from "./SubscribeForm";

const roles = ["Real estate agent", "Brokerage", "Investor / Other"];

export default function WaitlistCTA() {
  const [role, setRole] = useState(roles[0]);

  return (
    <section
      id="waitlist"
      className="flex flex-col justify-center bg-orange px-6 py-24 text-center lg:min-h-[800px]"
    >
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-medium tracking-[0.15em] text-white/80">
          JOIN THE WAITLIST
        </p>
        <h2 className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Be the first to use Verafy
        </h2>
        <p className="mt-4 text-base leading-7 text-white/80">
          Join the waitlist and get early access when we launch.
        </p>

        <p className="mt-10 text-sm text-white/80">I am a...</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {roles.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-full px-4 py-2 text-xs font-medium tracking-[0.05em] uppercase transition-colors ${
                role === r
                  ? "bg-white text-orange-dark"
                  : "border border-white/50 text-white hover:bg-white/10"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <SubscribeForm
            role={role}
            inputClassName="w-full flex-1 border border-white/0 bg-white text-text-dark placeholder:text-text-gray"
            buttonClassName="bg-ink text-white hover:bg-black"
          />
        </div>
      </div>
    </section>
  );
}
