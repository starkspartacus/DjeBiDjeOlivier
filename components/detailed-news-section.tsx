"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Eye, FileText, ImageIcon } from "lucide-react"

export function DetailedNewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const newsArticles = [
    {
      id: 1,
      title: "Inauguration du nouveau marché central rénové",
      category: "Infrastructure",
      date: "15 Mars 2025",
      views: 245,
      excerpt:
        "Le Député-Maire Dje Bi Dje Olivier Vamy a procédé à l'inauguration officielle du marché central modernisé, marquant une étape importante dans le développement commercial de Zuénoula.",
      image: "/march--central-r-nov--c-te-d-ivoire.jpg",
      type: "article",
    },
    {
      id: 2,
      title: "Lancement du programme de formation professionnelle",
      category: "Éducation",
      date: "10 Mars 2025",
      views: 189,
      excerpt:
        "Un nouveau programme de formation destiné aux jeunes de Zuénoula a été lancé en partenariat avec les entreprises locales pour favoriser l'employabilité.",
      image: "/placeholder-qiovc.png",
      type: "article",
    },
    {
      id: 3,
      title: "Réhabilitation du réseau d'adduction d'eau",
      category: "Infrastructure",
      date: "5 Mars 2025",
      views: 156,
      excerpt:
        "Les travaux de réhabilitation du réseau d'adduction d'eau potable ont débuté dans plusieurs quartiers de la commune.",
      image: "/adduction-eau-potable-c-te-d-ivoire.jpg",
      type: "article",
    },
  ]

  const officialCommuniques = [
    {
      title: "Communiqué - Travaux sur la route principale",
      type: "Communiqué de presse",
      date: "8 Mars 2025",
    },
    {
      title: "Déclaration - Position sur le développement durable",
      type: "Déclaration officielle",
      date: "1 Mars 2025",
    },
    {
      title: "Rapport - Bilan des réalisations 2024",
      type: "Rapport d'activité",
      date: "25 Février 2025",
    },
  ]

  const recentMedia = [
    {
      image: "/mairie-zu-noula-c-te-d-ivoire.jpg",
      category: "Infrastructure",
    },
    {
      image: "/placeholder-f2f18.png",
      category: "Commerce",
    },
    {
      image: "/agriculture-zu-noula-c-te-d-ivoire.jpg",
      category: "Agriculture",
    },
    {
      image: "/d-put--maire-olivier-vamy.jpg",
      category: "Rencontres",
    },
  ]

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section principale des actualités */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Dernières Actualités</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                  Toutes les actualités
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {newsArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className={`${
                            article.category === "Infrastructure"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          }`}
                        >
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground hover:text-accent transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {article.views}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Lire la suite
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Communiqués Officiels */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <FileText className="h-5 w-5" />
                  Communiqués Officiels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {officialCommuniques.map((communique, index) => (
                  <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
                    <h4 className="font-medium text-foreground mb-1 hover:text-accent transition-colors cursor-pointer">
                      {communique.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{communique.type}</span>
                      <span>{communique.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Médias Récents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <ImageIcon className="h-5 w-5" />
                  Médias Récents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {recentMedia.map((media, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <img
                        src={media.image || "/placeholder.svg"}
                        alt={`Média ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs">
                          {media.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
