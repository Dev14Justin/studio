import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart, FileText, GanttChart, Users, CheckCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TemplateCard } from '@/components/template-card';
import { mockTemplates } from '@/lib/mock-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { name: 'Finance', icon: BarChart, href: '/catalogue?category=Finance' },
  { name: 'RH', icon: Users, href: '/catalogue?category=RH' },
  { name: 'Gestion de projet', icon: GanttChart, href: '/catalogue?category=Gestion+de+projet' },
  { name: 'Vente', icon: FileText, href: '/catalogue?category=Vente' },
];

const testimonials = [
  { name: 'Fatou K.', role: 'Entrepreneur', text: 'Les modèles de BoxExcel m\'ont fait gagner un temps précieux. Le plan budgétaire est un must-have !', avatar: 'avatar-2' },
  { name: 'Marc D.', role: 'Chef de projet', text: 'Le template de Gantt est incroyablement bien fait. J\'ai pu planifier mon projet en quelques heures seulement.', avatar: 'avatar-1' },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <>
      <section className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Boostez votre productivité avec nos modèles Excel
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Des templates prêts à l’emploi, conçus par des experts pour tous vos besoins professionnels et personnels.
            </p>
            <Button size="lg" asChild className="mt-8">
              <Link href="/catalogue">
                Parcourir le catalogue <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div>
            {heroImage && (
               <Image
                src={heroImage.imageUrl}
                alt="Tableau de bord Excel"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container">
          <h2 className="text-center font-headline text-3xl font-bold">Trouvez le modèle parfait</h2>
          <p className="text-center mt-2 text-muted-foreground">Explorez nos catégories les plus populaires.</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories.map((category) => (
              <Link href={category.href} key={category.name} className="group">
                <Card className="text-center hover:border-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <category.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-headline font-semibold">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center font-headline text-3xl font-bold">Modèles à la une</h2>
        <p className="text-center mt-2 text-muted-foreground">Découvrez les templates les plus appréciés par nos clients.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTemplates.slice(0, 3).map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button variant="outline" asChild>
                <Link href="/catalogue">Voir tous les modèles</Link>
            </Button>
        </div>
      </section>
      
       <section className="bg-card py-20">
        <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold">Comment ça marche ?</h2>
            <p className="mt-2 text-muted-foreground">Obtenez votre modèle en 3 étapes simples.</p>
            <div className="grid md:grid-cols-3 gap-12 mt-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <span className="font-headline text-2xl font-bold">1</span>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">Choisissez</h3>
                    <p className="text-muted-foreground">Parcourez notre catalogue et trouvez le template qui correspond à vos besoins.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <span className="font-headline text-2xl font-bold">2</span>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">Payez</h3>
                    <p className="text-muted-foreground">Achetez en toute sécurité avec Mobile Money ou par carte bancaire.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <span className="font-headline text-2xl font-bold">3</span>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">Téléchargez</h3>
                    <p className="text-muted-foreground">Recevez instantanément votre fichier et commencez à travailler.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center font-headline text-3xl font-bold">Ce que disent nos clients</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => {
            const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatar);
            return (
              <Card key={testimonial.name}>
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground">"{testimonial.text}"</blockquote>
                  <div className="flex items-center gap-4 mt-6">
                    <Avatar>
                      {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </>
  );
}
