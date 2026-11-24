# KEU DIRU — Consolidation, origine et règles métier

**Version :** 1.0 — **Statut :** référentiel initial de cadrage  
**Langues minimales du MVP :** français et anglais.

## 1. Origine et vision

KEU DIRU est une plateforme publique, communautaire, multidisciplinaire et multilingue destinée à faciliter la découverte, l'organisation et le partage de connaissances. Elle référence des ressources utiles à l'apprentissage, à la recherche et à la pratique : cours, tutoriels, matériels pédagogiques, jeux de données, outils, articles, vidéos, livres, sites et dépôts.

La plateforme organise et décrit les ressources ; elle n'a pas vocation à copier systématiquement les contenus tiers. Les liens, auteurs, sources et licences doivent être conservés lorsqu'ils sont connus.

## 2. Mission et principes

- Rassembler des références dispersées et faciliter leur découverte.
- Organiser les ressources par disciplines, sujets, types, langues et niveaux.
- Permettre à la communauté de proposer et d'améliorer les fiches.
- Constituer des collections thématiques et des parcours d'apprentissage.
- Favoriser l'accès à la connaissance, la traçabilité et le respect des droits.

Principes : ouverture, qualité éditoriale, contribution communautaire, multilinguisme, accessibilité, sécurité et développement progressif.

## 3. Décisions fonctionnelles validées

| Sujet | Décision |
|---|---|
| Nom | KEU DIRU |
| Vocation | Communautaire |
| Accès au catalogue | Public |
| Langues minimales | Français et anglais |
| Design | Hybride : bibliothèque éditoriale et dashboard |
| MVP | Recherche, filtres, collections, favoris, contributions modérées, parcours et PWA |

## 4. Vocabulaire métier

- **Ressource :** élément référencé (cours, tutoriel, dataset, outil, article, vidéo, livre, site, dépôt, etc.).
- **Discipline :** grand domaine de connaissance.
- **Sujet :** thème précis ou transversal.
- **Type :** nature de la ressource.
- **Collection :** regroupement thématique sans progression obligatoire.
- **Parcours :** séquence ordonnée d'étapes visant un objectif d'apprentissage.
- **Contribution :** proposition ou modification soumise par un membre.
- **Modération :** vérification avant publication ou modification sensible.
- **Favori :** ressource enregistrée par un membre.
- **Progression :** avancement d'un membre dans un parcours.

Une collection répond à « quelles ressources réunir ? » ; un parcours répond à « dans quel ordre apprendre ? ».

## 5. Acteurs et responsabilités

| Rôle | Responsabilités |
|---|---|
| Visiteur | Consulter, rechercher et filtrer le catalogue public |
| Membre | Proposer des ressources, gérer ses favoris et sa progression |
| Éditeur | Corriger et enrichir les métadonnées selon ses permissions |
| Modérateur | Approuver, refuser ou demander des corrections |
| Administrateur | Gérer les paramètres, rôles et taxonomies |

Appliquer le principe du moindre privilège. Les permissions doivent être matérialisées par des politiques testées.

## 6. Règles métier

**RM-01 — Publication.** Seules les ressources dont le statut autorise la publication apparaissent dans le catalogue public.

**RM-02 — Modération.** Une proposition communautaire n'est pas publiée automatiquement ; elle passe par une revue éditoriale.

**RM-03 — Métadonnées.** Une proposition doit comporter au minimum un titre, une description informative, un type, un domaine ou une discipline et une URL ou localisation d'accès lorsque cela s'applique. La langue est renseignée si elle est identifiable.

**RM-04 — Provenance.** Conserver l'auteur, l'éditeur, la source, la licence et les dates lorsqu'ils sont disponibles. Ne jamais inventer une information inconnue.

**RM-05 — Licences.** Les ressources tierces conservent leurs licences et conditions propres. Les licences de KEU DIRU ne s'appliquent pas automatiquement aux ressources référencées.

**RM-06 — Doublons.** Comparer les propositions par URL normalisée, titre et source. Une similarité automatique déclenche une vérification humaine, pas une suppression automatique.

**RM-07 — Qualité.** Une ressource publiée doit être pertinente, suffisamment documentée, non trompeuse et accessible, ou explicitement signalée comme restreinte.

**RM-08 — État des liens.** Distinguer lien fonctionnel, accès restreint, indisponibilité temporaire, lien cassé/ressource retirée et état non vérifié. Un échec temporaire ne prouve pas une suppression définitive.

