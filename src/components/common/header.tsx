'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';

const navLinks = [
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/pricing', label: 'Tarifs' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'transition-colors hover:text-primary',
          pathname === link.href ? 'text-primary' : 'text-foreground/60',
          isMobile ? 'text-lg' : 'text-sm font-medium'
        )}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        <nav className="hidden md:flex md:items-center md:gap-6 md:ml-10">
          {renderNavLinks()}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/auth/login">Connexion</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">Inscription</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-10">
                <Logo />
                {renderNavLinks(true)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
