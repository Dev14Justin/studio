import type { Metadata } from 'next';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BoxExcel - Modèles Excel prêts à l’emploi',
    template: '%s | BoxExcel',
  },
  description: 'Achetez des modèles Excel premium pour la finance, la gestion de projet, les RH et plus encore. Boostez votre productivité dès aujourd\'hui.',
  keywords: ['Excel', 'templates', 'modèles', 'budget', 'planning', 'facturation', 'tableau de bord'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
