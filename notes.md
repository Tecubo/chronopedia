# Chronopedia


## Finalité du projet 

- Alexis : utilisé dans les lycées/collèges/primaires (aussi utilisable par les élèves)
- Matthias : plutôt parler aux enseignants pour aider le prof à faire des frises pour ses élèves (donner un lien vers une frise à des élèves) : enseignant créer la frise et la donne aux élèves
- Téo : devoir numérique (juste pour apprendre)


## Fonctionnalités de l'application 

1. Création et lecture de frises
    - Ajouter des dates / périodes (appelé événement) → fenêtre modale de création
        - Titre
        - Date
        - Importance : un entier naturel qui caractérise l’importance de l’événement par rapport aux autres sur la frise (peut être proposé une liste de “moins important” à “très important”)
        - Zone géographique : qu’on peut observer sur une carte interactive
        - Fiche : avec du texte pouvant être mise en forme (taille de police, gras, italique, souligné, couleurs de texte et surlignage etc…), des images, des liens que l’on créer avec un petit éditeur de texte en ligne (basé sur le markdown)
    - Fusionner des frises
        - Fusionner des frises en pondérant l’importance des événements des frises avec un coefficient d’importance pour chaque frise (même principe que pour les événements)
        - Les frises fusionnées doivent pouvoir se synchroniser lorsqu’une frise utilisée pour la fusion est modifiée
    - Mode lecture de frises
        - Zoomer sur la frise : en zoomant, on rétrécit la période visible sur l'écran et donc on affiche plus d’événements “moins importants”
        - Enlève tous les boutons d’édition en mode lecture pour une lisibilité plus importante
        - Pour des frises fusionnées, possibilités d’afficher que les frises voulus (avec une case à cocher par frises)
        - Présenter évènements par évènements (juste les fiches)
        - Pouvoir imprimer des frises

2. Stockage et partage de frises
    - Stocker ses frises sur un drive
        - Création d’un compte utilisateur avec des identifiants de connections (sécurisé avec double authentification pourquoi pas)
        - Organiser ses frises dans des dossiers sur un drive pour chaque utilisateur
    - Partager et collaborer sur des frises
        - Partager des frises à d’autres utilisateurs et donner un rôle à chacun tels que : lecteur (peut seulement voir la frise), commentateur (peut ajouter des commentaires), éditeur (peut modifier la frise)
        - Modifier la visibilité de chaque frise : publique (elle sera référencée et des personnes non invités pourront la lire) ou privée
        - Faire des fork de frises publiques (à la manière de Github)

3. Rechercher des frises chronologiques
    - Par mots clés / thèmes (moteur de recherche)
    - Par période
    - Par zones géographiques
        - Ajout d’une carte interactive

4. Mode de révision
    - Questionnaires sur des évènements (pour réviser une frise, auto-évaluation pour s’entraîner)
    - Possibilité examen en ligne (ou imprimer des frises incomplètes)


## Idée mise en place interface

Lorsqu’on ouvre une fiche d’événement, léger liseré en haut ou on voit la frise. Lorsqu’on passe sa souris dessus, le liseré s’agrandit et on peut choisir un événement dans la frise pour ouvrir directement la fiche de cet événement. Lorsqu’une fiche est ouverte, des flèches apparaissent sur les côtés pour passer de la fiche d’un événement à l’autre chronologiquement.


## Déroulé du projet

Faire une première version fonctionnelle de l'application
Proposer un atelier avec une classe où on utilise l’application 


## Notes pôle projet

mail : pole.innopeda_edtech@gmail.com
