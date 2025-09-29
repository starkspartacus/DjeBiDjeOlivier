import { Badge } from "@/components/ui/badge"

export function GallerySection() {
  const galleryItems = [
    {
      title: "Inaugurations et cérémonies officielles",
      image: "/official-ceremony-inauguration-ivory-coast.jpg",
    },
    {
      title: "Chantiers et projets réalisés",
      image: "/construction-project-infrastructure-ivory-coast.jpg",
    },
    {
      title: "Rencontres citoyennes",
      image: "/community-meeting-citizens-ivory-coast.jpg",
    },
    {
      title: "Activités culturelles",
      image: "/cultural-activities-traditional-ivory-coast.jpg",
    },
    {
      title: "Moments de convivialité",
      image: "/community-gathering-celebration-ivory-coast.jpg",
    },
    {
      title: "Solidarité avec la population",
      image: "/solidarity-community-support-ivory-coast.jpg",
    },
  ]

  return (
    <section id="galerie" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Galerie Photo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Les temps forts de la vie municipale</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Découvrez en images les temps forts de la vie municipale. La galerie sera régulièrement enrichie de
            nouvelles photos pour refléter le dynamisme de Zuénoula.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
