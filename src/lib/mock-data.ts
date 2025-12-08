import type { Template } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Placeholder image with id "${id}" not found.`);
  }
  return image;
};

export const mockTemplates: Template[] = [
  {
    id: '1',
    title: 'Plan Budgétaire Annuel Pro',
    slug: 'plan-budgetaire-annuel-pro',
    description: 'Un template complet pour gérer votre budget annuel, suivre vos dépenses et prévoir vos revenus.',
    longDescription: '<p>Ce modèle Excel est conçu pour les PME et les indépendants qui souhaitent avoir une vision claire de leurs finances. Il inclut des tableaux de bord dynamiques, des graphiques personnalisables et un suivi détaillé des flux de trésorerie.</p><p>Fonctionnalités :</p><ul><li>Suivi des revenus et dépenses</li><li>Tableau de bord de synthèse</li><li>Analyse de rentabilité</li><li>Prévisions financières</li></ul>',
    price: 2500,
    currency: 'XOF',
    category: 'Finance',
    images: [findImage('template-1'), findImage('template-2'), findImage('template-3')],
    filePath: 'https://boxexcel-files.vercel.app/plan_budget_annuel.xlsx',
    demoUrl: 'https://youtube.com/plan_budget_annuel',
    prerequisites: ['Excel 2019+', 'Connaissances de base en finance'],
    tags: ['budget', 'finance', 'PME'],
    author: {
      name: 'Alice Martin',
      title: 'Data Analyst',
      avatarUrl: findImage('avatar-2').imageUrl,
    },
    reviews: {
      rating: 4.8,
      count: 72,
    },
    createdAt: '2023-10-26T10:00:00Z',
  },
  {
    id: '2',
    title: 'Gestion de Stock Automatisée',
    slug: 'gestion-de-stock-automatisee',
    description: 'Optimisez votre inventaire, suivez les entrées/sorties et évitez les ruptures de stock.',
    longDescription: '<p>Automatisez la gestion de votre inventaire avec ce puissant modèle Excel. Idéal pour les e-commerçants et les petites entreprises, il permet de suivre les niveaux de stock en temps réel, de générer des alertes de réapprovisionnement et d\'analyser les rotations de produits.</p>',
    price: 3500,
    currency: 'XOF',
    category: 'Vente',
    images: [findImage('template-4'), findImage('template-5')],
    filePath: 'https://boxexcel-files.vercel.app/gestion_stock.xlsx',
    demoUrl: 'https://youtube.com/gestion_stock',
    prerequisites: ['Excel 2021+', 'Macros activées'],
    tags: ['stock', 'inventaire', 'e-commerce'],
    author: {
      name: 'Jean Dupont',
      title: 'Consultant Logistique',
      avatarUrl: findImage('avatar-1').imageUrl,
    },
    reviews: {
      rating: 4.9,
      count: 115,
    },
    createdAt: '2023-11-15T14:30:00Z',
  },
  {
    id: '3',
    title: 'Planning RH et Suivi des Congés',
    slug: 'planning-rh-suivi-conges',
    description: 'Gérez les plannings de vos équipes, suivez les congés et les absences en un clin d\'œil.',
    longDescription: '<p>Simplifiez la gestion des ressources humaines avec ce template RH complet. Il offre une vue calendaire des plannings, un système de demande et de validation des congés, et des rapports sur l\'absentéisme.</p>',
    price: 2000,
    currency: 'XOF',
    category: 'RH',
    images: [findImage('template-5'), findImage('template-6')],
    filePath: 'https://boxexcel-files.vercel.app/planning_rh.xlsx',
    demoUrl: 'https://youtube.com/planning_rh',
    prerequisites: ['Excel 2016+'],
    tags: ['rh', 'planning', 'congés', 'équipe'],
    author: {
      name: 'Alice Martin',
      title: 'Data Analyst',
      avatarUrl: findImage('avatar-2').imageUrl,
    },
    reviews: {
      rating: 4.7,
      count: 58,
    },
    createdAt: '2024-01-20T09:00:00Z',
  },
  {
    id: '4',
    title: 'Tableau de Bord de Projet (Gantt)',
    slug: 'tableau-de-bord-projet-gantt',
    description: 'Planifiez vos projets, suivez les tâches et les jalons avec un diagramme de Gantt dynamique.',
    longDescription: '<p>Un outil indispensable pour tout chef de projet. Ce modèle permet de créer des diagrammes de Gantt, d\'assigner des ressources, de suivre l\'avancement des tâches et de visualiser les dépendances. Le tableau de bord offre une vue d\'ensemble de la santé du projet.</p>',
    price: 3000,
    currency: 'XOF',
    category: 'Gestion de projet',
    images: [findImage('template-3'), findImage('template-1')],
    filePath: 'https://boxexcel-files.vercel.app/gantt_chart.xlsx',
    demoUrl: 'https://youtube.com/gantt_chart',
    prerequisites: ['Excel 2019+'],
    tags: ['gantt', 'projet', 'planification', 'tâches'],
    author: {
      name: 'Chris Leblanc',
      title: 'Project Manager',
      avatarUrl: findImage('avatar-3').imageUrl,
    },
    reviews: {
      rating: 4.9,
      count: 98,
    },
    createdAt: '2024-02-10T11:00:00Z',
  },
];
