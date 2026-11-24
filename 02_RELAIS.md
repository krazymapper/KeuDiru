# KEU DIRU — Document de relais et de reprise

**Version :** 1.0  
**Statut :** relais initial — à actualiser à chaque jalon  
**Public :** porteur du projet, développeur, designer, collaborateur ou IA

## 1. Objet

Ce document permet de reprendre KEU DIRU sans perdre la vision, les décisions, l'état vérifié et les prochaines étapes. Lire également `01_CONSOLIDATION_ORIGINE_REGLES_METIER.md`, référentiel métier détaillé.

## 2. Résumé exécutif

KEU DIRU est une plateforme publique, communautaire, multidisciplinaire et multilingue de découverte et d'organisation des connaissances. Elle référence cours, tutoriels, matériels, sources de données, datasets, sites, outils, articles, vidéos, livres et autres ressources.

Le MVP combine une bibliothèque éditoriale et un dashboard : catalogue, recherche, filtres, fiches, collections, favoris, contributions modérées, parcours d'apprentissage, interface FR/EN et PWA.

**Dépôt officiel :** https://github.com/krazymapper/KeuDiru  
**Branche par défaut vérifiée :** `main`.

## 3. État du dépôt

Au moment du premier contrôle, le dépôt était public et vide. À la suite du rétablissement des autorisations, le README a été créé et relu sur la branche `main`.

Les deux documents de référence sont publiés. Un premier squelette Astro + TypeScript + Tailwind CSS 4 est également commité : configuration, layout partagé, page d'accueil initiale, variables d'environnement d'exemple et workflow CI. Le workflow GitHub Actions a été déclenché, mais son résultat final n'a pas encore été vérifié. Aucun projet Supabase, schéma de base, authentification ou déploiement n'est confirmé comme existant.

## 4. Décisions confirmées

- Nom : KEU DIRU.
- Vocation : communautaire.
- Catalogue public.
- Langues minimales : français et anglais.
- Design hybride : bibliothèque éditoriale + dashboard.
- MVP : recherche, filtres, collections, favoris, contributions modérées, parcours et PWA.

## 5. Architecture cible — non présumée implémentée

| Couche | Choix envisagé | Remarque |
|---|---|---|
| Frontend | Astro + TypeScript | Site principal |
| Interactivité | React | Là où nécessaire |
| Styles | Tailwind CSS | Responsive |
| Validation | Zod | Formulaires et données |
| Données | Supabase PostgreSQL | Catalogue et données communautaires |
| Auth | Supabase Auth | Comptes et sessions |
| Recherche | PostgreSQL FTS + `pg_trgm` | Catalogue dynamique |
| CI/CD | GitHub Actions | Tests et déploiement |
| PWA | Manifest + service worker | Cache prudent |

GitHub Pages ne fournit pas de backend serveur. Si l'hébergement statique est retenu, le frontend devra appeler Supabase ou une autre API externe.

## 6. Socle technique présent dans le dépôt\n\n- `package.json` : scripts de développement, vérification et build ; Astro 7, TypeScript, Tailwind CSS 4 et outil de vérification Astro.\n- `astro.config.mjs` : configuration Astro et plugin Vite Tailwind.\n- `tsconfig.json` : configuration TypeScript stricte.\n- `src/layouts/BaseLayout.astro` : layout commun et métadonnées de base.\n- `src/pages/index.astro` : page d'accueil de présentation, navigation, formulaire de recherche et sections de découverte.\n- `src/pages/explorer.astro` : catalogue de démonstration avec six ressources de référence, recherche textuelle côté navigateur, filtres par discipline et type, et liens vers les sites sources. Les données sont statiques ; ce n'est pas encore le catalogue Supabase. La requête envoyée depuis l'accueil est préremplie dans le champ de recherche.\n- `src/styles/global.css` : base globale.\n- `.env.example` : variables publiques Supabase en exemple, sans secret.\n- `.github/workflows/ci.yml` : installation des dépendances, vérification Astro et build sur push/PR vers main.\n- `.nvmrc` : ligne Node 22.\n\nReact n'est pas encore installé : l'ajouter lorsque des composants réellement interactifs le justifieront. Aucun composant React n'est nécessaire pour la première page statique.\n\n## 7. Ce qu'il ne faut pas supposer

Ne pas supposer que les tables SQL, RLS, authentification, rôles, déploiement, domaine ou licences sont déjà configurés. Ne jamais inventer un résultat de test ou un état d'avancement. Ne jamais inscrire de secrets dans le dépôt ou ce document.

## 8. Arborescence technique cible

