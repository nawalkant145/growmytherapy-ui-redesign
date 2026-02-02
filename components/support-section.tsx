import Link from "next/link"
import Image from "next/image"

const struggles = [
  "Constant worry or a sense that you're always bracing for something to go wrong",
  "Feeling 'functional' on the outside while quietly struggling inside",
  "Exhaustion, overthinking, or feeling emotionally on edge",
  "Lingering effects of past experiences affecting your relationships or confidence",
  "High internal pressure or perfectionism that leaves you disconnected"
]

export function SupportSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] max-h-[500px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=750&fit=crop"
            alt="Woman finding peace through therapy"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
            You don&apos;t have to face this alone.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            If you&apos;re experiencing any of these, know that there is hope:
          </p>
          
          <ul className="space-y-4 mb-10">
            {struggles.map((struggle, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <span className="text-foreground">{struggle}</span>
              </li>
            ))}
          </ul>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            With empathy and evidence-based techniques, we&apos;ll work together to help you feel more grounded, resilient, and at peace.
          </p>

          <Link
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  )
}
