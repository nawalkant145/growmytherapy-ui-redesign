import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Dr. Maya Reynolds, PsyD
            </h3>
            <address className="not-italic text-muted-foreground text-sm space-y-1">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="mt-3">
                <a href="mailto:drmaya@example.com" className="hover:text-primary transition-colors">
                  drmaya@example.com
                </a>
              </p>
              <p>
                <a href="tel:+15125551234" className="hover:text-primary transition-colors">
                  (512) 555-1234
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Hours</h4>
            <p className="text-muted-foreground text-sm">
              Monday - Thursday<br />
              9am - 5pm
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Friday<br />
              9am - 3pm
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Find</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy & Cookies Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Good Faith Estimate</Link>
              <Link href="#" className="hover:text-primary transition-colors">Website Terms & Conditions</Link>
              <Link href="#" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            All Rights Reserved 2024 Dr. Maya Reynolds, PsyD.
          </p>
        </div>
      </div>
    </footer>
  )
}
