"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

const navigationItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Mot du Maire", href: "/mot-du-maire" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Activités", href: "/activites" },
  { name: "Ambitions", href: "/ambitions" },
  { name: "La Mairie", href: "/la-mairie" },
  { name: "Actualités", href: "/actualites" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-primary/95 backdrop-blur-sm"
      } border-b border-primary-foreground/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-slide-in-left">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary-foreground bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Dje Bi Dje Olivier Vamy
              </h1>
              <p className="text-sm text-primary-foreground/80">Député-Maire de Zuénoula</p>
            </Link>
          </div>

          <div className="hidden lg:block animate-slide-in-right">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 hover-lift rounded-lg"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-effect rounded-lg m-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/90 hover:text-accent hover:bg-primary-foreground/10 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover-lift"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