```text
KEU-DIRU/
├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── CONTRIBUTING.md
├── public/
│   ├── icons/
│   ├── images/
│   └── manifest.webmanifest
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── i18n/
│   ├── lib/
│   ├── styles/
│   └── types/
├── supabase/
│   ├── migrations/
│   ├── seed.sql
│   └── tests/
├── docs/
├── scripts/
├── tests/
├── .env.example
├── .gitignore
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Cette arborescence est une cible, pas l'inventaire du dépôt.

## 9. Modèle de données envisagé

`profiles`, `disciplines`, `topics`, `resource_types`, `resources`, `resource_translations`, `resource_topics`, `tags`, `resource_tags`, `collections`, `collection_items`, `learning_paths`, `learning_path_steps`, `favorites`, `contributions`, `contribution_reviews`, `learning_progress`.

Principes : une ressource peut être liée à plusieurs sujets et traductions ; une collection n'impose pas de progression ; un parcours possède des étapes ordonnées ; favoris et progression appartiennent à un membre ; les contributions suivent un cycle de modération.

Le schéma physique doit définir clés, relations, contraintes, index, statuts, règles de suppression et RLS avant production.

## 10. Flux métier

### Consultation
Visiteur → catalogue public → recherche/filtres → fiche ressource → collection ou parcours. La consultation ne doit pas imposer une inscription.

### Contribution
Membre connecté → formulaire → validation → détection de doublon potentiel → attente → revue éditoriale → approbation, demande de correction ou refus → publication éventuelle.

### Favoris et progression
Membre connecté → favoris ou suivi d'un parcours → enregistrement associé à son compte. Un membre ne doit pas lire ou modifier les données privées d'un autre.

## 11. Sécurité incontournable

- Activer et tester RLS sur toutes les tables exposées.
- Définir des politiques pour visiteurs, membres, éditeurs, modérateurs et administrateurs.
- Garder la clé Supabase `service_role` côté serveur uniquement.
- Utiliser des variables d'environnement et un `.env.example` sans secrets.
- Protéger les contributions en attente et les données personnelles.
- Tester les accès non autorisés.
- Prévoir sauvegarde et restauration avant le lancement.

## 12. Licences envisagées

À confirmer avant publication : code MIT ; documentation originale CC BY 4.0 ; ressources externes sous leurs licences et conditions propres.

## 13. Feuille de route

| Phase | Travail | Résultat attendu |
|---|---|---|
| 1 | Initialiser Astro, TypeScript et conventions | Squelette exécutable |
| 2 | Interface publique responsive et bilingue | Pages et navigation |
| 3 | Catalogue, fiches, taxonomie, collections, filtres | Découverte |
| 4 | Modèle de données et recherche | Catalogue dynamique |
| 5 | Auth, profils, contributions, modération, RLS | Flux communautaire sécurisé |
| 6 | Favoris, parcours, progression | Fonctions membres |
| 7 | PWA, tests, accessibilité, sécurité | Produit robuste |
| 8 | CI/CD, déploiement, documentation, tests utilisateurs | MVP publiable |

Objectifs indicatifs : 12 disciplines, 100 ressources validées, 5 collections, 3 parcours, interface FR/EN, recherche, filtres, modération et PWA.

## 14. Actions immédiates

1. Vérifier l'état du dépôt et des branches avant chaque modification.
2. Vérifier si un projet Supabase existe avant d'en créer un.
3. Initialiser le frontend si le dépôt est toujours à ce stade.
4. Ajouter conventions, tests et workflows qualité.
5. Construire une première tranche : accueil → exploration → recherche/filtre → fiche ressource.
6. Ajouter ensuite backend, authentification et contributions modérées.

Commandes indicatives, uniquement si le dossier local est vide et l'environnement prêt :

```bash
npm create astro@latest keu-diru
cd keu-diru
npx astro add react
npx astro add tailwind
npm install @supabase/supabase-js zod
npm install -D vitest @playwright/test
```

Ne pas exécuter ces commandes dans un dossier contenant déjà du travail sans inspection préalable.

## 15. Variables d'environnement

Exemple indicatif :

```dotenv
PUBLIC_SUPABASE_URL=
PUBLIC_SUPABASE_ANON_KEY=
```

La clé publique ne doit être utilisée côté navigateur qu'avec des politiques RLS correctes. La clé `service_role` ne doit jamais être exposée au client.

## 16. Git et collaboration

Branches proposées : `main` pour la version stable, `develop` pour l'intégration, `feature/*` pour les fonctionnalités et `fix/*` pour les corrections. Utiliser des pull requests, revues et contrôles automatisés. Ne jamais pousser de secrets ou de données personnelles.

## 17. Consignes aux personnes et IA qui reprennent le projet

1. Lire les deux documents de référence avant toute modification structurante.
2. Répondre en français par défaut.
3. Distinguer **validé**, **proposé**, **à confirmer**, **implémenté** et **testé**.
4. Ne pas déclarer une tâche terminée sans preuve vérifiable.
5. Avant une migration, expliquer l'impact et prévoir un retour arrière si possible.
6. Vérifier tests, variables, RLS et chemins avant déploiement.
7. Mettre à jour ce relais à chaque jalon : date, décisions, fichiers, tests, blocages et prochaine action.
8. Ne jamais inscrire de secrets ou données personnelles dans la documentation.

## 18. Modèle de mise à jour

```markdown
### Mise à jour — AAAA-MM-JJ

**État général :**
- 

**Réalisations vérifiées :**
- 

**Fichiers créés ou modifiés :**
- 

**Décisions validées :**
- 

**Tests exécutés et résultats :**
- 

**Blocages / risques :**
- 

**Décisions en attente :**
- 

**Prochaine action :**
- 
```

## 19. État au moment de la rédaction

- Dépôt officiel confirmé : `krazymapper/KeuDiru`.
- README créé et relu sur `main`.
- Documents métier et de relais en cours d'intégration.
- Architecture Astro + TypeScript + Supabase = cible, pas implémentation vérifiée.
- Schéma de données, RLS, CI/CD, tests et déploiement restent à construire et vérifier.

**Document compagnon :** `01_CONSOLIDATION_ORIGINE_REGLES_METIER.md`.
