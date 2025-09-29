import { Navigation } from "@/components/navigation"
import { ActivitiesSection } from "@/components/activities-section"
import { Footer } from "@/components/footer"

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ActivitiesSection />
      </div>
      <Footer />
    </main>
  )
}
