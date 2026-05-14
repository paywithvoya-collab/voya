"use client";

import { useState, useEffect } from "react";
import PhotoPanel from "../components/common/PhotoPanel";
import ProgressSteps from "../../../components/ui/ProgressSteps";
import UsernameForm from "../components/UsernameForm";
import generateUsernameSuggestions from "../utils/generateUsernameSuggestons";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@/src/components/ui/Icons";

export default function UsernameScreen() {
    const alphaNumericRegex = /^[a-zA-Z0-9_]+$/;
    const characterCountRegex = /^.{3,20}$/;
    const underScoresRegex = /^.*_.*$/;
    const fullName = "Alex Johnson";
    const [usernameSuggestions, setUsernameSuggestions] = useState([]);
    const [usernameError, setUsernameError] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (fullName) {
            setUsernameSuggestions(generateUsernameSuggestions(fullName));
        }
        }, [fullName]
    );
    
    const [username, setUsername] = useState("");

    const [conditions, setConditions] = useState({
        characterCount: false,
        alphaNumeric: false,
        underScores: false
    });

    useEffect(() => {
        setConditions({
            characterCount: characterCountRegex.test(username),
            alphaNumeric: alphaNumericRegex.test(username),
            underScores: underScoresRegex.test(username)
        });
    }, [username]);

    const usernameRequirement = [ "3-20 CHARACTERS","ALPHANUMERIC", "UNDERSCORES ALLOWED",];

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "alex_voya" || username === "johnson"|| username === "alex" ) {
            setUsernameError("This Username is already taken");
            return;
        }
        router.push("/onboarding/login"); 
    };

    return (
        <main className=" flex min-h-screen items-center justify-center bg-[#f5f5f7] md:p-8">
           <div className="relative flex h-full w-full max-w-239.5 overflow-hidden md:rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.10)]">   
                <PhotoPanel
                    imgSrc="/onboarding/username-aside-image.png"
                    alt="Person sitting on a bench"
                />

                <section className="flex w-full flex-col bg-white px-8 pt-18 pb-9 sm:px-10 lg:w-[45%]">
                    <button
                        type="button"
                        aria-label="Go back"
                        onClick={() => router.push("/onboarding/contact")}
                        className="absolute left-5 top-5 z-10 inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-(--color-brand-primary-deep) shadow-sm backdrop-blur-sm transition hover:bg-white"
                    >
                        <ArrowLeftIcon className="h-4 w-4" />
                    </button>
                    <ProgressSteps currentStep={5} totalSteps={5} className="mt-6" />    
                    <UsernameForm 
                        username={username}
                        setUsername={setUsername}
                        conditions={conditions}
                        usernameRequirement={usernameRequirement}
                        usernameSuggestions={usernameSuggestions}
                        usernameError={usernameError}
                        onSubmit={handleSubmit}
                        setUsernameError={setUsernameError}
                    />
                </section>
            </div>
        </main>
    );
}
