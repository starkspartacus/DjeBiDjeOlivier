"use client"

export function CitizenServicesSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Au Service des Citoyens</h2>
        <p className="text-xl text-white/90 max-w-4xl mx-auto mb-12">
          La Mairie de Zuénoula s'engage à offrir des services de qualité et à accompagner tous les habitants dans leurs
          démarches administratives.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
          <div className="space-y-4 text-white">
            <div>
              <span className="font-semibold">Adresse:</span> Mairie de Zuénoula, Côte d'Ivoire
            </div>
            <div>
              <span className="font-semibold">Téléphone:</span> (+225) XX XX XX XX XX
            </div>
            <div>
              <span className="font-semibold">Email:</span> mairie.zuenoula@civ.ci
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
