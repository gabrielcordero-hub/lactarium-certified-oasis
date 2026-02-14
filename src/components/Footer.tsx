const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-display font-bold text-primary-foreground">
              LACTARIUM
            </span>
            <p className="text-sm font-body text-primary-foreground/60 mt-3 max-w-xs">
              Espacios seguros y certificados para una mejor lactancia. Fabricados en Monterrey, Nuevo León.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-4">Productos</h4>
            <ul className="space-y-2">
              <li><a href="#productos" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Salas de Lactancia Fijas</a></li>
              <li><a href="#productos" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Cubos de Lactancia Móviles</a></li>
              <li><a href="#productos" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Cubos Modulares</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-primary-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#certificaciones" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Certificaciones</a></li>
              <li><a href="#proceso" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Proceso</a></li>
              <li><a href="#contacto" className="text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs font-body text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} LACTARIUM. Todos los derechos reservados. Monterrey, Nuevo León, México.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
