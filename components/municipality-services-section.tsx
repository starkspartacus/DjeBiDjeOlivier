"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, Building2, GraduationCap, Heart, TrendingUp, Users } from "lucide-react"

export function MunicipalityServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "État Civil",
      description: "Délivrance d'actes de naissance, mariage, décès et autres documents officiels.",
      hours: "Lundi - Vendredi: 8h00 - 16h00",
      color: "text-orange-500",
    },
    {
      icon: Building2,
      title: "Urbanisme",
      description: "Permis de construire, aménagements urbains et planification du développement.",
      hours: "Lundi - Vendredi: 8h00 - 16h00",
      color: "text-green-500",
    },
    {
      icon: GraduationCap,
      title: "Éducation",
      description: "Gestion des écoles, programmes éducatifs et soutien à la scolarisation.",
      hours: "Lundi - Vendredi: 7h30 - 17h00",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Santé",
      description: "Centres de santé, programmes de prévention et accès aux soins.",
      hours: "24h/24 - Urgences",
      color: "text-red-500",
    },
    {
      icon: TrendingUp,
      title: "Développement Économique",
      description: "Soutien aux entreprises locales, marchés et activités commerciales.",
      hours: "Lundi - Samedi: 6h00 - 18h00",
      color: "text-purple-500",
    },
    {
      icon: Users,
      title: "Services Sociaux",
      description: "Aide sociale, programmes pour les jeunes, femmes et personnes âgées.",
      hours: "Lundi - Vendredi: 8h00 - 16h00",
      color: "text-blue-600",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Services de la Mairie</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            La Mairie de Zuénoula est au service des citoyens dans tous les domaines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`${service.color} bg-gray-50 dark:bg-gray-800 rounded-lg p-3`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">Horaires:</span> {service.hours}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
