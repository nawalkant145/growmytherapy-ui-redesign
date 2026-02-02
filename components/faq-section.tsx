"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Do you take insurance?",
    answer: "I am an out-of-network provider. I can provide you with a superbill to submit to your insurance for potential reimbursement. I recommend contacting your insurance company to understand your out-of-network benefits."
  },
  {
    question: "What are your rates?",
    answer: "Individual therapy sessions are $180 for a 50-minute session. I offer a limited number of sliding scale spots for those who need financial assistance. Please reach out to discuss your situation."
  },
  {
    question: "Do you have any openings?",
    answer: "I typically have availability for new clients within 1-2 weeks. Contact me to schedule a free 15-minute consultation call to discuss your needs and see if we're a good fit."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* FAQs */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10">
            FAQs
          </h2>
          
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-64 h-80">
            <Image
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=500&fit=crop"
              alt="Peaceful plants in therapy office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
