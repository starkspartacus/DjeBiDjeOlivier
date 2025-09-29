"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Camera } from "lucide-react"
import Image from "next/image"

export function EnhancedGallerySection() {
  const [activeFilter, setActiveFilter] = useState("Toutes")

  const categories = [
    { name: "Toutes", count: 24, color: "bg-orange-500" },
    { name: "Inaugurations", count: 8, color: "bg-gray-500" },
    { name: "Projets", count: 6, color: "bg-gray-500" },
    { name: "Rencontres", count: 5, color: "bg-gray-500" },
    { name: "Culture", count: 5, color: "bg-gray-500" },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Fête traditionnelle ivoirienne",
      description: "Célébration de la culture locale avec danses et musiques traditionnelles",
      image: "/zu-noula-city-center-with-colorful-buildings-and-p.jpg",
      category: "Culture",
      date: "8 Mars 2025",
      badge: "Culture",
    },
    {
      id: 2,
      title: "Visite du centre de santé",
      description: "Inspection des nouvelles installations médicales avec l'équipe soignante",
      image: "/mairie-zu-noula-c-te-d-ivoire.jpg",
      category: "Projets",
      date: "5 Mars 2025",
      badge: "Projets",
    },
    {
      id: 3,
      title: "Réunion communautaire - Quartier Sud",
      description: "Échanges avec les habitants du quartier Sud sur les projets d'aménagement",
      image: "/d-put--maire-olivier-vamy.jpg",
      category: "Rencontres",
      date: "3 Mars 2025",
      badge: "Rencontres",
    },
    {
      id: 4,
      title: "Formation agricole",
      description: "Session de formation pour les agriculteurs locaux sur les nouvelles techniques",
      image: "/agriculture-zu-noula-c-te-d-ivoire.jpg",
      category: "Rencontres",
      date: "1 Mars 2025",
      badge: "Rencontres",
    },
    {
      id: 5,
      title: "Inauguration du marché central",
      description: "Cérémonie d'ouverture du marché central modernisé",
      image: "/march--central-r-nov--c-te-d-ivoire.jpg",
      category: "Inaugurations",
      date: "25 Février 2025",
      badge: "Inaugurations",
    },
    {
      id: 6,
      title: "Projet d'adduction d'eau",
      description: "Avancement des travaux d'extension du réseau d'eau potable",
      image: "/adduction-eau-potable-c-te-d-ivoire.jpg",
      category: "Projets",
      date: "20 Février 2025",
      badge: "Projets",
    },
  ]

  const filteredItems =
    activeFilter === "Toutes" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Header avec gradient */}
      <section className="relative py-24 bg-gradient-to-r from-orange-500 via-orange-400 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Galerie Photo</h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Découvrez en images les temps forts de la vie municipale, les projets réalisés et les moments de
            convivialité avec la population
          </p>
        </div>
      </section>

      {/* Filtres par catégories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeFilter === category.name ? "default" : "outline"}
                onClick={() => setActiveFilter(category.name)}
                className={`flex items-center gap-2 ${
                  activeFilter === category.name ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-gray-50"
                }`}
              >
                <Camera className="w-4 h-4" />
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-1 ${
                    activeFilter === category.name ? "bg-white/20 text-white" : "bg-green-100 text-green-800"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de photos */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          item.badge === "Culture"
                            ? "bg-purple-100 text-purple-800 border-purple-200"
                            : item.badge === "Projets"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : item.badge === "Rencontres"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-gray-100 text-gray-800 border-gray-200"
                        }`}
                      >
                        {item.badge}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton charger plus */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              Charger plus d'images
            </Button>
          </div>
        </div>
      </section>

      {/* Section statistiques */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Une Mémoire Vivante</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-4xl mx-auto">
            La galerie sera régulièrement enrichie de nouvelles photos pour refléter le dynamisme de Zuénoula et
            l'engagement du Député-Maire.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-muted-foreground">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
              <div className="text-muted-foreground">Événements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">12</div>
              <div className="text-muted-foreground">Mois d'actualités</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
