# Portfolio Angular

Portfolio moderne avec design cyberpunk/futuriste développé avec Angular.

## 🔧 Configuration EmailJS

Les clés EmailJS sont stockées dans les fichiers d'environnement pour la sécurité.

### Configuration initiale

1. **Copiez le fichier d'exemple :**
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   cp src/environments/environment.example.ts src/environments/environment.prod.ts
   ```

2. **Configurez vos clés EmailJS dans les fichiers :**
   - `src/environments/environment.ts` (développement)
   - `src/environments/environment.prod.ts` (production)

3. **Remplacez les valeurs d'exemple par vos vraies clés :**
   ```typescript
   export const environment = {
     production: false, // true pour production
     emailjs: {
       serviceId: 'votre_service_id',
       templateId: 'votre_template_id',
       publicKey: 'votre_public_key'
     }
   };
   ```

### Obtenir vos clés EmailJS

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. **Service ID** : Dashboard → Email Services → [Votre service]
3. **Template ID** : Dashboard → Email Templates → [Votre template]  
4. **Public Key** : Dashboard → Integration → Public Key

## 🚀 Installation et démarrage

```bash
npm install
ng serve
```

Application disponible sur `http://localhost:4200/`

## ✨ Fonctionnalités

- 🎨 Design cyberpunk/futuriste
- 📱 Responsive design
- 💼 Section projets détaillée
- 🛠️ Compétences techniques
- 📧 Formulaire de contact avec EmailJS
- 🎭 Animations et effets visuels

## 🛠️ Technologies

- Angular 18+
- TypeScript
- Tailwind CSS
- EmailJS
- CSS Animations

---

**Made with ❤️ by Youssef**
