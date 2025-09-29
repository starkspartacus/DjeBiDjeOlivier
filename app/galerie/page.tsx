import { Navigation } from "@/components/navigation"
import { EnhancedGallerySection } from "@/components/enhanced-gallery-section"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <EnhancedGallerySection />
      </div>
      <Footer />
    </main>
  )
}
