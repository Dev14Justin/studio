import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Boostez votre productivité avec nos modèles Excel prêts à l’emploi.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary">Catalogue</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Tarifs</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Mentions Légales</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Politique de Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Suivez-nous</h4>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BoxExcel. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
