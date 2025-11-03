---
title: Scrivener - Espaces réservés (Placeholders)
description: Les espaces réservés permettent d'insérer des informations dans votre texte, même si ces informations ne sont pas encore connues ou sont susceptibles de changer. Voici une liste des espaces réservés disponibles dans Scrivener.
---

## Modèles (Template Placeholders)

| **Espace réservé**            | **Description**                                                                                  |
|-------------------------------|--------------------------------------------------------------------------------------------------|
| `<$template_firstName>`       | Prénom de l'utilisateur tel que défini dans Contacts.                                           |
| `<$template_lastName>`        | Nom de famille de l'utilisateur tel que défini dans Contacts.                                   |
| `<$template_fullName>`        | Nom complet de l'utilisateur, tiré de Contacts ou des paramètres du compte.                     |
| `<$template_initial>`         | Initiale du prénom de l'utilisateur.                                                           |
| `<$template_street>`          | Rue de l'utilisateur, tirée de Contacts.                                                       |
| `<$template_city>`            | Ville de l'utilisateur, tirée de Contacts.                                                     |
| `<$template_state>`           | État ou département de l'utilisateur, tiré de Contacts.                                        |
| `<$template_ZIP>`             | Code postal de l'utilisateur, tiré de Contacts.                                                |
| `<$template_country>`         | Pays de l'utilisateur, tiré de Contacts.                                                       |
| `<$template_phoneNumber>`     | Numéro de téléphone de l'utilisateur, tiré de Contacts.                                        |
| `<$template_email>`           | Adresse e-mail de l'utilisateur, tirée de Contacts.                                            |
| `<$template_projectName>`     | Titre du projet, dérivé du nom du fichier du projet.                                            |

---

## Écriture de scénario (Scriptwriting Placeholders)

| **Espace réservé**          | **Description**                                                                                                   |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|
| `<$mediaPlaybackTime>`      | Remplacé par le temps de lecture actuel d'un fichier multimédia. Peut inclure un format personnalisé : `HH:mm:ss`. |

---

## Compilation (Compile Placeholders)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$p>`                      | Numéro de la page actuelle.                                                                                              |
| `<$p-r>`, `<$P-R>`          | Numéro de la page en chiffres romains (minuscules ou majuscules).                                                        |
| `<$pagecount>`              | Nombre total de pages.                                                                                                   |

---

## En-têtes et pieds de page (Headers and Footers)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$pageGroupTitle>`         | Remplacé par le titre du document suivant la dernière rupture de page.                                                   |
| `<$pageGroupParentTitle>`   | Remplacé par le titre du dossier parent du document.                                                                      |

---

## Commentaires, notes de bas de page et mise en page (Comments, Footnotes and Layout)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$--ENDNOTES-->`           | Spécifie où placer les notes de fin.                                                                                      |
| `<$--COMMENTS-->`           | Spécifie où placer les commentaires liés.                                                                                 |
| `<$BLANK_PAGE>`             | Indique de laisser une page vierge.                                                                                       |

---

## Variables de document (Document Variables)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$title>`                  | Titre du document.                                                                                                        |
| `<$parenttitle>`            | Titre du dossier parent.                                                                                                  |
| `<$position>`               | Position du document dans son conteneur parent.                                                                           |
| `<$createdDate>`            | Date de création du document. Format personnalisable : `HH:mm:ss`.                                                        |

---

## Date et heure actuelles (Current Date and Time)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$date>`                   | Date actuelle au format court. Format personnalisable : `HH:mm:ss`.                                                       |
| `<$time>`                   | Heure actuelle au format court.                                                                                           |
| `<$year>`                   | Année actuelle.                                                                                                           |

---

## Informations utilisateur et projet (User and Project Information)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$surname>`                | Nom de famille de l'utilisateur.                                                                                         |
| `<$forename>`               | Prénom de l'utilisateur.                                                                                                 |
| `<$projecttitle>`           | Titre du projet.                                                                                                         |

---

## Statistiques (Statistics)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$wc>`                     | Nombre total de mots.                                                                                                    |
| `<$cc>`                     | Nombre total de caractères.                                                                                              |

---

## Numérotation automatique (Auto-Numbering)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$n>`                      | Numérotation arabe incrémentale.                                                                                         |
| `<$r>`                      | Numérotation romaine en minuscules.                                                                                      |

---

## Images et texte (Images and Text)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$img:imgName>`            | Insère une image par nom.                                                                                                |
| `<$include>`                | Insère le texte d'un document externe ou interne.                                                                        |

---

## Divers (Miscellaneous)

| **Espace réservé**          | **Description**                                                                                                           |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `<$toc>`                    | Génère automatiquement une table des matières pour les formats d'ebook.                                                 |
| `<$ebook_start>`            | Définit le point de départ pour la lecture Kindle.                                                                       |
