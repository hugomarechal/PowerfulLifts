# Powerful Lifts
## À propos
Powerful Lifts et la première application de tracking sportif 100% consacrée à la pratique de la force athlétique et au powerlifting.

Vous y retrouverez notamment un tableau personnel de PRs (personal records) ainsi qu'un outil de suivi de poids de corps.

## Installation et mise en route du projet

Le projet est divisé en deux parties, l'application à proporement parler et l'API.

Pour tester l'app, veuillez l'installer dans son intégralité comme il est présenté sur ce dépôt.
Vous devez également avoir installé php, composer, node, npm et mysql/mariadb.

Avec mysql ou mariadb (dans le terminal ou avec le GUI de votre choix), créez une base de données pour recevoir les données du projet.

Exemple: 
```mysql
CREATE DATABASE powerfullifts;
```


À la racine du projet, rendez vous d'abord dans le répertoire PowerfulLifts_API :
```bash
cd PowerfulLifts_API
```
mettez à jour votre fichier .env avec les informations de la base de données :

```
Exemple:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=powerfullifts
DB_USERNAME=root
DB_PASSWORD=
```

puis exécutez les commandes d'installation de Laravel :
```bash
composer install
php artisan migrate
php artisan serve
```
L'API est désormais fonctionnelle et la base de données prête.
Rendez vous à présent dans la partie PowerfulLifts_App :
```bash
cd PowerfulLifts_App
```
puis exécutez les commandes d'installation de React :
```bash
npm install
npm run dev
```

Vous pouvez également réinitialiser la base de données
```bash
php artisan migrate:fresh
```
et/ou la remplir avec des données factices :
```bash
php artisan migrate:fresh --seed
```