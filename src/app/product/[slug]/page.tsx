import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, CheckCircle, Download, ExternalLink } from 'lucide-react';
import { mockTemplates } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProductPageProps) {
  const template = mockTemplates.find((p) => p.slug === params.slug);
  if (!template) {
    return {
      title: 'Modèle non trouvé',
    };
  }
  return {
    title: template.title,
    description: template.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const template = mockTemplates.find((p) => p.slug === params.slug);

  if (!template) {
    notFound();
  }

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <Carousel className="w-full">
            <CarouselContent>
              {template.images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={`${template.title} - aperçu ${index + 1}`}
                      width={1200}
                      height={800}
                      data-ai-hint={image.imageHint}
                      className="aspect-video object-cover"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-24 space-y-6">
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{template.title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-bold">{template.reviews.rating}</span>
                <span className="text-muted-foreground">({template.reviews.count} avis)</span>
              </div>
              <Badge variant="secondary">{template.category}</Badge>
            </div>
            
            <p className="text-muted-foreground">{template.description}</p>
            
            <div className="flex items-center gap-4 border-t pt-4">
                <Avatar>
                    <AvatarImage src={template.author.avatarUrl} alt={template.author.name} />
                    <AvatarFallback>{template.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{template.author.name}</p>
                    <p className="text-sm text-muted-foreground">{template.author.title}</p>
                </div>
            </div>

            <Card>
                <CardContent className="p-6">
                    <p className="text-3xl font-headline font-bold text-primary mb-4">
                        {template.price.toLocaleString('fr-FR')} {template.currency}
                    </p>
                    <Button size="lg" className="w-full">
                        <Download className="mr-2 h-5 w-5" />
                        Acheter et Télécharger
                    </Button>
                    <Button size="lg" variant="outline" className="w-full mt-2" asChild>
                        <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Voir la démo
                        </a>
                    </Button>
                </CardContent>
            </Card>

          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="prerequisites">Pré-requis</TabsTrigger>
            <TabsTrigger value="reviews">Avis ({template.reviews.count})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6 prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: template.longDescription }} />
          </TabsContent>
          <TabsContent value="prerequisites" className="mt-6">
            <ul className="space-y-2">
                {template.prerequisites.map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{req}</span>
                    </li>
                ))}
            </ul>
             <div className="mt-4 flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <p className="text-muted-foreground">Section des avis à venir.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return mockTemplates.map((template) => ({
    slug: template.slug,
  }));
}
