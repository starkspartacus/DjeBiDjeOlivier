import { Navigation } from "@/components/navigation"
import { AmbitionsSection } from "@/components/ambitions-section"
import { Footer } from "@/components/footer"

export default function AmbitionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AmbitionsSection />
      </div>
      <Footer />
    </main>
  )
}
