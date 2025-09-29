"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Briefcase, Building } from "lucide-react"

export function MunicipalityStatsSection() {
  const stats = [
    {
      icon: Users,
      value: "45,000+",
      label: "Population",
      description: "Habitants accueillants et dynamiques",
      color: "text-orange-500",
    },
    {
      icon: MapPin,
      value: "850 km²",
      label: "Superficie",
      description: "Territoire riche et diversifié",
      color: "text-green-500",
    },
    {
      icon: Briefcase,
      value: "Agriculture",
      label: "Secteurs Clés",
      description: "Commerce et artisanat",
      color: "text-blue-500",
    },
    {
      icon: Building,
      value: "12",
      label: "Quartiers",
      description: "Zones résidentielles organisées",
      color: "text-purple-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Zuénoula en Chiffres</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez les principales caractéristiques de notre belle commune
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div
                  className={`${stat.color} bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
