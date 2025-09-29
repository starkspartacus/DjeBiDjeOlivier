"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function InteractiveGallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "Toutes", count: 24 },
    { id: "inaugurations", name: "Inaugurations", count: 8 },
    { id: "projets", name: "Projets", count: 6 },
    { id: "rencontres", name: "Rencontres", count: 5 },
    { id: "culture", name: "Culture", count: 5 },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "inaugurations",
      image: "/images/maire-zenoula.jpg",
      title: "Inauguration du marché central",
      badge: "Inaugurations",
    },
    {
      id: 2,
      category: "rencontres",
      image: "/images/depute-maire-zuenoula.jpg",
      title: "Rencontre avec la population",
      badge: "Rencontres",
    },
    {
      id: 3,
      category: "projets",
      image: "/projet-infrastructure-route-zu-noula.jpg",
      title: "Projet d'infrastructure routière",
      badge: "Projets",
    },
    {
      id: 4,
      category: "inaugurations",
      image: "/images/maire-zenoula.jpg",
      title: "Inauguration d'une école",
      badge: "Inaugurations",
    },
    {
      id: 5,
      category: "culture",
      image: "/festival-culturel-zu-noula-tradition.jpg",
      title: "Festival culturel local",
      badge: "Culture",
    },
    {
      id: 6,
      category: "projets",
      image: "/adduction-eau-potable-zu-noula.jpg",
      title: "Projet d'adduction d'eau",
      badge: "Projets",
    },
    {
      id: 7,
      category: "rencontres",
      image: "/images/depute-maire-zuenoula.jpg",
      title: "Assemblée générale",
      badge: "Rencontres",
    },
    {
      id: 8,
      category: "culture",
      image: "/danse-traditionnelle-zu-noula-c-te-d-ivoire.jpg",
      title: "Danse traditionnelle",
      badge: "Culture",
    },
    {
      id: 9,
      category: "projets",
      image: "/construction-project-infrastructure-ivory-coast.jpg",
      title: "Construction centre de santé",
      badge: "Projets",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-green-500">
      {/* Header avec gradient */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Galerie Photo
        </h1>
        <p className="text-xl text-white/90 max-w-4xl mx-auto px-4">
          Découvrez en images les temps forts de la vie municipale, les projets
          réalisés et les moments de convivialité avec la population
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "secondary"}
              className={`${
                activeFilter === category.id
                  ? "bg-white text-orange-600 hover:bg-white/90"
                  : "bg-white/20 text-white hover:bg-white/30"
              } backdrop-blur-sm border-0`}
            >
              <span className="flex items-center gap-2">
                {category.name}
                <Badge
                  variant="secondary"
                  className={`${
                    activeFilter === category.id
                      ? "bg-orange-100 text-orange-700"
                      : "bg-white/20 text-white"
                  } text-xs`}
                >
                  {category.count}
                </Badge>
              </span>
            </Button>
          ))}
        </div>

        {/* Grille de photos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge de catégorie */}
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-800 backdrop-blur-sm"
                  >
                    {item.badge}
                  </Badge>
                </div>

                {/* Titre au survol */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
