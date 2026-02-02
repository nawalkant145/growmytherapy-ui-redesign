import Link from "next/link"

export function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6">
          Get started today.
        </h2>
        <p className="text-primary-foreground/90 mb-10 leading-relaxed max-w-xl mx-auto">
          Ready to take the first step towards a happier, healthier you? 
          Contact me to book your free 15-minute consultation. I look forward to starting this 
          therapeutic journey with you.
        </p>
        <Link
          href="mailto:drmaya@example.com"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm font-medium uppercase tracking-wider hover:bg-secondary transition-colors"
        >
          Get In Touch
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
