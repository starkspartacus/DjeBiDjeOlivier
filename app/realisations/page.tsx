import { Navigation } from "@/components/navigation"
import { DetailedAchievementsSection } from "@/components/detailed-achievements-section"
import { Footer } from "@/components/footer"

export default function AchievementsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <DetailedAchievementsSection />
      </div>
      <Footer />
    </main>
  )
}
