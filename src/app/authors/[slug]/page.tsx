import { notFound } from 'next/navigation';
import Image from 'next/image';
import { mockAuthors, mockTemplates } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TemplateCard } from '@/components/template-card';
import { Globe, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

type AuthorPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: AuthorPageProps) {
  const author = mockAuthors.find((a) => a.slug === params.slug);
  if (!author) {
    return {
      title: 'Auteur non trouvé',
    };
  }
  return {
    title: `${author.name} - Portfolio`,
    description: `Découvrez les modèles Excel créés par ${author.name}, ${author.title}.`,
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = mockAuthors.find((a) => a.slug === params.slug);

  if (!author) {
    notFound();
  }

  const authorTemplates = mockTemplates.filter(
    (template) => template.author.id === author.id
  );

  return (
    <div className="container py-12">
      <header className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <Avatar className="h-32 w-32 border-4 border-primary">
          <AvatarImage src={author.avatarUrl} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold font-headline">{author.name}</h1>
          <p className="text-xl text-muted-foreground mt-1">{author.title}</p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Expert en analyse de données avec une passion pour la création d'outils Excel qui simplifient les processus complexes et améliorent la productivité.
          </p>
           <div className="flex justify-center md:justify-start items-center gap-2 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              </Button>
               <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Website"><Globe className="h-5 w-5 text-muted-foreground hover:text-primary" /></a>
              </Button>
            </div>
        </div>
      </header>

      <main>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">
          Modèles par {author.name}
        </h2>
        {authorTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {authorTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            Aucun modèle publié par cet auteur pour le moment.
          </p>
        )}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return mockAuthors.map((author) => ({
    slug: author.slug,
  }));
}
