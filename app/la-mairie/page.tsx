import { Navigation } from "@/components/navigation"
import { MunicipalityServicesSection } from "@/components/municipality-services-section"
import { MunicipalityStatsSection } from "@/components/municipality-stats-section"
import { EconomicActivitiesSection } from "@/components/economic-activities-section"
import { DynamicCitySection } from "@/components/dynamic-city-section"
import { CitizenServicesSection } from "@/components/citizen-services-section"
import { Footer } from "@/components/footer"

export default function MunicipalityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <MunicipalityServicesSection />
        <MunicipalityStatsSection />
        <EconomicActivitiesSection />
        <DynamicCitySection />
        <CitizenServicesSection />
      </div>
      <Footer />
    </main>
  )
}
