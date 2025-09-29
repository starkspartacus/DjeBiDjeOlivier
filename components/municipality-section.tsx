import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Briefcase, Camera } from "lucide-react"

export function MunicipalitySection() {
  const features = [
    {
      icon: Users,
      title: "Population accueillante",
      description: "Une communauté dynamique et diversifiée",
    },
    {
      icon: Briefcase,
      title: "Économie locale",
      description: "Agriculture, commerce et artisanat florissants",
    },
    {
      icon: Camera,
      title: "Potentiel touristique",
      description: "Ville en pleine croissance avec de nombreux attraits",
    },
  ]

  const services = ["État civil", "Urbanisme", "Éducation", "Santé", "Développement économique"]

  return (
    <section id="mairie" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            La Mairie & La Localité
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Zuénoula, une commune riche en histoire</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Zuénoula est une commune riche en histoire et en diversité culturelle, située au centre de la Côte d'Ivoire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-accent" />
              Notre belle cité
            </h3>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Services municipaux</CardTitle>
                <p className="text-muted-foreground">
                  La Mairie de Zuénoula est au service des citoyens dans tous les domaines de la vie locale.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm font-medium">{service}</span>
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
