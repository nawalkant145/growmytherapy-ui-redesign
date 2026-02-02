import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { SupportSection } from "@/components/support-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { BackgroundSection } from "@/components/background-section"
import { OfficeSection } from "@/components/office-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SpecialtiesSection />
      <SupportSection />
      <AboutSection />
      <OfficeSection />
      <FAQSection />
      <BackgroundSection />
      <CTASection />
      <Footer />
    </main>
  )
}
