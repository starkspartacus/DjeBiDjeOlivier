import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, GraduationCap, Heart, Palette } from "lucide-react"

export function AmbitionsSection() {
  const ambitions = [
    {
      icon: Target,
      title: "Infrastructures modernes",
      description: "Développer les infrastructures modernes pour stimuler l'économie locale.",
    },
    {
      icon: GraduationCap,
      title: "Éducation et formation",
      description: "Promouvoir l'éducation et la formation pour les jeunes.",
    },
    {
      icon: Heart,
      title: "Accès aux soins",
      description: "Améliorer l'accès aux soins de santé pour tous.",
    },
    {
      icon: Palette,
      title: "Culture et traditions",
      description: "Valoriser la culture et les traditions de Zuénoula tout en s'ouvrant à la modernité.",
    },
  ]

  return (
    <section id="ambitions" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Ambitions & Vision
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Bâtir une ville solidaire, innovante et durable
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-pretty">
            L'ambition de Dje Bi Dje Olivier Vamy est de bâtir une ville solidaire, innovante et durable. Ses priorités
            pour l'avenir sont :
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ambitions.map((ambition, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/15 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <ambition.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-3">{ambition.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{ambition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
