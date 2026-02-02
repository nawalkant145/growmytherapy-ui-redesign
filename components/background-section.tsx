"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const background = [
  {
    title: "Education",
    content: "Doctor of Psychology (PsyD) in Clinical Psychology. Extensive training in evidence-based therapeutic approaches with a focus on anxiety, trauma, and stress-related conditions."
  },
  {
    title: "Licensure",
    content: "Licensed Clinical Psychologist in the State of California. Member of the American Psychological Association and California Psychological Association."
  },
  {
    title: "Therapeutic Approach",
    content: "Integrates Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. Specialized training in trauma work with emphasis on safety, stabilization, and regulation."
  }
]

export function BackgroundSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-10">
          My Professional Background
        </h2>
        
        <div className="space-y-0">
          {background.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground">{item.title}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-5">
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
