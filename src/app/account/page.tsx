import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: 'Mon Compte',
};

export default function AccountPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-bold font-headline mb-8">Mon Compte</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Page de compte</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Cette page est en construction. Vous pourrez bientôt y retrouver l'historique de vos achats, gérer votre profil et télécharger vos factures.</p>
                </CardContent>
            </Card>
        </div>
    );
}
