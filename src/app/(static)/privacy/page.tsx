export const metadata = {
  title: 'Politique de Confidentialité',
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Politique de Confidentialité</h1>
      <p>Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
      
      <p>BoxExcel s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web.</p>
      
      <h2>Collecte de vos Informations</h2>
      <p>Nous pouvons collecter des informations vous concernant de différentes manières. Les informations que nous pouvons collecter sur le Site comprennent :</p>
      <ul>
        <li><strong>Données personnelles :</strong> Informations personnellement identifiables, telles que votre nom, votre adresse e-mail, que vous nous fournissez volontairement lorsque vous vous inscrivez sur le Site ou lorsque vous choisissez de participer à diverses activités liées au Site, comme l'achat de produits.</li>
        <li><strong>Données de paiement :</strong> Nous pouvons collecter des données relatives à vos moyens de paiement (par exemple, numéro de carte de crédit) lorsque vous effectuez un achat. Ces données sont traitées de manière sécurisée par nos prestataires de paiement et ne sont pas stockées sur nos serveurs.</li>
        <li><strong>Données dérivées :</strong> Informations que nos serveurs collectent automatiquement lorsque vous accédez au Site, telles que votre adresse IP, votre type de navigateur, votre système d'exploitation, vos temps d'accès et les pages que vous avez consultées directement avant et après l'accès au Site.</li>
      </ul>
      
      <h2>Utilisation de vos Informations</h2>
      <p>Avoir des informations précises sur vous nous permet de vous offrir une expérience fluide, efficace et personnalisée. Spécifiquement, nous pouvons utiliser les informations collectées à votre sujet via le Site pour :</p>
      <ul>
        <li>Créer et gérer votre compte.</li>
        <li>Traiter vos paiements et remboursements.</li>
        <li>Vous envoyer un e-mail concernant votre compte ou votre commande.</li>
        <li>Vous permettre de télécharger les produits achetés.</li>
        <li>Améliorer l'efficacité et le fonctionnement du Site.</li>
      </ul>

      <h2>Sécurité de vos Informations</h2>
      <p>Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez être conscient que malgré nos efforts, aucune mesure de sécurité n'est parfaite ou impénétrable.</p>

      <h2>Contactez-nous</h2>
      <p>Si vous avez des questions ou des commentaires sur cette politique de confidentialité, veuillez nous contacter à : privacy@boxexcel.com.</p>
    </>
  );
}
