import { CategoryList } from '@/components/FeatureBlock2'
import React from 'react'
import Logo from '@/assets/logo/logo'
import {
    Globe,
    Layers3,
    Smartphone,
    ShoppingBag,
    Cpu,
    ShieldCheck,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";
export const FeaturePage = () => {

    const serviceCategories = [
        {
            id: 1,
            title: "Custom Web Applications",
            subtitle:
                "Robust, maintainable web platforms tailored to your business needs — performance and scalability prioritized.",
            icon: <ArrowUpRight className="w-8 h-8" />,
            featured: true,
            onClick: () => console.log("Web Applications"),
        },
        {
            id: 2,
            title: "SaaS Product Engineering",
            subtitle:
                "Design, build and operate multi-tenant SaaS products with subscriptions, analytics and automation.",
            icon: <Layers3 className="w-8 h-8" />,
            featured: true,
            onClick: () => console.log("SaaS Platforms"),
        },
        {
            id: 3,
            title: "E‑Commerce & Marketplaces",
            subtitle:
                "High-conversion storefronts and marketplace experiences with reliable checkout and integrations.",
            icon: <ShoppingBag className="w-8 h-8" />,
            onClick: () => console.log("E-Commerce"),
        },
        {
            id: 4,
            title: "Frontend & Design Systems",
            subtitle:
                "Modular UI systems using React and Vite for predictable development velocity and exceptional UX.",
            icon: <Globe className="w-8 h-8" />,
            onClick: () => console.log("Frontend Architecture"),
        },
        {
            id: 5,
            title: "Mobile-first Experiences",
            subtitle:
                "Progressive, responsive apps that feel native across phones and tablets.",
            icon: <Smartphone className="w-8 h-8" />,
            onClick: () => console.log("Mobile Experiences"),
        },
        {
            id: 6,
            title: "AI & Automation",
            subtitle:
                "Smart automation, data pipelines and AI integrations that unlock new efficiencies.",
            icon: <Cpu className="w-8 h-8" />,
            onClick: () => console.log("AI & Automation"),
        },
        {
            id: 7,
            title: "Cloud Infrastructure & DevOps",
            subtitle:
                "CI/CD, observability and cost-optimized cloud architecture for resilient operations.",
            icon: <ShieldCheck className="w-8 h-8" />,
            onClick: () => console.log("Cloud & DevOps"),
        },
        {
            id: 8,
            title: "Brand & Digital Strategy",
            subtitle:
                "Strategic brand work, content and websites designed to convert and scale.",
            icon: <Sparkles className="w-8 h-8" />,
            onClick: () => console.log("Brand Presence"),
        },
    ];
    return (
        <>
        <div>
            <CategoryList
                title="Explore Our Core Capabilities"
                subtitle="Services"
                categories={serviceCategories}
               
            />
           
        </div>
        </>
    )
}
