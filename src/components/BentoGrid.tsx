"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
const cardContents = [
    {
        title: "SaaS Platforms",
        description:
            "We design and build scalable SaaS products with subscription flows, billing, multi-tenant architectures, and metrics-driven iteration.",
    },
    {
        title: "Frontend Solution Architecture",
        description:
            "Frontend architecture, design systems, and performance patterns that help teams ship reliable, maintainable UIs at scale.",
    },
    {
        title: "Product Design & UX",
        description:
            "Human-centered product design, interaction patterns, and visual systems that create cohesive and delightful user experiences.",
    },
    {
        title: "Mobile Applications",
        description:
            "Native and cross-platform mobile apps focused on performance, offline resilience, and polished UI/UX.",
    },
    {
        title: "Performance & Scalability",
        description:
            "Performance optimization, observability, and scalable engineering practices to keep your product fast as it grows.",
    },
]


const PlusCard: React.FC<{
    className?: string
    title: string
    description: string
}> = ({
    className = "",
    title,
    description,
}) => {
        return (
            <div
                className={cn(
                    "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
                    "flex flex-col justify-between",
                    className
                )}
            ><Link to={""}>
                    <CornerPlusIcons />
                    {/* Content */}
                    <div className="relative z-10 space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{description}</p>
                    </div></Link>
            </div>
        )
    }

const CornerPlusIcons = () => (
    <>
        <PlusIcon className="absolute -top-3 -left-3" />
        <PlusIcon className="absolute -top-3 -right-3" />
        <PlusIcon className="absolute -bottom-3 -left-3" />
        <PlusIcon className="absolute -bottom-3 -right-3" />
    </>
)

const PlusIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        className={`dark:text-white text-black size-6 ${className}`}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
)

export default function RuixenBentoCards() {
    const { scrollY } = useScroll();

    // Faster rotation based on scroll
    const rotate = useTransform(scrollY, [0, 1500], [0, 1080]);

    return (
        <>
            <div className="w-full flex justify-center py-6">
            <motion.div
                style={{ rotate }}
                className="w-10 h-10 md:w-8 md:h-8 opacity-90 "
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_100_4)">
                        <path
                            d="M31.9267 25.9405H51.6941C51.8622 25.9405 52 26.078 52 26.2464V51.6314C52 51.8012 51.8608 51.9404 51.6909 51.9388C37.5851 51.7752 26.1797 40.3778 26.0008 26.277V51.6941C26.0008 51.8625 25.8631 52 25.6947 52H0.309065C0.139226 52 0 51.8608 0.00146774 51.6909C0.166694 37.4738 11.7419 26.0017 25.9992 26H0.305919C0.137758 26 0 25.8625 0 25.6941V0.309065C0 0.139226 0.139226 0 0.309065 0.00167742C14.4149 0.165226 25.8203 11.5627 25.9992 25.6635V0.306129C25.9992 0.137758 26.1369 0 26.3053 0H51.6909C51.8608 0 52 0.139226 51.9985 0.309065C51.8562 12.5173 43.2999 22.7028 31.858 25.3376C31.5045 25.4186 31.5642 25.9405 31.9284 25.9405H31.9267Z"
                            fill="url(#paint0_linear_100_4)"
                        />
                    </g>

                    <defs>
                        <linearGradient
                            id="paint0_linear_100_4"
                            x1="-2.25891e-07"
                            y1="-0.917218"
                            x2="35.224"
                            y2="52.0752"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F06B58" />
                            <stop offset="0.205171" stopColor="#F19542" />
                            <stop offset="0.345371" stopColor="#F27E4C" />
                            <stop offset="0.53678" stopColor="#E96178" />
                            <stop offset="0.706731" stopColor="#E96D97" />
                            <stop offset="1" stopColor="#C97BC0" />
                        </linearGradient>

                        <clipPath id="clip0_100_4">
                            <rect width="52" height="52" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </motion.div>
            </div>
            <section className="bg-white dark:bg-black dark:bg-transparent border border-gray-200 dark:border-gray-800">
                <div className="mx-auto container border border-gray-200 dark:border-gray-800 py-12 border-t-0 px-4">
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
                        <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
                        <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
                        <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
                        <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
                        <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
                    </div>

                    {/* Section Footer Heading */}
                    <div className="w-full mt-6 lg:-mt-36">
                        <div className="grid grid-cols-1 lg:grid-cols-6 items-center">
                            <div className="hidden lg:block lg:col-span-3" />
                            <div className="col-span-1 lg:col-span-3 text-right px-4">
                                <h1 className="text-4xl md:text-6xl lg:text-[36px] font-extrabold leading-tight mb-4 text-zinc-600 tracking-tight">
                                    <span className="font-[Fastelar]  bg-gradient-to-l from-orange-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">Configaris</span> crafts intelligent digital systems for the businesses.
                                </h1>

                                <p className="text-gray-600 dark:text-gray-400 text-lg">
                                    Scalable SaaS platforms, premium web experiences, and performance-driven applications engineered with precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
