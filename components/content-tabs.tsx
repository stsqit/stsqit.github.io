"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const tabs = ["Highlights", "Publications", "Press"] as const
type Tab = (typeof tabs)[number]

const highlights = [
  {
    type: "video" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8672-aWuffgyz2iq9M7qyaJdVMyQMplfymW.mp4",
    title: "Robot Barista",
  },
  {
    type: "video" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drone-video-UmSMHNpFdAgYuVvBXGKUqDVyFuCVsO.mp4",
    title: "Drone",
  },
  {
    type: "image" as const,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_5ung05ung05ung05.png-vhnZyOIcigRtwwlFjBhcdUEINWQvsp.jpeg",
    title: "QuiqR Dashcam",
  },
]

const timeline = [
  {
    year: "2026",
    text: "Founded",
    link: { text: "Oli Robotics", href: "https://olirobotics.com" },
    suffix: "to make Physical AI work at scale",
  },
  {
    year: "2025",
    text: "Founded first fully autonomous AI cafe where robots make coffee, clean, restock, and run the entire operation",
  },
  {
    year: "2023",
    text: "Bootstrapped large-scale data SaaS to 600K monthly users",
  },
  {
    year: "2016",
    text: "Founded VTOL drone delivery startup to deliver small packages in cities",
  },
]

const publications = [
  {
    title: "Predict the cost of trucking logistics by city using data from logistics marketplaces",
    outlet: "Habr",
    href: "https://habr.com/en/articles/860804/",
  },
  {
    title: "How to recognize faces with the FAISS library",
    outlet: "TProger.ru",
    href: "https://tproger-ru.translate.goog/articles/raspoznavanie-lic-ispolzuya-bibliote-faiss?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    title: "How AI is Shaping the Future of Robotics and Workplace Safety",
    outlet: "Habr",
    href: "https://habr.com/en/articles/865216/",
  },
  {
    title: "Master Company Name Matching in Minutes with Python's Ready-Made Libraries",
    outlet: "Hackernoon",
    href: "https://hackernoon.com/master-company-name-matching-in-minutes-with-pythons-ready-made-libraries",
  },
  {
    title: "Web Bot Detection using Mouse Detection",
    outlet: "Scientific Article",
    href: "https://apni.ru/uploads/ai_1-1_2025.pdf",
  },
  {
    title: "Built robot barista in 6 months",
    outlet: "Reddit",
    href: "https://www.reddit.com/r/robotics/comments/1mma1ma/built_simple_barista_robot_in_6_months/",
  },
]

const press = [
  {
    title: "The Future of Robotics: AI-Powered Adaptation for Safer Workplaces",
    outlet: "Hackernoon",
    href: "https://hackernoon.com/the-future-of-robotics-ai-powered-adaptation-for-safer-workplaces",
  },
  {
    title: "How a Kazakhstani Created an AI Barista",
    outlet: "Forbes",
    href: "https://forbes-kz.translate.goog/articles/kak-kazahstanets-sozdal-ii-barista-i-privlek-150tysyach-investitsiy-db9e60?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    title: "Kazakh Startup Attracts $150,000 with AI Barista",
    outlet: "AstanaTimes",
    href: "https://astanatimes.com/2024/12/kazakh-startup-attracts-150000-with-ai-barista/",
  },
  {
    title: "Kazakhstani raised 150K$ on AI robot barista",
    outlet: "Kursiv",
    href: "https://kz-kursiv-media.translate.goog/kk/2024-12-17/qazaqstandyq-kaesipker-barista-robot-startabyna-amerikadan-150-myng-dollar-tartty/?_x_tr_sl=kk&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
]

export function ContentTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Highlights")

  return (
    <section>
      <nav className="mb-8 flex items-center gap-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-3 text-lg font-bold transition-colors",
              activeTab === tab
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground/80",
            )}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {activeTab === "Highlights" && (
        <div>
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-muted">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-48 w-full object-cover pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="w-14 shrink-0 text-base text-muted-foreground">{item.year}</span>
                <p className="text-base text-foreground">
                  {item.text}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        {item.link.text}
                      </Link>
                    </>
                  )}
                  {item.suffix && ` ${item.suffix}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Publications" && (
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-base text-foreground">{pub.title}</span>
              <span className="text-base text-muted-foreground">—</span>
              <Link href={pub.href} className="shrink-0 text-base text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {pub.outlet}
              </Link>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Press" && (
        <div className="space-y-4">
          {press.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-base text-foreground">{item.title}</span>
              <span className="text-base text-muted-foreground">—</span>
              <Link href={item.href} className="shrink-0 text-base text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {item.outlet}
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
