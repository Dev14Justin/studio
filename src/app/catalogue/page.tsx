import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockTemplates } from "@/lib/mock-data"
import { TemplateCard } from "@/components/template-card"

export const metadata = {
  title: 'Catalogue',
  description: 'Parcourez tous nos modèles Excel professionnels.',
};

export default function CataloguePage() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Notre Catalogue de Modèles</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Trouvez l'outil parfait pour optimiser votre travail et atteindre vos objectifs.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-24 space-y-6">
            <h2 className="text-xl font-headline font-semibold">Filtres</h2>
            <div>
              <label className="text-sm font-medium">Catégorie</label>
              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Toutes" />
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
            <div>
              <label className="text-sm font-medium">Trier par</label>
              <Select>
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Popularité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularité</SelectItem>
                  <SelectItem value="newest">Nouveautés</SelectItem>
                  <SelectItem value="price-asc">Prix croissant</SelectItem>
                  <SelectItem value="price-desc">Prix décroissant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {mockTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
             {mockTemplates.map((template) => (
              <TemplateCard key={template.id + '-dup'} template={{...template, id: template.id + '-dup'}} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
