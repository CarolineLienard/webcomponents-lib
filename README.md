# Design System avec Web-components
Dans ce projet, je créer une ébauche d'un design system de web-components. C'est un premier essai et il pourra être amélioré avec d'avantage d'expérience sur cette technologie.

## Challenge 🔨
Il faut créer un petit design system en utilisant uniquement web-components. **Les frameworks JS comme React, Vue ou Angular ne sont pas autorisés.**

Il est possible d'utiliser quelques librairies ou outils si l'on est en mesure d'expliquer nos choix par rapport aux objectifs fixés.

Il faudra : 
- Se rapprocher le plus possible du design fourni
- Avoir une bonne qualité de code
- Travailler sur l'accessibilité des composants

## Screenshots 📸
![](./public/screen1.jpg)
![](./public/screen2.jpg)

## Technologies utilisées 💡

- **Lit** : C'est la librairie la plus utilisée pour créer des web-components. Elle est même recommandée dans [la documentation officielle de web-components](https://www.webcomponents.org/introduction). Il y a beaucoup d'intérêts à l'utiliser pour ne citer que quelques avantages : un code moins verbeux, c'est à dire moins de ligne de code, moins de répétitions, plus clair, plus simple à écrire et à maintenir. Le rendu est efficace et ultra rapide, ce qui est très pertinent lorque l'on développe un design system ( car beaucoup d'itérations ). Une meilleure réactivité, les composants se mettent à jour rapidement aux changements des props...

- **TypeScript** : apporte un niveau de sécurité, de cohérence, de documentation et de maintenabilité supplémentaires qui sont particulièrement importants pour le développement d'un design system. Cela permet de créer un design system robuste, facile à utiliser et à adopter par d'autres équipes de développement.

- **ViteJS** : outil de build, je l'ai utilisé ici pour créer rapidement un environnement lit/typescript performant et un déploiement simple sur Vercel. C'est un outil très populaire et fiable, on pourrait tout à fait s'imaginer l'utiliser pour un projet à plus grande échelle surtout si il n'y a pas de devops dans l'équipe. Vite a beaucoup d'avantages notamment le rechargement à chaud qui permet de voir instantanément les modifications apportées au design system, permet de créer facilement un environnement de prod et de dev, lit friendly, intégration fluide de typescript...

## Comment lancer le projet ⚙️

Télécharger le fichier ZIP du projet

Dézipper le projet et ouvrir le dossier avec votre éditeur de code

Ouvrir le terminal, vérifier que vous êtes bien dans le dossier du projet et lancer la commande : 
```bash
npm install
```

Puis, une fois l'installation terminée, lancer la commande : 
```bash
npm run dev
```

Vous pouvez maintenant accéder au projet en local avec l'url : 
```bash
http://localhost:5173/
```

## Auteur ✒️
- Caroline Lienard (https://github.com/CarolineLienard)