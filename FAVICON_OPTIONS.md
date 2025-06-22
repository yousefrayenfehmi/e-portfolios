# Options de Favicon - Portfolio Yousef

Votre portfolio dispose maintenant de plusieurs options de favicon personnalisées au style cyberpunk/futuriste.

## Favicons Disponibles

### 1. **favicon.svg** (Par défaut) - Style Hexagonal Tech
- Design géométrique moderne avec hexagone
- Dégradé cyan-violet avec effets de lueur
- Lettre "Y" au centre

### 2. **favicon-circuit.svg** - Style Circuit Électronique
- Lignes de circuit colorées
- Points lumineux aux intersections
- Esthétique de carte mère

### 3. **favicon-glitch.svg** - Style Glitch Cyberpunk
- Effet de distorsion numérique
- Barres de glitch colorées
- Aspect futuriste déstructuré

### 4. **favicon-minimal.svg** - Style Minimal Moderne
- Design épuré et professionnel
- Cercle simple avec accent
- Version plus discrète

## Comment Changer de Favicon

Pour utiliser un favicon différent, modifiez cette ligne dans `src/index.html` :

```html
<link rel="icon" type="image/svg+xml" href="favicon.svg">
```

Remplacez `favicon.svg` par :
- `favicon-circuit.svg` pour le style circuit
- `favicon-glitch.svg` pour l'effet glitch
- `favicon-minimal.svg` pour le style minimal

## Génération ICO (Optionnel)

Si vous voulez convertir un SVG en ICO pour une compatibilité maximale :

1. Visitez un convertisseur en ligne comme [favicon.io](https://favicon.io/favicon-converter/)
2. Uploadez votre SVG préféré
3. Téléchargez le fichier ICO généré
4. Remplacez `public/favicon.ico`

## Personnalisation

Vous pouvez modifier les couleurs dans les fichiers SVG :
- **Cyan** : `#00f5ff`
- **Violet** : `#8a2be2` 
- **Rose** : `#ff006e`
- **Fond** : `#0a0a0a`

## Test

Pour tester vos favicons :
1. Videz le cache du navigateur
2. Rechargez la page
3. Vérifiez l'onglet du navigateur
4. Testez sur mobile et desktop 