**RM-09 — Langues.** La langue de l'interface est distincte de la langue du contenu. Les ressources doivent rester découvrables quelle que soit la langue d'interface choisie.

**RM-10 — Traductions.** Préférer une table de traductions liée à la ressource (par ex. `resource_translations`) à des colonnes fixes par langue.

**RM-11 — Collections.** Une collection regroupe des ressources par thème, usage ou public ; elle n'impose pas d'ordre pédagogique.

**RM-12 — Parcours.** Un parcours comporte un objectif, une description, un niveau/public cible et des étapes ordonnées. La progression personnelle est privée par défaut.

**RM-13 — Favoris.** Un membre ne peut consulter et gérer que ses propres favoris. Un favori ne modifie pas la visibilité d'une ressource.

**RM-14 — Données personnelles.** Ne collecter que les données nécessaires. Protéger profils, favoris, contributions non publiques et progression.

**RM-15 — Traçabilité.** Les décisions de modération et changements de statut importants doivent être traçables. Les durées de conservation restent à définir.

**RM-16 — Sécurité.** Activer et tester RLS sur les tables exposées. La clé Supabase `service_role` ne doit jamais être exposée au navigateur, commitée ou placée dans une variable publique.

**RM-17 — Hors ligne.** La PWA peut mettre en cache des contenus publics appropriés. Ne pas mettre en cache les secrets, jetons d'authentification ou données privées.

**RM-18 — Retrait.** Le retrait doit être contrôlé et traçable. Préférer l'archivage à une suppression irréversible lorsque l'historique est nécessaire ; politique finale à arbitrer.

## 7. Cycle de vie d'une contribution

1. Le membre soumet une proposition.
2. Le système valide champs et formats.
3. Des contrôles automatiques peuvent examiner l'URL et détecter des doublons probables.
4. La proposition est enregistrée en attente.
5. Un éditeur ou modérateur vérifie pertinence, qualité, provenance et droits.
6. Décision : approuvée, à corriger ou refusée.
7. La publication et les changements sont traçables.

## 8. Métadonnées recommandées

Identifiant stable, slug, titre, description, type, discipline, sujets, langue, niveau, URL, auteur, éditeur, formats, tags, dates d'ajout et de mise à jour, licence, coût d'accès, statut éditorial, état/date de vérification du lien et notes. Le schéma physique doit être normalisé.

## 9. Architecture cible

- Frontend : Astro + TypeScript ; React pour les composants interactifs ; Tailwind CSS ; Zod.
- Données et backend : Supabase PostgreSQL, Auth et éventuellement Storage.
- Recherche : PostgreSQL Full Text Search et `pg_trgm` ; Pagefind éventuellement pour le contenu statique.
- CI/CD : GitHub Actions.
- PWA : manifest, service worker, cache prudent et IndexedDB au besoin.
- Hébergement à arbitrer : GitHub Pages ne fournit qu'un hébergement statique et nécessite une API/backend externe.

Ces choix sont une architecture cible, pas une déclaration d'implémentation existante.

## 10. Modèle de données envisagé

`profiles`, `disciplines`, `topics`, `resource_types`, `resources`, `resource_translations`, `resource_topics`, `tags`, `resource_tags`, `collections`, `collection_items`, `learning_paths`, `learning_path_steps`, `favorites`, `contributions`, `contribution_reviews`, `learning_progress`.

Un SQL exploratoire antérieur ne doit pas être considéré comme une migration complète ou prête pour la production. Clés, relations, contraintes, index, statuts, RLS, triggers et tests restent à définir.

## 11. Licences envisagées

Proposition à confirmer avant publication : code MIT ; documentation originale CC BY 4.0 ; ressources externes sous leurs licences propres. Ne pas publier de fichiers de licence définitifs avant validation.

## 12. Cibles indicatives du MVP

12 disciplines, 100 ressources validées, 5 collections, 3 parcours, FR/EN, recherche, filtres, modération et PWA responsive. Ce sont des objectifs, pas des résultats atteints.

## 13. Décisions restant à prendre

Domaine et hébergement ; plan Supabase et budget ; taxonomie initiale ; champs obligatoires ; droits de création/édition des collections ; politique de retrait ; conservation des journaux et données personnelles ; fréquence de vérification des liens ; langue par défaut ; sauvegarde/restauration ; critères de mise en production.

## 14. Gouvernance documentaire

Toute modification des permissions, du cycle de publication, des données collectées, des licences ou de la visibilité des contenus doit être documentée avant implémentation. Mettre à jour le journal des décisions à chaque arbitrage structurant.
