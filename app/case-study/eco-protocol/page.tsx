import { CaseStudyHero } from "@/components/case-study/hero-section"
import { OverviewStats } from "@/components/case-study/overview-stats"
import { ClientBackground } from "@/components/case-study/client-background"
import { WhitepaperSection } from "@/components/case-study/whitepaper-section"
import { DesignVideoSection } from "@/components/case-study/design-video-section"
import { CommunitySection } from "@/components/case-study/community-section"
import { ResultsTable } from "@/components/case-study/results-table"
import { ResourceLinks } from "@/components/case-study/resource-links"
import { ImpactSection } from "@/components/case-study/impact-section"
import { TestimonialSection } from "@/components/case-study/testimonial-section"
import { CaseStudyCTA } from "@/components/case-study/cta-section"
import { CaseFooter } from "@/components/case-study/case-footer"

export default function EcoProtocolCaseStudy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <CaseStudyHero />
      <OverviewStats />
      <ClientBackground />
      <WhitepaperSection />
      <DesignVideoSection />
      <CommunitySection />
      <ResultsTable />
      <ResourceLinks />
      <ImpactSection />
      <TestimonialSection />
      <CaseStudyCTA />
      <CaseFooter />
    </main>
  )
}
