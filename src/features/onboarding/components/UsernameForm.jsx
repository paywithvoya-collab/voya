"use client"    

import Button from "@/src/components/ui/Button";
import InputError from "./common/InputError";

export default function UsernameForm({ username, setUsername, conditions, usernameRequirement, usernameSuggestions, onSubmit, usernameError,setUsernameError }) {

    return (
        <form className="w-full max-w-104.75 mx-auto mt-10" onSubmit={onSubmit}>
            
            <h1 className="  text-[28px] font-monteserrat font-extrabold text-[#1C1B1B] mb-2 leading-[100%]">
                Choose your <span className="text-[#006B5C] block">username</span>
            </h1>
            <div 
               className="
                absolute
                left-0
                top-20
                h-50
                w-37.5
                rounded-full
                bg-linear-to-r
                from-[#65fadf7d]
                via-[#65fadf38]
                to-transparent
                blur-3xl"
            ></div>
            <p className="w-76.5 text-[16px] font-m0nteserrat font-medium leading-6 text-[#3C4A46] mb-4">
              This is how your friends and networks will find you on Voya.
            </p>
            <div className="mt-14">
                <label htmlFor="username" className="mb-2 block text-[12px] font-bold font-manrope leading-4 tracking-[1.2px] text-[#3C4A46]">
                    YOUR UNIQUE HANDLE
                </label>
                <div className=" relative mb-1 flex items-center">
                    <input
                        type="text"
                        placeholder="alex_voya"
                        value={username}
                        onChange={(e) => {setUsername(e.target.value); setUsernameError("")}}
                        className="font-manrope text-[18px] font-bold block w-full rounded-2xl border border-[#E1E1E1] bg-white pl-26 pr-4 py-4 text-sm text-[#2C2C2C] outline-none placeholder:text-[#DCD9D9] placeholder:font-manrope focus:border-(--color-brand-accent)"
                    />
                    <p className="absolute left-5 text-[#006B5C] font-bold text-[18px] font-manrope leading-7 ">voya.me/</p>
                    {username && (
                        <span className="absolute inline-flex justify-center items-center p-2 right-4 text-[10px] font-manrope font-semibold h-4 w-4 border-2 rounded-full" style={{color: conditions.characterCount && !usernameError ? "#006B5C" : "#BA1A1A", borderColor: conditions.characterCount && !usernameError ? "#006B5C" : "#BA1A1A"}}>
                            {conditions.characterCount && !usernameError? "✓" : "✗"}  
                        </span>
                    )}
                </div>     
            </div>
            <InputError message={usernameError} />
            <div className="mt-10 mb-6">
                <p className="font-manrope text-[13px] font-semibold leading-[19.5px] text-[#3C4A46B2] "> 
                    SUGGESTED FOR YOU
                </p>
                <div className="">
                {usernameSuggestions.map((suggestion, index) => (
                    
                        <div key={index} className="mt-2 w-full max-w-70.75 flex items-center justify-between rounded-lg border border-[#BBCAC41A] p-4 cursor-pointer" onClick={() => {setUsername(suggestion); setUsernameError("")}}>
                            <p className="text-[14px] font-manrope font-medium text-[#2C2C2C]">
                                {suggestion}
                            </p>
                            <button 
                             type="button"
                             variant="outline" 
                             size="xs"
                             className="h-3.5 w-3.5 flex items-center  text-[#41DDC2] justify-center">
                                +
                            </button>
                        </div>

                    

                ))}
                </div>
            </div>

            <div className="mt-4 mb-6 flex flex-wrap gap-2">
                {usernameRequirement.map((req, index) => (
                    <div key={index} className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex h-4 w-4 border border-[#3C4A4699] rounded-full  items-center  justify-center  p-2  pt-2.5 text-[10px] font-semibold text-[#6b6b6b] font-manrope    "
                        style={{color: conditions[Object.keys(conditions)[index]] ? "#ffffff" : "", borderColor: conditions[Object.keys(conditions)[index]] ? "#006B5C" : "", backgroundColor: conditions[Object.keys(conditions)[index]] ? "#006B5C" : ""}}>
                           {conditions[Object.keys(conditions)[index]] ? "✓" : ""}
                        </span>
                        <p className="text-[11px] font-manrope font-bold leading-[16.5px] tracking-[0.55px] text-[#3C4A4699]">
                            {req}
                        </p>
                    </div>
                ))}
            </div>

            <Button 
              className="mt-6" 
              disabled={!conditions.characterCount}
              type="submit"
            >
                Done
            </Button>

            <p className="mt-10 font-manrope font-medium text-center leading-4  text-[12px] text-[#3C4A4666]">
                   You can change this once every 30 days.       
            </p>

        </form>
    );
}   