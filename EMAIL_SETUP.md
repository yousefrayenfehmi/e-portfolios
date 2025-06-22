# Configuration EmailJS pour le Formulaire de Contact

## 📧 Étapes de Configuration

### 1. Créer un compte EmailJS
- Rendez-vous sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit (jusqu'à 200 emails/mois)

### 2. Ajouter un service email
- Dans le dashboard, allez dans **"Email Services"**
- Cliquez sur **"Add New Service"**
- Choisissez votre provider (Gmail, Outlook, Yahoo, etc.)
- Suivez les instructions pour connecter votre compte email
- Notez le **Service ID** généré

### 3. Créer un template d'email
- Allez dans **"Email Templates"**
- Cliquez sur **"Create New Template"**
- Configurez votre template avec ces variables :

```html
Nouveau message de contact depuis votre portfolio !

De: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

- Sauvegardez et notez le **Template ID**

### 4. Récupérer votre Public Key
- Allez dans **"Account"** > **"General"**
- Copiez votre **Public Key**

### 5. Configurer l'application
Modifiez le fichier `src/app/config/email.config.ts` :

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_xxxxxxxx', // Votre Service ID
  TEMPLATE_ID: 'template_xxxxxxxx', // Votre Template ID  
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxxx' // Votre Public Key
};
```

### 6. Tester le formulaire
- Lancez l'application : `ng serve`
- Allez sur la section Contact
- Remplissez et envoyez le formulaire
- Vérifiez votre boîte email

## 🔧 Variables du Template

Les variables disponibles dans votre template EmailJS :

- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur  
- `{{message}}` - Message du formulaire
- `{{to_name}}` - Votre nom (défini dans le service)

## 🚀 Test de Production

Pour tester en production, assurez-vous que :
- Votre domaine est autorisé dans les paramètres EmailJS
- Les CORS sont configurés correctement
- Vos clés sont bien définies dans le fichier de config

## 📞 Support

En cas de problème :
- Consultez la [documentation EmailJS](https://www.emailjs.com/docs/)
- Vérifiez les logs de la console du navigateur
- Testez d'abord avec le playground EmailJS 