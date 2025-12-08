
'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { mockTemplates } from '@/lib/mock-data';
import { TemplateCard } from '@/components/template-card';
import { Input } from '@/components/ui/input';
import { Search, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CataloguePage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">
          Notre Catalogue de Modèles
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Trouvez l'outil parfait pour optimiser votre travail et atteindre vos
          objectifs.
        </p>
      </div>

      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 mb-8 border-b">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-auto sm:flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Rechercher un modèle..." 
              className="pl-10 w-full"
            />
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <div className="w-full">
              <label htmlFor="category-select" className="sr-only">
                Catégorie
              </label>
              <Select>
                <SelectTrigger id="category-select" className="w-full">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="rh">RH</SelectItem>
                  <SelectItem value="project">Gestion de projet</SelectItem>
                  <SelectItem value="sales">Vente</SelectItem>
                  <SelectItem value="personal">Personnel</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <label htmlFor="sort-select" className="sr-only">
                Trier par
              </label>
              <Select>
                <SelectTrigger id="sort-select" className="w-full">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularité</SelectItem>
                  <SelectItem value="newest">Nouveautés</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <Button asChild className="w-full sm:w-auto flex-shrink-0">
                <Link href="/contact">
                  <Pencil className="mr-2 h-4 w-4" />
                  Modèle sur mesure
                </Link>
              </Button>
          </div>
        </div>
      </div>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
          {mockTemplates.map((template) => (
            <TemplateCard
              key={template.id + '-dup'}
              template={{ ...template, id: template.id + '-dup' }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
