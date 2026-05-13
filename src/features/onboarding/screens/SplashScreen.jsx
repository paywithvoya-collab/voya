"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import VoyaLogo from "../../../components/brand/VoyaLogo";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div
        style={{
          animation: "voyaFadeIn 0.8s ease-out forwards",
          opacity: 0,
        }}
      >
        <VoyaLogo
          showWordmark
          markClassName="w-44 h-auto"
          className="gap-0"
        />
      </div>

      <style>{`
        @keyframes voyaFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
