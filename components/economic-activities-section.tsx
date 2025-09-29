"use client"

import { Card, CardContent } from "@/components/ui/card"

export function EconomicActivitiesSection() {
  const activities = [
    {
      name: "Agriculture",
      percentage: 45,
      description: "Production de cacao, café, et cultures vivrières",
      color: "bg-green-500",
    },
    {
      name: "Commerce",
      percentage: 35,
      description: "Marchés locaux et échanges commerciaux",
      color: "bg-orange-500",
    },
    {
      name: "Artisanat",
      percentage: 20,
      description: "Artisanat traditionnel et moderne",
      color: "bg-blue-500",
    },
  ]

  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Activités Économiques</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Les secteurs qui dynamisent l'économie locale de Zuénoula
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{activity.name}</h3>
                  <span className={`${activity.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {activity.percentage}%
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{activity.description}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${activity.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${activity.percentage}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
