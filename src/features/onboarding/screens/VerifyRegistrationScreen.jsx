"use client";
import ProgressSteps from "../../../components/ui/ProgressSteps";
import PhotoPanel from "../components/common/PhotoPanel";
import OtpVerification from "../components/common/OtpVerification";

export default function VerifyRegistrationScreen () {
  

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] p-4 sm:p-8">
      <div className="relative flex w-full max-w-[960px] overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">

        {/* ── Left: Photo panel ── */}
        <PhotoPanel 
         imgSrc="/onboarding/verifySideIllustration.svg" 
         alt="Business professionals in a meeting room"
        />

        {/* ── Right: Form panel ── */}
        <div className="flex w-full flex-col bg-white px-8 py-9 sm:px-10 lg:w-[45%]">
          <ProgressSteps currentStep={1} totalSteps={5} />
          <OtpVerification />
        </div>
      </div>
    </main>
  );
}
