export const metadata = {
  title: 'Mentions Légales',
};

export default function TermsPage() {
  return (
    <>
      <h1>Mentions Légales</h1>
      <p>Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
      
      <h2>1. Éditeur du Site</h2>
      <p>Le site BoxExcel, accessible à l'adresse www.boxexcel.com, est édité par :</p>
      <p><strong>BoxExcel SAS</strong><br />
      Adresse : Lomé, Togo<br />
      Email : contact@boxexcel.com</p>
      
      <h2>2. Hébergement</h2>
      <p>Le site est hébergé par Vercel Inc., dont le siège social est situé au 340 S Lemon Ave #4133 Walnut, CA 91789.</p>

      <h2>3. Propriété Intellectuelle</h2>
      <p>Tous les contenus présents sur le site BoxExcel, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société BoxExcel à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.</p>
      <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de BoxExcel. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
      
      <h2>4. Conditions d'Utilisation</h2>
      <p>L'achat d'un modèle sur BoxExcel vous octroie une licence d'utilisation personnelle et non-exclusive. Vous n'êtes pas autorisé à revendre, distribuer ou partager les fichiers de modèles achetés.</p>
      
      <h2>5. Données Personnelles</h2>
      <p>Les informations recueillies font l’objet d’un traitement informatique destiné à la gestion des commandes et à la relation client. Conformément à la loi, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en nous contactant. Pour plus d'informations, veuillez consulter notre <a href="/privacy">Politique de Confidentialité</a>.</p>
    </>
  );
}
