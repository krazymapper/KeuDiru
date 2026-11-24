# KEU DIRU

Plateforme publique, communautaire, multidisciplinaire et multilingue de découverte et d'organisation des connaissances.

## Vision

KEU DIRU facilite la découverte, l'organisation et le partage de ressources utiles à l'apprentissage, à la recherche et à la pratique : cours, tutoriels, matériels, jeux de données, outils, articles, vidéos, livres, sites et dépôts.

## MVP

- Catalogue public de ressources
- Recherche et filtres
- Interface française et anglaise
- Fiches détaillées
- Collections thématiques
- Favoris des membres
- Contributions avec modération
- Parcours d'apprentissage
- Interface responsive et PWA

## Architecture cible

Astro, TypeScript, React pour l'interactivité, Tailwind CSS, Zod, Supabase (PostgreSQL/Auth/Storage) et GitHub Actions. Ces choix sont une cible et ne signifient pas que ces composants sont déjà implémentés.

## Développement local

Prérequis : Node.js 22. Après clonage :

```bash
npm install
npm run dev
```

Contrôles avant contribution :

```bash
npm run check
npm run build
```

La configuration de Tailwind CSS 4 est intégrée via le plugin Vite officiel. React sera ajouté lorsque les premiers composants interactifs le nécessiteront.

## Documentation

- `01_CONSOLIDATION_ORIGINE_REGLES_METIER.md`
- `02_RELAIS.md`

## Principes

Le catalogue publié est public. Les contributions sont modérées. Les sources, auteurs et licences sont conservés lorsqu'ils sont connus. Les ressources externes conservent leurs licences propres. Les données privées sont protégées par des règles d'accès strictes.

## État initial

Le dépôt officiel est `krazymapper/KeuDiru`. Le code applicatif, la base de données et le déploiement restent à initialiser et à vérifier. Les décisions métier sont documentées dans les fichiers de référence.

## Licences

Les licences du code et de la documentation originale seront confirmées avant la première publication logicielle. Les ressources tierces conservent leurs licences et conditions d'utilisation propres.
