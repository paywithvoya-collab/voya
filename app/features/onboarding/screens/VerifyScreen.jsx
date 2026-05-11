"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProgressSteps from "../../../components/ui/ProgressSteps";
import OtpInput from "../components/OtpInput";
import Button from "../../../components/ui/Button";
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon, LockIcon } from "../../../components/ui/Icons";

const RESEND_SECONDS = 24;

export default function VerifyScreen({ maskedPhone = "+234 ••• ••• 4290" }) {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(RESEND_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const formatted = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
    seconds % 60
  ).padStart(2, "0")}`;

  function handleResend() {
    setSeconds(RESEND_SECONDS);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] p-4 sm:p-8">
      <div className="relative flex w-full max-w-[960px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

        {/* ── Left: Photo panel ── */}
        <div className="relative hidden lg:block lg:w-[55%]">
          <button
            type="button"
            aria-label="Go back"
            onClick={() => router.push("/onboarding/contact")}
            className="absolute left-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[var(--color-brand-primary-deep)] shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <Image
            src="/onboarding/verifySideIllustration.svg"
            alt="Business professionals in a meeting room"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 0vw, 55vw"
            className="object-cover object-center"
          />
        </div>

        {/* ── Right: Form panel ── */}
        <div className="flex w-full flex-col bg-white px-8 py-9 sm:px-10 lg:w-[45%]">

          <ProgressSteps currentStep={1} totalSteps={5} />

          <div className="mt-7">
            <h1 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-[#1a1a1a]">
              Verify it&apos;s{" "}
              <span className="text-[var(--color-brand-accent)]">you.</span>
            </h1>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-[#6b6b6b]">
              We&apos;ve sent a 6-digit verification code to
            </p>
            <p className="text-[0.875rem] font-semibold text-[#1a1a1a]">
              {maskedPhone}.
            </p>
          </div>

          <div className="mt-8">
            <OtpInput length={6} onChange={setOtp} />
          </div>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-soft)] px-3.5 py-1.5 text-sm font-semibold text-[var(--color-brand-primary-deep)]">
              <ClockIcon className="h-3.5 w-3.5" />
              {formatted}
            </span>
            <button
              type="button"
              onClick={handleResend}
              disabled={seconds > 0}
              className="text-sm font-medium text-[var(--color-brand-accent)] transition hover:text-[var(--color-brand-primary-deep)] disabled:cursor-default disabled:opacity-50"
            >
              Resend Code
            </button>
          </div>

          <Button
            className="mt-6"
            endIcon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Verify and Continue
          </Button>

          <div className="mt-auto flex items-center justify-center gap-1.5 pt-10 text-xs text-[#c0c0c0]">
            <LockIcon className="h-3.5 w-3.5" />
            <span>Secured by Voya Vault Systems</span>
          </div>
        </div>
      </div>
    </main>
  );
}
