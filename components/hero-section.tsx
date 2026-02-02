import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Therapy in Santa Monica, CA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6 text-balance">
            Find clarity<br />
            <span className="text-primary">and calm</span><br />
            within yourself
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
            Therapy for anxiety, trauma, and burnout for high-achieving adults in Santa Monica, California.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-t-full">
            <Image
              src="/images/dr.png"
              alt="Dr. Maya Reynolds, PsyD - Therapist in Santa Monica"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
