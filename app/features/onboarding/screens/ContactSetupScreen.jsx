"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProgressSteps from "../../../components/ui/ProgressSteps";
import SegmentedControl from "../../../components/ui/SegmentedControl";
import PhoneNumberField from "../components/PhoneNumberField";
import Button from "../../../components/ui/Button";
import { ArrowLeftIcon, ArrowRightIcon, LockIcon } from "../../../components/ui/Icons";

const AUTH_TABS = [
  { label: "Phone", value: "phone" },
  { label: "Email", value: "email" },
];

export default function ContactSetupScreen() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState("phone");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] p-4 sm:p-8">
      <div className="relative flex w-full max-w-[960px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

        {/* ── Left: Photo panel ── */}
        <div className="relative hidden lg:block lg:w-[55%]">
          <button
            type="button"
            aria-label="Go back"
            onClick={() => router.push("/onboarding")}
            className="absolute left-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[var(--color-brand-primary-deep)] shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
          </button>
          <Image
            src="/onboarding/signupSideIllustration.svg"
            alt="Business person working on a laptop in a bright workspace"
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 0vw, 55vw"
            className="object-cover object-center"
          />
        </div>

        {/* ── Right: Form panel ── */}
        <div className="flex w-full flex-col bg-white px-8 py-9 sm:px-10 lg:w-[45%]">

          <ProgressSteps currentStep={0} totalSteps={5} />

          <div className="mt-7">
            <h1 className="text-[1.75rem] font-extrabold leading-tight tracking-tight text-[#1a1a1a]">
              Let&apos;s get you set up
            </h1>
            <p className="mt-2 text-[0.875rem] leading-relaxed text-[#6b6b6b]">
              Start your journey to financial clarity in seconds.
            </p>
          </div>

          <SegmentedControl
            className="mt-7"
            options={AUTH_TABS}
            value={authMethod}
            name="auth-method"
            onSelect={setAuthMethod}
          />

          <div className="mt-6">
            {authMethod === "phone" ? (
              <PhoneNumberField label="Phone Number" />
            ) : (
              <label className="block">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a4a4a4]">
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex min-h-14 w-full rounded-xl border border-[#e6e3e3] bg-white px-4 text-sm text-[#2c2c2c] shadow-[0_1px_2px_rgba(0,0,0,0.02)] outline-none placeholder:text-[#c1c1c1] focus:border-[var(--color-brand-accent)] focus:ring-1 focus:ring-[var(--color-brand-accent)]"
                />
              </label>
            )}
          </div>

          <p className="mt-5 text-[0.8rem] leading-relaxed text-[#7a7a7a]">
            By continuing, you agree to our{" "}
            <a href="#" className="font-semibold text-[var(--color-brand-primary-deep)] underline underline-offset-2">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="font-semibold text-[var(--color-brand-primary-deep)] underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>

          <Button
            className="mt-5"
            onClick={() => router.push("/onboarding/verify")}
            endIcon={<ArrowRightIcon className="h-4 w-4" />}
          >
            Continue
          </Button>

          <p className="mt-6 text-center text-sm text-[#7a7a7a]">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-[var(--color-brand-primary-deep)]">
              Log in
            </a>
          </p>

          <div className="mt-auto flex items-center justify-center gap-1.5 pt-10 text-xs text-[#c0c0c0]">
            <LockIcon className="h-3.5 w-3.5" />
            <span>Secured by Voya Vault Systems</span>
          </div>
        </div>
      </div>
    </main>
  );
}
