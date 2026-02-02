import Link from "next/link"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Hi, I&apos;m Dr. Maya Reynolds.
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
          </p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I take a warm, collaborative, and grounded approach to therapy. I integrate evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you&apos;re experiencing.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            If you&apos;re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
          </p>

          <Link
            href="#contact"
            className="inline-block border-2 border-primary text-primary px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Let&apos;s Chat
          </Link>
        </div>

        {/* Images */}
        <div className="order-1 md:order-2 flex gap-4 justify-center items-end">
          <div className="relative w-48 h-64 md:w-56 md:h-80 overflow-hidden rounded-t-full">
            <Image
              src="/images/dr.png"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=200&h=200&fit=crop"
              alt="Calming botanicals"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
