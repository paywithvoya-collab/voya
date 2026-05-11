"use client";

import { ArrowLeftIcon } from "@/src/components/ui/Icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PhotoPanel = ({imgSrc, alt}) => {

    const router = useRouter()

    return(
        <div className="relative hidden lg:block lg:w-[55%]">
            <button
            type="button"
            aria-label="Go back"
            onClick={() => router.back()}
            className="absolute left-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-[var(--color-brand-primary-deep)] shadow-sm backdrop-blur-sm transition hover:bg-white"
            >
            <ArrowLeftIcon className="h-4 w-4" />
            </button>
            <Image
            src={imgSrc}
            alt={alt}
            fill
            unoptimized
            priority
            sizes="(max-width: 1024px) 0vw, 55vw"
            className="object-cover object-center"
            />
        </div>
    )
}

export default PhotoPanel;