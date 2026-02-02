import Image from "next/image"

export function OfficeSection() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            A Calm Space for Healing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding, 
            with natural light and a comfortable, uncluttered environment. Clients often share 
            that the space itself helps them feel more at ease when they arrive.
          </p>
        </div>

        {/* Office Images Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/office1.jpeg"
              alt="Bright therapy room with gray sofa, armchair, and large windows with natural light"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/office2.jpeg"
              alt="Cozy therapy space with comfortable seating, bookshelves, and plants"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">Session Types</h3>
            <p className="text-muted-foreground text-sm">
              In-person & secure telehealth<br />
              Available throughout California
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium text-foreground mb-2">Accessibility</h3>
            <p className="text-muted-foreground text-sm">
              ADA accessible building<br />
              Private, comfortable setting
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
