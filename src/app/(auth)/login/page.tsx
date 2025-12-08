import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/common/logo"

export default function LoginPage() {
  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <Logo className="mb-4" />
        <CardTitle className="text-2xl font-headline">Connexion</CardTitle>
        <CardDescription>
          Entrez votre email ci-dessous pour vous connecter à votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
              >
                Mot de passe oublié?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Se connecter
          </Button>
          <Button variant="outline" className="w-full">
            Se connecter avec Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n'avez pas de compte?{" "}
          <Link href="/auth/register" className="underline">
            S'inscrire
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
