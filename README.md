# Installation du projet basé sur Gulp 

- Installer NodeJS si ce n'est pas déjà fait
- Installer Gulp avec la commande :

```
npm install gulp -g
```

## Créer un projet Gulp

- Créer un dossier, aller dans ce dossier et lancer la commande ``` npm init ```. Cette commande va générer un fichier package.json.
- Installer Gulp dans le projet avec la commande :
```
npm install gulp --save-dev
```
On ajoute ```--save-dev``` pour dire d’ajouter gulp comme dépendance de développement (devDependencies) dans package.json.

## Fichier de configuration gulp.js
- Creér un fichier **gulp.js** à la racine du projet.

Lorsqu’on utilise Gulp, la première étape consiste à le requérir (require) dans le gulpfile.
```
//JS
var gulp = require('gulp');
```

La déclaration require indique à Node d’aller chercher dans ```node_modules``` un package appelé ```gulp```. Une fois trouvé, nous attribuons son contenu à la variable ```gulp```.

- Créer une tâche gulp avec cette variable ```gulp``` avec la syntaxe suivante :
```
gulp.task('nom-de-la-tache', function() {
  // quelque chose
});
```
Le nom-de-la-tache sera toujours être utilisé lorsque vous voulez lancer une tâche. Par exemple, vous pourrez lancer cette tâche dans la console en écrivant :

```gulp nom-de-la-tache```

Une tâche contient deux méthodes gulp : ```gulp.src``` et ```gulp.dest```.
```gulp.src``` indique à la tâche gulp quels fichiers utiliser pour la tâche, tandis que ```gulp.dest``` indique où mettre les fichiers qui résultent de l’exécution de la tâche.

