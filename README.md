# Chronopedia

Application web de frise chronologique interractive réalisée dans le cadre du pôle projet _Innovation Pédagogique_ du cursus ingénieur de _CentraleSupelec_ par : 
- Téo Lefebvre
- Arthur Remoué
- Alexis Péters
- Matthias Orbach

# À propos de l'API

Pour générer le code de l'API décrite dans le fichier `api.yaml` (nécessite d'installer java version 8 ou plus) :

```bash
java -jar swagger-codegen-cli.jar generate -i api/openapi.yaml -l nodejs-server
```

# À propos de l'application

Installer les dépendances du projet : 
```bash
npm install
```

Lancer l'application en mode test :
```
npm run dev
```