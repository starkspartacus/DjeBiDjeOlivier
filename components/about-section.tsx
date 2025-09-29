"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import {
  Heart,
  Users,
  Target,
  GraduationCap,
  MapPin,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: "Intégrité",
      description: "Transparence et honnêteté dans toutes les actions",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Proximité",
      description: "Écoute active et dialogue permanent avec les citoyens",
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "Développement Durable",
      description: "Vision à long terme pour un avenir prospère",
      icon: Target,
      color: "text-orange-500",
    },
  ];

  const timelineData = [
    {
      title: "Origines",
      description:
        "Né et grandi à Zuénoula, il a toujours placé l'intérêt des citoyens au cœur de son action.",
      date: "Enfance à Zuénoula",
      icon: <MapPin className="h-6 w-6 text-white" />,
    },
    {
      title: "Formation",
      description:
        "Diplômé en administration publique, il met son expertise au service du développement local.",
      date: "Études supérieures",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
    },
    {
      title: "Engagement",
      description:
        "Son ambition est de faire de Zuénoula une ville moderne, inclusive et prospère, où chaque habitant trouve sa place.",
      date: "Service public",
      icon: <Award className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section
      id="apropos"
      className="py-24 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <Badge
              variant="outline"
              className="text-accent border-accent px-4 py-2 text-sm font-medium"
            >
              À propos
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            À Propos du Député-Maire
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Découvrez le parcours et l'engagement de Dje Bi Dje Olivier Vamy
            pour le développement de Zuénoula
          </p>
        </div>

        {/* Engagement Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Engagement Citoyen
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Dje Bi Dje Olivier Vamy est le Député-Maire de Zuénoula, une
                    ville historique et dynamique de Côte d'Ivoire. Son
                    engagement repose sur trois valeurs fondamentales :
                    intégrité, proximité et développement durable.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-success/20 rounded-2xl blur-xl"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/depute-maire-zuenoula.jpg-VERCz3KnUdkS0F7bRRlNZ8KIh30I6v.jpeg"
                  alt="Dje Bi Dje Olivier Vamy"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="font-semibold text-gray-900">
                    Dje Bi Dje Olivier Vamy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Parcours</h3>
            <p className="text-lg text-muted-foreground">
              Un parcours dédié au service public et au développement de
              Zuénoula
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <Timeline items={timelineData} />
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Valeurs Fondamentales</h3>
            <p className="text-lg text-muted-foreground">
              Les principes qui guident son action au service des citoyens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/10 to-success/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20">
          <div
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent/10 via-success/10 to-accent/10 p-12 text-center transition-all duration-700 delay-1000 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-success/5"></div>
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-medium italic text-gray-800 mb-6 leading-relaxed">
                "Faire de Zuénoula une ville moderne, inclusive et prospère, où
                chaque habitant trouve sa place."
              </blockquote>
              <div className="inline-block bg-gradient-to-r from-accent to-success text-white px-6 py-3 rounded-full font-semibold">
                Dje Bi Dje Olivier Vamy - Député-Maire de Zuénoula
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
