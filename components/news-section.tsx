import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, Camera, Video } from "lucide-react"

export function NewsSection() {
  return (
    <section id="actualites" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Actualités & Médias
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Restez informés de l'actualité municipale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cette section présente les dernières actualités, communiqués de presse et couvertures médiatiques du
            Député-Maire et de la Mairie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Newspaper className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>Communiqués de presse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Retrouvez tous les communiqués officiels et annonces importantes de la Mairie.
              </p>
              <Button variant="outline" size="sm">
                Lire les actualités
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>Galerie photo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez en images les temps forts de la vie municipale et les projets réalisés.
              </p>
              <Button variant="outline" size="sm">
                <a href="#galerie">Voir la galerie</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Video className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>Vidéos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Suivez les événements marquants et les interventions du Député-Maire en vidéo.
              </p>
              <Button variant="outline" size="sm">
                Voir les vidéos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
