import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Calendar } from "lucide-react"
import Image from "next/image"

export function DetailedAchievementsSection() {
  const ongoingProjects = [
    {
      id: 1,
      title: "Modernisation du marché central",
      description: "Rénovation complète du marché pour améliorer les conditions de commerce.",
      image: "/march--central-r-nov--c-te-d-ivoire.jpg",
      status: "En cours",
      progress: 65,
      category: "Infrastructure",
    },
    {
      id: 2,
      title: "Centre culturel et sportif",
      description: "Création d'un espace multi-usage pour les activités culturelles et sportives.",
      image: "/zu-noula-city-center-with-colorful-buildings-and-p.jpg",
      status: "En cours",
      progress: 40,
      category: "Infrastructure",
    },
  ]

  const plannedProjects = [
    {
      id: 3,
      title: "Extension du réseau d'eau potable",
      description: "Amélioration de l'accès à l'eau potable pour tous les quartiers.",
      image: "/agriculture-zu-noula-c-te-d-ivoire.jpg",
      status: "Planifié",
      progress: 15,
      category: "Infrastructure",
    },
    {
      id: 4,
      title: "Programme de verdissement",
      description: "Initiative environnementale pour un développement durable de la ville.",
      image: "/zu-noula-city-center-with-colorful-buildings-and-p.jpg",
      status: "Planifié",
      progress: 10,
      category: "Environnement",
    },
  ]

  const completedProjects = [
    {
      id: 5,
      title: "Centres de santé de proximité",
      description: "Mise en place de centres de santé pour améliorer l'accès aux soins.",
      image: "/mairie-zu-noula-c-te-d-ivoire.jpg",
      status: "Terminé",
      category: "Santé",
    },
    {
      id: 6,
      title: "Programmes jeunesse et femmes",
      description: "Développement de programmes dédiés à l'autonomisation et à la formation.",
      image: "/d-put--maire-olivier-vamy.jpg",
      status: "Terminé",
      category: "Social",
    },
  ]

  const accomplishedProjects = [
    {
      id: 7,
      title: "Réhabilitation des routes principales",
      description: "Amélioration de la voirie pour faciliter les déplacements et le commerce local.",
      image: "/adduction-eau-potable-c-te-d-ivoire.jpg",
      status: "Terminé",
      category: "Infrastructure",
    },
    {
      id: 8,
      title: "Construction de nouvelles écoles",
      description: "Nouvelles infrastructures éducatives et réhabilitation d'établissements existants.",
      image: "/mairie-zu-noula-c-te-d-ivoire.jpg",
      status: "Terminé",
      category: "Éducation",
    },
  ]

  const ProjectCard = ({ project, showProgress = false }: { project: any; showProgress?: boolean }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <Badge
            variant={project.status === "Terminé" ? "default" : project.status === "En cours" ? "secondary" : "outline"}
            className={`${
              project.status === "Terminé"
                ? "bg-green-100 text-green-800 border-green-200"
                : project.status === "En cours"
                  ? "bg-orange-100 text-orange-800 border-orange-200"
                  : "bg-blue-100 text-blue-800 border-blue-200"
            }`}
          >
            {project.status === "Terminé" && <CheckCircle className="w-3 h-3 mr-1" />}
            {project.status === "En cours" && <Clock className="w-3 h-3 mr-1" />}
            {project.status === "Planifié" && <Calendar className="w-3 h-3 mr-1" />}
            {project.status}
          </Badge>
        </div>
        {showProgress && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-white/90">
              {project.progress}% complété
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        {showProgress && (
          <div className="space-y-2">
            <Progress value={project.progress} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen">
      {/* Header avec gradient */}
      <section className="relative py-24 bg-gradient-to-r from-orange-500 via-orange-400 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Réalisations & Projets</h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Découvrez les réalisations accomplies et les projets en cours pour le développement de Zuénoula
          </p>
        </div>
      </section>

      {/* Projets en cours et à venir */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold">Projets en Cours et à Venir</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Les initiatives actuelles et futures pour le développement de notre ville
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showProgress={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Projets planifiés */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {plannedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showProgress={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Projets terminés */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations Accomplies */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-3xl font-bold">Réalisations Accomplies</h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Au cours de son mandat, plusieurs réalisations ont vu le jour :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {accomplishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Une Mémoire Vivante */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Une Mémoire Vivante</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-4xl mx-auto">
            La galerie sera régulièrement enrichie de nouvelles photos pour refléter le dynamisme de Zuénoula et
            l'engagement du Député-Maire.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-muted-foreground">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">25+</div>
              <div className="text-muted-foreground">Événements</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">12</div>
              <div className="text-muted-foreground">Mois d'actualités</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-white border border-gray-200 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Charger plus d'images
            </button>
          </div>
        </div>
      </section>

      {/* Section finale */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Un Avenir Prometteur pour Zuénoula</h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            Chaque projet réalisé et chaque initiative future contribuent à bâtir une ville moderne, inclusive et
            prospère pour tous les habitants.
          </p>
        </div>
      </section>
    </div>
  )
}
