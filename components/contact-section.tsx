import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Contactez le Député-Maire</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Vous souhaitez contacter le Député-Maire ou la Mairie de Zuénoula ? N'hésitez pas à nous écrire ou à nous
            rendre visite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-muted-foreground">Mairie de Zuénoula, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Téléphone</h4>
                  <p className="text-muted-foreground">(+225) XX XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">mairie.zuenoula@civ.ci</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Suivez-nous sur les réseaux sociaux</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Formulaire de contact</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Prénom
                    </label>
                    <Input id="firstName" placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <Input id="lastName" placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <Input id="subject" placeholder="Objet de votre message" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Votre message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
