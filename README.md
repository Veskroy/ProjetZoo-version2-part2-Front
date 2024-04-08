# WildWonderHub (SAE 3.01)

![logo](public/assets/images/logos/LogoSAE_Zoo.png)

---

WildWonderHub est une application de gestion des visiteurs et des animaux du Zoo de la Palmyre, utilisant principalement le framework Symfony (version 6.3).

Il s'agit ici de la partie FRONT du projet.

Le sujet sur lequel s'appuyer pour la réalisation de cette SAE se trouve [ici](http://cutrona/but/s4/sae4-real-01/).

---

## Table des matières

<!-- TOC -->
- [Auteurs du projet](#auteurs-du-projet)
- [Outils utilisés](#outils-utilisés)
- [Guide d'installation](#guide-dinstallation)
  - [Clonage du Projet](#clonage-du-projet)
  - [Installation des Dépendances](#installation-des-dépendances)
  - [Démarrage du Projet](#démarrage-du-projet)
- [Gestion des Branches et des Commits](#gestion-des-branches-et-des-commits)
- [Installation avec Docker](#installation-avec-docker)
- [VM de Réact](#vm-de-réact)
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
- [Wouter](https://github.com/molefrog/wouter#readme)

<i>(... à compléter)</i>

---

### Guide d'installation

4- Démarrer le projet
```shell
npm run dev
```
---

## Guide d'installation

### Clonage du Projet
```shell
git clone https://iut-info.univ-reims.fr/gitlab/perr0112/sae4-01-front.git
cd sae4-01-front
```

### Installation des dépendances
```shell
npm install
```

### Démarrage du projet
```shell
npm run dev
```

---

## Gestion des branches et des commits

### Création d'une nouvelle branche

```shell
git checkout -b <nom_de_branche>
```

### Passage à la branche principale

```shell
git checkout main
git pull
```

### Rebase et push des modifications
```shell
git checkout <nom_de_branche>
git rebase main
git push origin <nom_de_branche>
```

- Push le code écrit
- Demande de merge request sur le repo gitlab (en décrivant les ajouts/modifications apportés au projet)

### Exemple de commit

* Ajout d’une fonctionnalité

```shell
git commit -m "add: <fonctionnalité ajoutée>"
```
* Modification d’une fonctionnalité déjà présente
```shell
git commit -m "edit: <fonctionnalité modifiée>"
```
* Suppression d’un fichier
```shell
git commit -m "delete: <fonctionnalité supprimée>"
```
* Modification d'un composant
```shell
git commit -m "edit(<component>): <fonctionnalité modifiée sur le dit component>"
```
---

### Installation avec docker

- Pour le lancer avec le docker compose :
```sh
docker-compose up
```
---
## VM de réact

Accédez à l'API sur une machine virtuelle utilisant des conteneurs Docker :
http://10.31.33.191:8000
