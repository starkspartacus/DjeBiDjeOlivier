"use client"

import { useEffect, useState } from "react"
import { Quote, Heart, Users, Target } from "lucide-react"

export function MayorSpeechSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("mot-du-maire")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="mot-du-maire" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <Quote className="h-8 w-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Mot du{" "}
              <span className="bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">Maire</span>
            </h2>
            <Quote className="h-8 w-8 text-accent rotate-180" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo du maire améliorée */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-[-30px]"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-success/20 rounded-3xl blur-xl"></div>
              <div className="relative glass-effect rounded-3xl p-8 hover-lift">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depute-maire-zuenoula.jpg-VERCz3KnUdkS0F7bRRlNZ8KIh30I6v.jpeg"
                  alt="Dje Bi Dje Olivier Vamy, Député-Maire de Zuénoula"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass-effect rounded-full p-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Message du maire */}
          <div
            className={`transition-all duration-800 delay-400 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-[30px]"
            }`}
          >
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8 hover-lift">
                <Quote className="h-12 w-12 text-accent mb-6" />
                <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-6">
                  "Chers concitoyens de Zuénoula, c'est avec un immense honneur et une profonde humilité que je vous
                  adresse ce message. Notre belle ville, riche de son histoire et de sa diversité culturelle, mérite le
                  meilleur de nous-mêmes."
                </blockquote>

                <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-6">
                  "Mon engagement envers vous repose sur trois piliers fondamentaux : l'intégrité dans l'action, la
                  proximité avec les citoyens, et un développement durable qui préserve notre environnement pour les
                  générations futures."
                </blockquote>

                <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-8">
                  "Ensemble, nous bâtissons une Zuénoula moderne, inclusive et prospère, où chaque habitant trouve sa
                  place et peut s'épanouir. L'avenir de notre commune se construit aujourd'hui, avec vous, pour vous."
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-accent to-success rounded-full"></div>
                  <p className="font-semibold text-foreground">Dje Bi Dje Olivier Vamy</p>
                </div>
                <p className="text-muted-foreground mt-1">Député-Maire de Zuénoula</p>
              </div>

              {/* Valeurs fondamentales */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="glass-effect rounded-xl p-6 text-center hover-lift">
                  <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Intégrité</h3>
                  <p className="text-sm text-muted-foreground">Action transparente et responsable</p>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center hover-lift">
                  <Users className="h-8 w-8 text-success mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Proximité</h3>
                  <p className="text-sm text-muted-foreground">À l'écoute des citoyens</p>
                </div>
                <div className="glass-effect rounded-xl p-6 text-center hover-lift">
                  <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Développement</h3>
                  <p className="text-sm text-muted-foreground">Durable et inclusif</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
