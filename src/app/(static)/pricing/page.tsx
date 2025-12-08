import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: 'Tarifs',
};

const plans = [
    {
        title: "A l'unité",
        description: "Achetez les modèles dont vous avez besoin, quand vous en avez besoin.",
        price: "Variable",
        period: "par modèle",
        features: [
            "Accès à vie au modèle acheté",
            "Mises à jour incluses",
            "Support par e-mail",
        ],
        cta: "Parcourir le catalogue",
        href: "/catalogue",
    },
    {
        title: "Pro",
        description: "Idéal pour les freelances et les PME avec des besoins réguliers.",
        price: "15 000",
        period: "FCFA / mois",
        features: [
            "5 téléchargements par mois",
            "Accès à tout le catalogue",
            "Support prioritaire",
            "Suggestions de nouveaux modèles",
        ],
        cta: "Choisir Pro",
        href: "/auth/register",
    },
    {
        title: "Entreprise",
        description: "La solution complète pour les grandes équipes et les entreprises.",
        price: "Sur Devis",
        period: "",
        features: [
            "Téléchargements illimités",
            "Support dédié (téléphone/visio)",
            "Modèles sur mesure",
            "Formation pour vos équipes",
        ],
        cta: "Nous contacter",
        href: "/contact",
    }
]

export default function PricingPage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline">Nos Tarifs</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choisissez le plan qui correspond le mieux à vos besoins.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => (
            <Card key={plan.title} className="flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline">{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="mb-6">
                        <span className="text-4xl font-bold font-headline">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <ul className="space-y-3">
                        {plan.features.map(feature => (
                            <li key={feature} className="flex items-start">
                                <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" asChild>
                        <a href={plan.href}>{plan.cta}</a>
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </>
  );
}
