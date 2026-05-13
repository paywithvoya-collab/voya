"use client";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import { LockIcon, ArrowRightIcon, ArrowLeftIcon, AtIcon,FingerprintIcon } from "@/src/components/ui/Icons";
import {VoyaMark} from "@/src/components/brand/VoyaLogo";
import inputValidation from "../utils/inputValidation";
import Modal from "@/src/components/ui/Modal";
import OtpVerification from "./common/OtpVerification";



export default function LoginForm(){
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
    <div className="relative min-h-screen flex md:h-full w-full md:max-w-132.5 flex-col md:rounded-[28px] bg-[#F8F8F8] px-8 py-9 ">
        <button
          type="button"
          aria-label="Go back"
          onClick={() => router.back()}
          className="absolute left-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-(--color-brand-primary-deep) shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
           <ArrowLeftIcon className="h-4 w-4" />
        </button>

        <div className="hidden md:flex w-34.75 h-34.75 rounded-[50%] bg-[#ffffff] m-auto  items-center justify-center shadow-[0_1px_4px_3px_rgba(0,0,0,0.03)]">
            <VoyaMark className="w-24.75 h-[57.95px] m-auto" />
        </div>
      <div className=" mt-20 md:mt-6 flex flex-col  max-w-95.5 m-auto"> 
      <h1 className=" font-montserrat   text-[#1C1B1B] text-[28px] font-extrabold leading-10 tracking-[-0.9px] md:text-center  mb-2">Welcome back</h1>
      <p className=" font-montserrat text-[#3C4A46] text-[18px] font-medium leading-7 tracking-normal mb-7">Secure access to your wealth sanctuary.</p>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <label 
           htmlFor="accountIdentifier"
           className="font-manrope text-[#006B5C] text-[12px] font-bold leading-4.5 tracking-[1.2px]  mb-1 block"
           >
            ACCOUNT IDENTIFIER
           </label>
          <input
            type="text"
            id="accountIdentifier"
            value={accountIdentifier}
            onChange={(e) => setAccountIdentifier(e.target.value)}
            placeholder="Phone number or Email"
            className=" font-manrope block w-full rounded-lg border border-[#E1E1E1] bg-white pl-12 pr-4 py-4.25 text-sm text-[#2C2C2C] outline-none placeholder:text-[#C1C1C1] focus:border-(--color-brand-accent)  "
          />

          <AtIcon className="h-5 w-5 absolute left-5 top-[calc(64%-10px)] text-[#6c7a76]" />
        </div>
        <Button
          className="mt-10 font-plusJakartaSans cursor-pointer "
          onClick={() => setShowModal(true)}
          endIcon={<ArrowRightIcon className="h-4 w-4" />}
        >
          Continue
        </Button>
      </form>
        <p className="font-manrope mt-6 text-center text-[16px] leading-6 tracking-normal text-[#3C4A46] font-medium">
            Don't have an account?{" "}
            <a href="/onboarding" className="font-semibold text-(--color-brand-primary-deep)">
                Sign up
            </a>
        </p>

        <div className="mt-14 md:hidden">
            <p className="font-manrope text-[12px] text-center leading-4 tracking-[1.2px] text-[#6C7A76]">OR SECURE ENTRY WITH</p>
            <FingerprintIcon className="h-18.5 w-16.75 m-auto mt-7 mb-5" /> 
            <p className="font-manrope text-[12px] text-center leading-4 tracking-[1.2px] text-[#6C7A76]">TAP HERE</p>
        </div>



        <div className=" font-manrope mt-40 flex items-center justify-center gap-1.5 pt-2 text-[12px] font-medium leading-4 text-[#6C7A76] border-t border-[#E1E1E1]">
            <LockIcon className="h-3.5 w-3.5" />
            <span>Secured by Voya Vault Systems</span>
        </div>
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
             <OtpVerification/>
          </Modal>
        )}
    </div>
  );
};

