"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Building,
  PartyPopper,
  Clock,
  MapPin,
  Camera,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";

export function ActivitiesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const regularActivities = [
    {
      icon: Users,
      title: "Réunions communautaires",
      description:
        "Échanges citoyens pour discuter des projets et recueillir les préoccupations de la population.",
      schedule: "Chaque samedi - 9h00",
      location: "Salle communale",
      tag: "Récurrent",
      tagColor: "bg-orange-100 text-orange-800",
    },
    {
      icon: Building,
      title: "Cérémonies officielles",
      description:
        "Inaugurations et événements officiels pour marquer les étapes importantes du développement.",
      schedule: "Selon calendrier",
      location: "Divers lieux",
      tag: "Officiel",
      tagColor: "bg-green-100 text-green-800",
    },
    {
      icon: Camera,
      title: "Visites de chantiers",
      description:
        "Suivi régulier des projets en cours pour assurer la qualité et le respect des délais.",
      schedule: "Hebdomadaire",
      location: "Sites de projets",
      tag: "Suivi",
      tagColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: PartyPopper,
      title: "Fêtes culturelles",
      description:
        "Grandes fêtes et événements culturels de Zuénoula pour préserver et valoriser nos traditions.",
      schedule: "Saisonnier",
      location: "Place centrale",
      tag: "Culturel",
      tagColor: "bg-purple-100 text-purple-800",
    },
  ];

  const upcomingEvents = [
    {
      date: "15 Mars 2025",
      time: "10h00",
      title: "Inauguration du marché rénové",
      description: "Cérémonie d'inauguration du marché central modernisé",
      location: "Marché central",
    },
    {
      date: "22 Mars 2025",
      time: "15h00",
      title: "Réunion citoyenne - Quartier Nord",
      description:
        "Rencontre avec les habitants du quartier Nord pour discuter des aménagements",
      location: "Centre communautaire Nord",
    },
  ];

  return (
    <section
      id="activites"
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
              Activités & Agenda
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Activités & Agenda
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Retrouvez ici le calendrier des activités et événements officiels du
            Député-Maire. Un agenda mis à jour régulièrement pour suivre la vie
            municipale en toute transparence.
          </p>
        </div>

        {/* Regular Activities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Activités Régulières</h3>
            <p className="text-lg text-muted-foreground">
              Les activités permanentes pour maintenir le lien avec la
              population
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regularActivities.map((activity, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-accent/10 to-success/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <activity.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge className={`${activity.tagColor} border-0`}>
                      {activity.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{activity.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Événements à Venir</h3>
            <p className="text-lg text-muted-foreground">
              Un agenda mis à jour régulièrement pour suivre la vie municipale
              en toute transparence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-accent text-white border-0 px-3 py-1">
                        {event.date}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {event.time}
                      </span>
                    </div>
                    <div className="p-2 bg-gradient-to-br from-accent/10 to-success/10 rounded-full">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Voir l'agenda complet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
