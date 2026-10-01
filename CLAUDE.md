# Mairie — proposition de refonte du site de Saint-Martin-de-Boscherville

## En bref

Maquette de **nouvelle page d'accueil** pour le site de la mairie de Saint-Martin-de-Boscherville (le village où habite Morgan). Site **non officiel** : le site officiel est https://www.boscherville.fr. Morgan propose cette maquette à la mairie et est prêt à refaire l'ensemble du site si la mairie est intéressée (prix à négocier).

- Dépôt GitHub : `Penipam/Site-mairie-` (**public**, renommé `Mairie` un temps puis remis à son ancien nom le 2026-10-01) — Projet Vercel : `mairie`
- **Lien envoyé à la mairie par mail : https://penipam.github.io/Site-mairie-/** (GitHub Pages, branche `main`, dossier racine). Ne pas renommer le dépôt ni le repasser en privé, sinon ce lien casse.
- `_config.yml` empêche GitHub Pages de publier `CLAUDE.md` et `README.md`. `CLAUDE.md` n'est de toute façon pas sur GitHub.
- La balise `<meta name="robots" content="noindex, nofollow">` interdit l'indexation (c'est une maquette).

## Contenu de la page

Bandeau sur l'abbatiale Saint-Georges et la vallée de la Seine ; « Cette semaine à Boscherville » ; actualités du village ; démarches classées par situation ; équipements (caserne des pompiers, école Simone Veil, foyer socio-culturel) ; l'abbaye et son histoire ; contact et accès à la mairie. Les liens « en savoir plus » renvoient vers les pages du site officiel (boscherville.fr) et du SDIS 76.

## Structure

- `index.html` : contenu
- `assets/css/style.css` : styles (extraits de l'ancien fichier unique)
- `assets/js/main.js` : menu, actualités, horaires d'ouverture
- `assets/images/` : 7 photos (`abbatiale-jardins-seine.jpg`, `abbatiale-terrasses.jpg`, `abbatiale-nef.jpg`, `caserne-pompiers.jpg`, `ecole-simone-veil.jpg`, `foyer-salle-des-fetes.jpg`, `mairie.jpg`). Elles étaient intégrées en base64 dans l'HTML ; elles sont maintenant de vrais fichiers.

## Design

- Polices : **Marcellus** (titres), **Alegreya Sans** (texte), **DM Mono** (détails).
- Couleurs : `--paper #f3f4ef`, `--ink #1c2830`, `--bocage #2d5a44` (vert bocage normand), `--porte #b04d47` (rouge).

## Pistes pour la suite

- Si la mairie accepte : créer les autres pages (actualités, démarches, vie scolaire, location de salles, conseil municipal…) au lieu de renvoyer vers l'ancien site.
- La mairie a reçu le lien GitHub Pages (voir plus haut) : pas besoin du lien de partage Vercel pour ce site.
- Petit reste : dans la case « About » du dépôt sur GitHub, le lien « Website » pointe encore vers l'ancienne adresse `penipam.github.io/Mairie/` (sans importance pour la mairie).

## Comment on travaille (règles de Morgan)

- Tout le travail sur les sites se fait **dans ce dossier** (`~/Folder local /Sites/<Site>`), jamais ailleurs. Chaque site a son propre dossier dans `Folder local/Sites`.
- Structure identique pour tous les sites : `index.html`, `assets/css/`, `assets/js/`, `assets/images/`, `README.md`, `.gitignore`, `.vercelignore`, `CLAUDE.md`.
- Claude modifie les fichiers ; Morgan publie lui-même : **GitHub Desktop → Commit to main → Push origin**. Vercel redéploie automatiquement en ~30 s.
- Les dépôts GitHub sont **privés** (pas de GitHub Pages), **sauf celui-ci** (`Site-mairie-`, public pour GitHub Pages). Le site est hébergé sur **Vercel (offre gratuite Hobby)**, protégé par **Vercel Authentication sur « All Deployments »** : seul Morgan, connecté à Vercel, peut le voir.
- Pour montrer un site à quelqu'un : bouton **Share → Anyone with the link** sur Vercel (lien de branche, pas de commit). L'offre gratuite ne permet **qu'un seul lien de partage pour tout le compte** (prévu pour Investissement) : désactiver l'ancien avant d'en créer un autre.
- Morgan est francophone et n'est pas développeur : expliquer simplement, en français, ce qui change et ce qu'il doit faire (souvent juste Commit + Push).
- Vérifier visuellement chaque modification (ouvrir `index.html` dans un navigateur) avant de dire que c'est fait.
- **En fin de session**, mettre à jour ce fichier `CLAUDE.md` avec les décisions prises et ce qui reste à faire.
