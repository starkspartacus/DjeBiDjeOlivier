"use client"

import Image from "next/image"

export function DynamicCitySection() {
  return (
    <section className="relative">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">La Mairie & La Localité</h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Découvrez Zuénoula, une commune riche en histoire et en diversité culturelle, située au centre de la Côte
            d'Ivoire
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Une Ville Dynamique</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Zuénoula est une commune riche en histoire et en diversité culturelle, située au centre de la Côte
                  d'Ivoire.
                </p>
                <p>
                  Notre ville se distingue par sa population accueillante et dynamique, ses activités économiques
                  centrées sur l'agriculture, le commerce et l'artisanat.
                </p>
                <p>
                  Zuénoula est une ville en pleine croissance avec un fort potentiel touristique et un avenir
                  prometteur.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/zu-noula-city-center-with-colorful-buildings-and-p.jpg"
                  alt="Vue de Zuénoula"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
