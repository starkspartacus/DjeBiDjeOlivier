import { Navigation } from "@/components/navigation"
import { MayorSpeechSection } from "@/components/mayor-speech-section"
import { Footer } from "@/components/footer"

export default function MayorSpeechPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <MayorSpeechSection />
      </div>
      <Footer />
    </main>
  )
}
