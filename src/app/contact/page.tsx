
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: 'Contact & Devis Personnalisé',
};

export default function ContactPage() {
  return (
    <div className="container py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-headline">Contactez-nous</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Une question ? Un besoin spécifique ? Remplissez ce formulaire pour obtenir un devis pour votre modèle sur mesure.
            </p>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Demande de modèle personnalisé</CardTitle>
                <CardDescription>Décrivez votre besoin et nous reviendrons vers vous sous 48h.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nom complet</Label>
                            <Input id="name" placeholder="Prénom Nom" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Adresse e-mail</Label>
                            <Input id="email" type="email" placeholder="m@exemple.com" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="company">Entreprise (facultatif)</Label>
                        <Input id="company" placeholder="Nom de votre entreprise" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description de votre besoin</Label>
                        <Textarea id="description" placeholder="Décrivez en détail le modèle que vous souhaitez..." required rows={6} />
                    </div>
                    <Button type="submit" className="w-full">
                        Envoyer la demande
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
}
