# Guide de déploiement sur Vercel

## 🚀 Étapes de déploiement

### 1. Pousser sur GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Connecter à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez votre repository GitHub
3. Importez votre projet

### 3. Configurer les variables d'environnement sur Vercel

Dans le dashboard Vercel, allez dans **Settings** → **Environment Variables** et ajoutez :

| Variable | Value | Description |
|----------|--------|-------------|
| `EMAILJS_SERVICE_ID` | `service_lk6ldwe` | Votre Service ID EmailJS |
| `EMAILJS_TEMPLATE_ID` | `template_fs88ytr` | Votre Template ID EmailJS |
| `EMAILJS_PUBLIC_KEY` | `B9Y4cqffouaVO2SfU` | Votre Public Key EmailJS |

### 4. Redéployer
Cliquez sur **Redeploy** pour que les nouvelles variables prennent effet.

## ⚠️ Sécurité

- ✅ Les vraies clés sont dans les variables d'environnement Vercel
- ✅ Les fichiers de code contiennent des valeurs par défaut
- ✅ Les clés sensibles ne sont pas exposées dans le code source

## 🔧 Variables d'environnement locales

Pour le développement local, vous pouvez soit :
1. Utiliser les valeurs par défaut dans les fichiers
2. Créer un fichier `.env.local` (non-commitable)

Exemple de `.env.local` :
```
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id  
EMAILJS_PUBLIC_KEY=your_public_key
```

## 📋 Checklist de déploiement

- [ ] Code poussé sur GitHub
- [ ] Variables d'environnement configurées sur Vercel
- [ ] Déploiement réussi
- [ ] Test du formulaire de contact en production 