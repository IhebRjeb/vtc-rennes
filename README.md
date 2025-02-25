# README - Site Web VTC Rennes

## 1. Introduction

Ce projet consiste en le développement d'un site web permettant la présentation et la réservation de services de VTC à Rennes. Le site offrira plusieurs fonctionnalités, notamment la consultation des services, la réservation en ligne, le calcul des tarifs et la gestion des avis clients.

## 2. Fonctionnalités Principales

### 2.1 Page d'Accueil

- Présentation de l'entreprise et des services.
- Mise en avant des chauffeurs et des véhicules disponibles.
- Boutons d'appel à l'action pour réserver ou calculer un tarif.
- Accès rapide aux sections principales : services, avis, calcul de tarif, contact.

### 2.2 Page des Services

- Description des différents services de VTC : transport de luxe, transport en groupe, service à la demande, etc.
- Affichage des tarifs approximatifs avec un calculateur interactif.

### 2.3 Calcul du Tarif

- Formulaire permettant de renseigner l'adresse de départ et d'arrivée.
- Sélection du type de véhicule souhaité.
- Affichage instantané du prix estimé basé sur la distance et le temps de trajet.

### 2.4 Page des Avis Clients

- Formulaire pour laisser un avis (note sur 5 étoiles + commentaire libre).
- Possibilité d'ajouter des photos ou vidéos.
- Affichage des avis existants avec tri par pertinence, date ou note.
- Modération des avis par l'administrateur avant publication.
- Réponses possibles aux avis par l'entreprise.

### 2.5 Page de Contact

- Formulaire pour contacter l'entreprise (nom, email, téléphone, sujet, message).
- Affichage des coordonnées complètes de l'entreprise.
- Carte interactive avec localisation Google Maps.
- Horaires de disponibilité des services.

### 2.6 Optimisation SEO

- Utilisation de balises ,  et ,  pour le référencement.
- Mots-clés pertinents pour le domaine des VTC à Rennes.
- URL optimisées et contenu structurant incluant un blog d'actualité (optionnel).
- Optimisation des images avec balises alt.
- Inscription sur Google My Business pour le SEO local.

### 2.7 Espace Administratif

- Gestion des réservations : suivi des paiements et des trajets.
- Modération des avis clients.
- Gestion des contenus et services affichés sur le site.

## 3. Technologies Utilisées

- **Frontend** : HTML, CSS, JavaScript (Framework possible : React, NextJs).
- **Backend** : Node.js avec Express.
- **Base de données** : MongoDB.
- **API de cartographie** : Google Maps API pour l'affichage de la carte et le calcul d'itinéraires.
- **SEO & Analytics** : Google Analytics, Google Search Console.

## 4. Installation et Configuration

1. Cloner le dépôt du projet :
   ```sh
   git clone https://github.com/votre-repo/site-vtc-rennes.git
   cd site-vtc-rennes
   ```
2. Installer les dépendances :
   ```sh
   npm install  # Pour un projet Node.js
   pip install -r requirements.txt  # Pour un projet Python
   ```
3. Configurer la base de données dans `.env`.
4. Lancer le serveur :
   ```sh
   npm start  # Pour un projet Node.js
   python manage.py runserver  # Pour un projet Django
   ```
5. Accéder au site via `http://localhost:3000` (ou l'URL définie).

## 5. Contribution

Les contributions sont les bienvenues ! Merci de respecter les conventions de codage et de proposer des Pull Requests claires.

## 6. Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

