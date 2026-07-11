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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
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
          disabled={submitting}
          data-role={role ?? undefined}
          className={`shrink-0 rounded-lg px-6 py-3 text-sm font-medium transition-colors disabled:opacity-60 ${buttonClassName}`}
        >
          {submitting ? "Joining…" : buttonLabel}
        </button>
      </form>
      {submitted && (
        <p className="text-sm font-medium">
          You've been added to the waitlist!
        </p>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
