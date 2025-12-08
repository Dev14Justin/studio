import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

import type { Template } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type TemplateCardProps = {
  template: Template;
  className?: string;
};

export function TemplateCard({ template, className }: TemplateCardProps) {
  return (
    <Card className={cn('flex flex-col overflow-hidden h-full', className)}>
      <Link href={`/product/${template.slug}`} className="block group">
        <div className="overflow-hidden">
          <Image
            src={template.images[0].imageUrl}
            alt={template.title}
            width={600}
            height={400}
            data-ai-hint={template.images[0].imageHint}
            className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
            <Badge variant="secondary" className="whitespace-nowrap">{template.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>{template.reviews.rating} ({template.reviews.count})</span>
            </div>
        </div>
        <CardTitle className="font-headline text-lg mt-2">
            <Link href={`/product/${template.slug}`} className="hover:text-primary transition-colors">
                {template.title}
            </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{template.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-headline font-semibold text-primary">
          {template.price.toLocaleString('fr-FR')} {template.currency}
        </p>
        <Button asChild size="sm" variant="outline">
          <Link href={`/product/${template.slug}`}>
            Voir le modèle
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
