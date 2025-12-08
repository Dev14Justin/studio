import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { mockAuthors } from '@/lib/mock-data';

export const metadata = {
  title: 'Nos Auteurs',
  description: 'Découvrez les experts qui créent nos modèles Excel.',
};

export default function AuthorsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Nos Auteurs Experts</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Les professionnels derrière nos modèles Excel de haute qualité.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {mockAuthors.map((author) => (
          <Link key={author.id} href={`/authors/${author.slug}`} className="group">
            <Card className="text-center h-full hover:border-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4 border-2 border-transparent group-hover:border-primary transition-colors">
                  <AvatarImage src={author.avatarUrl} alt={author.name} />
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="font-headline text-xl font-semibold group-hover:text-primary">{author.name}</h2>
                <p className="text-muted-foreground">{author.title}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
