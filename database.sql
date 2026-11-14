CREATE DATABASE IF NOT EXISTS taches_db;
USE taches_db;

CREATE TABLE IF NOT EXISTS taches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titre VARCHAR(255) NOT NULL,
  terminee BOOLEAN DEFAULT FALSE,
  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO taches (titre) VALUES ('Apprendre Node.js'), ('Créer mon premier projet');
