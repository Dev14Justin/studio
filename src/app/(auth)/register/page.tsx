
'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/common/logo';

export default function RegisterPage() {
  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <Logo className="mb-4" />
        <CardTitle className="text-2xl font-headline">Inscription</CardTitle>
        <CardDescription>
          Créez un compte pour commencer à acheter nos modèles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="full-name">Nom complet</Label>
            <Input id="full-name" placeholder="Prénom Nom" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@exemple.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Créer un compte
          </Button>
          <Button variant="outline" className="w-full">
            S'inscrire avec Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous avez déjà un compte?{" "}
          <Link href="/login" className="underline">
            Se connecter
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
