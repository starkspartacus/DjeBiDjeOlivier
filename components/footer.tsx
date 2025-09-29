export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dje Bi Dje Olivier Vamy</h3>
            <p className="text-primary-foreground/80 mb-4">Député-Maire de Zuénoula</p>
            <p className="text-sm text-primary-foreground/60">
              Au service des citoyens pour une ville moderne, inclusive et prospère.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#apropos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#realisations" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#ambitions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Ambitions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Mairie de Zuénoula</p>
              <p>Côte d'Ivoire</p>
              <p>mairie.zuenoula@civ.ci</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025 Dje Bi Dje Olivier Vamy - Député-Maire de Zuénoula. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
