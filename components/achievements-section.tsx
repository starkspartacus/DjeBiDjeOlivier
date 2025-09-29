import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    "Réhabilitation des routes principales et amélioration de la voirie.",
    "Construction de nouvelles écoles et réhabilitation d'établissements existants.",
    "Mise en place de centres de santé de proximité.",
    "Développement de programmes pour la jeunesse et les femmes.",
  ]

  const projects = [
    "Modernisation du marché central.",
    "Création d'un centre culturel et sportif.",
    "Extension du réseau d'eau potable.",
    "Programme de verdissement et de gestion durable de l'environnement.",
  ]

  return (
    <section id="realisations" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Réalisations & Projets
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Des actions concrètes pour Zuénoula</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Au cours de son mandat, plusieurs réalisations ont vu le jour et de nombreux projets sont en cours de
            développement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-success">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-success">
                <CheckCircle className="h-6 w-6" />
                Réalisations accomplies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-accent">
                <Clock className="h-6 w-6" />
                Projets en cours et à venir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{project}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
