# Application de Gestion de Contacts en ASP.NET

## Description
Ce projet est une application web de gestion de contacts réalisée en ASP.NET, développée pour améliorer les compétences en ASP.NET à la demande de notre professeur. L'application permet d'ajouter, modifier, supprimer des contacts et de marquer certains contacts comme favoris.

## Fonctionnalités
- **Ajouter des contacts** : Permet d'ajouter de nouveaux contacts avec des informations telles que le nom, l'email, et le numéro de téléphone.
- **Modifier des contacts** : Permet de modifier les informations existantes d'un contact.
- **Supprimer des contacts** : Permet de supprimer un contact de la liste.
- **Marquer comme favori** : Permet de marquer certains contacts comme favoris pour un accès rapide.

## Prérequis
- Visual Studio 2022 ou une version plus récente
- .NET 6.0 ou une version plus récente
- SQL Server ou une base de données compatible

## Installation
1. **Cloner le dépôt** :
    ```sh
    git clone https://github.com/abdouDev22/projet_Asp.net.git
    cd votre-repo
    ```

2. **Configurer la base de données** :
   - Ouvrez le fichier `appsettings.json` et configurez la chaîne de connexion à votre base de données.
   - Exécutez les migrations pour créer les tables nécessaires :
     ```sh
     dotnet ef database update
     ```

3. **Exécuter l'application** :
    ```sh
    dotnet run
    ```
    L'application sera disponible à l'adresse `https://localhost:5001`.

## Utilisation
- Accédez à la page d'accueil pour voir la liste des contacts.
- Utilisez le formulaire pour ajouter un nouveau contact.
- Cliquez sur le bouton "Modifier" pour mettre à jour les informations d'un contact existant.
- Cliquez sur le bouton "Supprimer" pour retirer un contact de la liste.
- Utilisez l'icône de favori pour marquer un contact comme favori.

## Technologies utilisées
- ASP.NET Core
- Entity Framework Core
- SQL Server
- SCSS

## Contribution
Les contributions sont les bienvenues ! Veuillez ouvrir une issue pour discuter de ce que vous souhaitez changer.

## Auteurs
- Abdourahman Abdillahi Abdi - [abdouDev22](https://github.com/abdouDev22)
