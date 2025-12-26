# 🚀 Site de Compte à Rebours

![License MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Super-Linter](https://github.com/Y-Picot/countdown-site/actions/workflows/super_linter.yml/badge.svg)

Template de site web moderne pour afficher un compte à rebours avant le lancement d'un projet ou d'un site web.

## ✨ Fonctionnalités

- ⏰ **Timer en temps réel** : Compte à rebours avec jours, heures, minutes, secondes
- 📱 **Design responsive** : Adapté mobile, tablette et desktop  
- 🎨 **Interface moderne** : Effets visuels et animations CSS
- 🔗 **Liens sociaux** : Boutons vers réseaux professionnels
- ⚙️ **Personnalisable** : Logo, couleurs, date, textes modifiables

## 🚀 Utilisation

1. **Téléchargez** ou clonez ce repository
2. **Ouvrez** `index.html` dans votre navigateur
3. **Personnalisez** selon vos besoins (voir section ci-dessous)

## ⚙️ Personnalisation Rapide

### Changer la date du compte à rebours
```javascript
// Dans countdown.js, ligne 2
const countdownDate = new Date("Dec 31, 2028 23:59:59").getTime();
```

### Modifier les informations
```html
<!-- Dans index.html -->
<h1>Votre Entreprise</h1>
<h2>Votre Nom</h2>
```

### Remplacer le logo
Remplacez `assets/logo-exemple.svg` par votre logo (SVG recommandé)

### Changer l'arrière-plan  
Remplacez `assets/carriza-maiquez.webp` par votre image

## 📁 Structure

```
├── index.html          # Page principale
├── style.css           # Styles CSS
├── countdown.js        # Script du timer
└── assets/            # Ressources (logo, icônes, images)
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Ouvrir des **issues** pour signaler des bugs
- Proposer des **pull requests** pour des améliorations
- Partager vos idées dans les **discussions**

<details>
<summary>📚 Documentation détaillée</summary>

### Technologies utilisées
- **HTML5** : Structure sémantique
- **CSS3** : Flexbox, animations, variables CSS
- **JavaScript Vanilla** : Timer dynamique

### Compatibilité navigateurs
- Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

### Options de déploiement
- **Hébergement statique** : Upload direct sur serveur
- **GitHub Pages** : Activation dans paramètres du repository  
- **Netlify/Vercel** : Déploiement automatique depuis GitHub

### Personnalisation avancée

#### Variables CSS
```css
:root {
  --primary-color: #007bff;
  --accent-color: #28a745;
  --text-color: #ffffff;
}
```

#### Responsive breakpoints
- Mobile : 320px - 768px
- Tablette : 768px - 1024px
- Desktop : 1024px+

#### Structure complète
```
countdown-site/
├── index.html
├── style.css  
├── countdown.js
├── README.md
├── LICENSE
├── .gitignore
└── assets/
    ├── logo-exemple.svg
    ├── carriza-maiquez.webp
    ├── social-linkedin.svg
    ├── social-twitter.svg
    ├── social-github.svg
    └── social-malt.svg
```

</details>

---

## 📄 Licence

Licence MIT - voir [LICENSE](LICENSE) pour les détails.

## 👤 Auteur

**Y-Picot** - [GitHub](https://github.com/Y-Picot)

---

⭐ Projet utile ? N'hésitez pas à lui donner une étoile !
