"use client";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import { LockIcon, ArrowRightIcon, ArrowLeftIcon, L } from "@/src/components/ui/Icons";
import {VoyaMark} from "@/src/components/brand/VoyaLogo";
import inputValidation from "../utils/inputValidation";

const LoginForm = () => {
  const [accountIdentifier, setAccountIdentifier] = useState("");
  const [inputError, setInputError] = useState("");
  const [showModal, setShowModal] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputError("");
    const validationResult = inputValidation({accountIdentifier});
    if (Object.keys(validationResult).length > 0 ) {
      setInputError(validationResult.accountIdentifier);
      return;
    }
    setShowModal(true);

  };

  return (
    <div className="relative flex h-full w-full max-w-[530px] flex-col rounded-[28px] bg-[#F8F8F8] px-8 py-9 ">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.back()}
          className="absolute left-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[var(--color-brand-primary-deep)] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
           <ArrowLeftIcon className="h-4 w-4" />
        </button>

        <div className="w-34.75 h-34.75 rounded-[50%] bg-[#ffffff] m-auto flex items-center justify-center mb-6 shadow-[0_1px_4px_3px_rgba(0,0,0,0.03)]">
            <VoyaMark className="w-24.75 h-[57.95px] w-auto" />
        </div>
      <div className="flex flex-col  w-[382px] m-auto">
      <h1 className=" font-montserrat text-[#1C1B1B] text-[28px] font-extrabold leading-[40px] tracking-[-0.9px] m-auto mb-2">Welcome back</h1>
      <p className=" font-montserrat text-[#3C4A46] text-[18px] font-medium leading-[28px] tracking-[0px] mb-7">Secure access to your wealth sanctuary.</p>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label 
           htmlFor="accountIdentifier"
           className="font-manrope text-[#006B5C] text-[12px] font-bold leading-[18px] tracking-[1.2px]  mb-1 block"
           >
            ACCOUNT IDENTIFIER
        </label>
          <input
            type="text"
            id="accountIdentifier"
            value={accountIdentifier}
            onChange={(e) => setAccountIdentifier(e.target.value)}
            placeholder="Phone number or Email"
            className=" font-manrope block w-full rounded-lg border border-[#E1E1E1] bg-white pl-12 pr-4 py-[17px] text-sm text-[#2C2C2C] outline-none placeholder:text-[#C1C1C1] focus:border-[var(--color-brand-accent)] focus:ring-1 focus:ring-[var(--color-brand-accent)]"
          />
        </div>
        <Button
          className="mt-10 font-plusJakartaSans "
          onClick={() => router.push("/onboarding/verify")}
          endIcon={<ArrowRightIcon className="h-4 w-4" />}
        >
          Continue
        </Button>
      </form>
        <p className="font-manrope mt-6 mb-10 text-center text-[16px] leading-[24px] tracking-[0px] text-[#3C4A46] font-medium">
            Don't have an account?{" "}
            <a href="/onboarding" className="font-semibold text-[var(--color-brand-primary-deep)]">
                Sign up
            </a>
        </p>
        <div className=" font-manrope mt-auto flex items-center justify-center gap-1.5 pt-2 text-[12px] font-medium leading-[16px] text-[#6C7A76] border-t-[1px] border-[#E1E1E1]">
            <LockIcon className="h-3.5 w-3.5" />
            <span>Secured by Voya Vault Systems</span>
        </div>
        </div>
    </div>
  );
};

export default LoginForm;