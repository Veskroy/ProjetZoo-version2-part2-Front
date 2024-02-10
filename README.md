# WildWonderHub (SAE 3.01)

![logo](public/assets/images/logos/LogoSAE_Zoo.png)

---

WildWonderHub est une application de gestion des visiteurs et des animaux du Zoo de la Palmyre, utilisant principalement le framework Symfony (version 6.3).

Il s'agit ici de la partie FRONT du projet.

Le sujet sur lequel s'appuyer pour la réalisation de cette SAE se trouve [ici](http://cutrona/but/s4/sae4-real-01/).

---

## Table des matières

<!-- TOC -->
  * [Auteurs du projet](#auteurs-du-projet)
  * [Outils utilisés](#outils-utilisés)
  * [Guide d'installation](#guide-dinstallation)
  * [Gestion des branches et commits](#gestion-des-branches-et-commits)
<!-- TOC -->

---

### Auteurs du projet

- Logan Jacotin
- Romain Leroy
- Vincent Kpatinde
- Clément Perrot

---

### Outils utilisés

- [React](https://fr.legacy.reactjs.org/docs/getting-started.html)
- [Vite](https://vitejs.dev/guide/)

<i>(... à compléter)</i>

---

### Guide d'installation

1- Clônage du projet
```shell
git clone https://iut-info.univ-reims.fr/gitlab/perr0112/sae4-01-front.git
```

2- Installer toutes les dépendances
```shell
npm install
```

3- Démarrer le projet
```shell
npm run dev
```

---

### Gestion des branches et commits

#### Apporter une modification au dépôt git
- Créer une branche contenant le nom de la fonctionnalité traitée

```shell
git branch <nom>
```

- Se positionner sur cette branche

```shell
git checkout <nom>
```

- Retourner sur la branche main une fois le code écrit

```shell
git checkout main
git pull
```

- Retourner sur sa branche locale
```shell
git checkout <nom>
git rebase main
```

- Push le code écrit
- Demande de merge request sur le repo gitlab (en décrivant les ajouts/modifications apportés au projet)

#### Exemple de commit

* ajout d’une fonctionnalité

```shell
git commit -m "add: <fonctionnalité ajoutée>"
```
* modification d’une fonctionnalité déjà présente
```shell
git commit -m "edit: <fonctionnalité modifiée>"
```
* suppression d’un fichier
```shell
git commit -m "delete: <fonctionnalité supprimée>"
```
* modification d'un composant
```shell
git commit -m "edit(<component>): <fonctionnalité modifiée sur le dit component>"
```