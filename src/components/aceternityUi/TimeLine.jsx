
import React from "react";
import { Timeline } from "../ui/timeline";


export function TimelineDemo() {
  const data = [
    {
      title: "Nov 2023",
      content: (
        <div>
          <p
            className="mb-4 text-sm font-bold text-neutral-800 dark:text-neutral-200 md:text-[22px]">
            💡 The idea of Trendify Store was born!
          </p>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-md">
              ✅ Analyzed market trends & niche opportunities
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-md">
              ✅ Sketched initial roadmap & feature list
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-md">
              ✅ Random file upload lol
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2024",
      content: (
        <div>
          <p
            className="mb-4 text-sm font-bold text-neutral-800 dark:text-neutral-200 md:text-[22px] text-nowrap">
            🎁 Beta version ready for internal testing.
          </p>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm text-nowrap">
              👉 Basic product listing and cart system completed
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
               👉 Added admin panel with CRUD operations
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm">
               👉 Random file upload lol
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2025",
      content: (
        <div>
          <div className="mb-8">
            <p
              className="mb-4 text-sm font-bold text-neutral-800 dark:text-neutral-200 md:text-[22px]">
              🛠️ Completed core features and payment integration.
            </p>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm text-nowrap">
              💰 Integrated Razorpay, UPI, and PayPal
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm text-nowrap">
              💰 Optimized mobile experience
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://media.istockphoto.com/id/1869321174/photo/business-people-using-mobile-smart-phone-online-payment-banking-online-shopping-digital.jpg?s=612x612&w=0&k=20&c=mZLqmC8esdKOdtuljnGTqlZOYIjYgav5bNpW0rae4HY="
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://media.istockphoto.com/id/1406153686/photo/businesswoman-is-using-smartphone-and-review-with-excellent-performance.jpg?s=612x612&w=0&k=20&c=ZAogXNwuF0HER8LD_g92RSLgGEuzeSnguN_FFIKvL4k="
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2025",
      content: (
        <div>
          <div className="mb-8">
            <p
              className="mb-4 text-sm font-bold text-neutral-800 dark:text-neutral-200 md:text-[22px]">
              🌟 Official launch of Tredify Store — now live across India!
            </p>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm text-nowrap">
              📌 Product categories: Fashion, Electronics, Home
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm text-nowrap">
              📌 Free shipping and COD available
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 md:text-sm text-nowrap">
              📌 Launched social media campaigns
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://media.istockphoto.com/id/1472555312/photo/a-team-of-exclusive%C3%A2%C2%A0diversity-businesspeople-are-gathered-together-in-an-office-excitedly.jpg?s=612x612&w=0&k=20&c=PggsGbM89FUaCTZOhP6qKc0IHv61omTKdtOeyjYFVMg="
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://media.istockphoto.com/id/2083917031/photo/growth-strategy-busines-trend-concept-businessman-hand-on-arrow-investment-icon-increase-sale.jpg?s=612x612&w=0&k=20&c=R0RvO5vQKCihnQcfCLttdsDslyyQ_JKMWrw_Mp-riXc="
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
