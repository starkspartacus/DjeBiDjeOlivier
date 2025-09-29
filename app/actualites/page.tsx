import { Navigation } from "@/components/navigation"
import { DetailedNewsSection } from "@/components/detailed-news-section"
import { InteractiveGallerySection } from "@/components/interactive-gallery-section"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <DetailedNewsSection />
        <InteractiveGallerySection />
      </div>
      <Footer />
    </main>
  )
}
