"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 gradient-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-success/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-success/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div
          className={`mb-16 transition-all duration-800 delay-200 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-90"
          }`}
        >
          <div className="relative inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-success/30 rounded-full blur-2xl scale-110"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depute-maire-zuenoula.jpg-VERCz3KnUdkS0F7bRRlNZ8KIh30I6v.jpeg"
                alt="Dje Bi Dje Olivier Vamy, Député-Maire de Zuénoula"
                className="relative w-64 h-64 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover hover-lift ring-4 ring-accent/20"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                <Award className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-800 delay-400 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-primary-foreground">
            Bienvenue sur le site officiel de{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Dje Bi Dje Olivier Vamy
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Député-Maire de la ville de Zuénoula
            </p>
          </div>
        </div>

        <div
          className={`max-w-4xl mx-auto mb-12 transition-all duration-800 delay-600 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-primary-foreground/85 text-pretty leading-relaxed">
            Ce portail est un espace de proximité et de transparence, dédié à la
            présentation de ses actions, ses projets, ainsi que la vie de notre
            belle cité. Découvrez les réalisations de la Mairie, les ambitions
            pour l'avenir et l'actualité de Zuénoula.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-800 delay-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="glass-effect rounded-xl p-6 hover-lift">
            <Users className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary-foreground mb-1">
              50,000+
            </div>
            <div className="text-primary-foreground/70">Habitants</div>
          </div>
          <div className="glass-effect rounded-xl p-6 hover-lift">
            <Award className="h-8 w-8 text-success mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary-foreground mb-1">
              25+
            </div>
            <div className="text-primary-foreground/70">Projets Réalisés</div>
          </div>
          <div className="glass-effect rounded-xl p-6 hover-lift">
            <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary-foreground mb-1">
              1
            </div>
            <div className="text-primary-foreground/70">Vision Commune</div>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-800 delay-800 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="text-lg px-10 py-4 gradient-accent hover-lift hover-glow rounded-xl font-semibold shadow-lg"
          >
            <a href="#apropos" className="flex items-center gap-2">
              Découvrir mon parcours
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-4 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover-lift rounded-xl font-semibold"
          >
            <a href="#realisations" className="flex items-center gap-2">
              Voir les réalisations
            </a>
          </Button>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "animate-bounce" : "opacity-0"
          }`}
        >
          <div className="glass-effect rounded-full p-3 hover-lift cursor-pointer">
            <ArrowDown className="h-6 w-6 text-primary-foreground/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
