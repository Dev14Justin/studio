# **App Name**: BoxExcel

## Core Features:

- User Authentication: Allow users to register and log in using email/password, secured with Firebase Auth.
- Template Catalog: Browse, filter, and search Excel templates.
- Product Page: Display template details including description, images, demo, and price.
- Secure Payment Processing: Process payments via Mobile Money (Flooz/TMoney) and cards (Visa/Mastercard).
- Template Download: Enable secure download of purchased templates after successful payment. Excel files will be downloaded automatically from a third party service website.
- Admin Dashboard: CRUD templates and track sales statistics.
- Role-Based Access Control: Secure platform access using roles (user, admin, superadmin) with Firebase Auth and Firestore rules.

## Style Guidelines:

- Primary color: Green (#34D399) for the dominant theme, creating a fresh and professional feel.
- Secondary color: Blue (#1A73E8) to complement the primary, offering a sense of trust and stability.
- Accent color: Yellow (#FACC15) to highlight key elements and CTAs, adding vibrancy.
- Dark theme background: Deep black (#0F172A) to make content pop. Light theme background: Light gray (#E2E8F0) for a clean and modern interface.
- Headline font: 'Inter' (sans-serif) for titles, providing a clear and modern look.
- Body font: 'Poppins' (sans-serif) for body text, maintaining readability and consistency.
- Use Heroicons/Lucide vector icons throughout the interface for a consistent visual language.
- Subtle animations (using Framer Motion) to enhance user experience without being intrusive.
- Note: currently only Google Fonts are supported.