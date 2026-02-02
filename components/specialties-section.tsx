import Image from "next/image"

const specialties = [
  {
    title: "Anxiety & Panic",
    description: "Living with constant worry, tension in your body, or difficulty sleeping can be exhausting. Together, we'll work to calm your nervous system and help you feel more regulated.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop"
  },
  {
    title: "Trauma",
    description: "Whether from a single incident or complex, long-standing patterns, I work with adults to process trauma safely—with an emphasis on stabilization and feeling grounded in daily life.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=500&fit=crop"
  },
  {
    title: "Burnout & Perfectionism",
    description: "For entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through stress. Therapy can be a space to slow down and develop more sustainable ways of living.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=500&fit=crop"
  }
]

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-16">
          My Specialties
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {specialties.map((specialty, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/5] mb-6 overflow-hidden">
                <Image
                  src={specialty.image || "/placeholder.svg"}
                  alt={specialty.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
