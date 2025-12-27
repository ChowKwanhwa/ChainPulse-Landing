import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { VideoTutorialSection } from "@/components/video-tutorial-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { CaseStudySection } from "@/components/case-study-section"
import { StatsSection } from "@/components/stats-section"
import { ContactSection } from "@/components/contact-section"
import { InvestmentPortfolioSection } from "@/components/investment-portfolio-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <VideoTutorialSection />
      <AdvantagesSection />
      <CaseStudySection />
      <StatsSection />
      <InvestmentPortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
