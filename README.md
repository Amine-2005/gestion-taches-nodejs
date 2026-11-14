# Gestion de tâches – Node.js, Express, MySQL

API REST simple avec une interface web pour gérer des tâches (CRUD).

## Technologies
Node.js, Express, MySQL (mysql2), HTML, CSS, JavaScript (fetch)

## Installation
1. Installer Node.js et MySQL.
2. Importer la base de données : `mysql -u root -p < database.sql`
3. Installer les dépendances : `npm install`
4. Lancer le serveur : `npm start`
5. Ouvrir http://localhost:3000

## Routes de l'API
| Méthode | Route | Description |
|---|---|---|
| GET | /api/taches | Liste des tâches |
| POST | /api/taches | Ajouter une tâche |
| PUT | /api/taches/:id | Marquer terminée / non terminée |
| DELETE | /api/taches/:id | Supprimer une tâche |
