"use client";

import { useState } from "react";

export default function SubscribeForm({
  formClassName = "flex w-full max-w-xl flex-col gap-3 sm:flex-row",
  inputClassName = "",
  buttonClassName = "",
  buttonLabel = "Join the waitlist",
  role,
}: {
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonLabel?: string;
  role?: string | null;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm font-medium">
        You&apos;re on the list — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className={`rounded-lg px-5 py-3 text-sm outline-none ${inputClassName}`}
      />
      <button
        type="submit"
        data-role={role ?? undefined}
        className={`shrink-0 rounded-lg px-6 py-3 text-sm font-medium transition-colors ${buttonClassName}`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}
