#!/bin/bash

# Script de vérification SEO
# Usage: ./check-seo.sh

echo "🔍 Vérification SEO pour inTheGleam"
echo "=================================="

# Vérifier que le site est accessible
echo "📡 Test de connectivité..."
if curl -s -o /dev/null -w "%{http_code}" https://www.inthegleam.com | grep -q "200"; then
    echo "✅ Site accessible"
else
    echo "❌ Site non accessible"
    exit 1
fi

# Vérifier le sitemap
echo "🗺️  Test du sitemap..."
if curl -s -o /dev/null -w "%{http_code}" https://www.inthegleam.com/sitemap.xml | grep -q "200"; then
    echo "✅ Sitemap accessible"
else
    echo "❌ Sitemap non accessible"
fi

# Vérifier robots.txt
echo "🤖 Test de robots.txt..."
if curl -s -o /dev/null -w "%{http_code}" https://www.inthegleam.com/robots.txt | grep -q "200"; then
    echo "✅ Robots.txt accessible"
else
    echo "❌ Robots.txt non accessible"
fi

# Vérifier manifest.json
echo "📱 Test du manifest..."
if curl -s -o /dev/null -w "%{http_code}" https://www.inthegleam.com/manifest.webmanifest | grep -q "200"; then
    echo "✅ Manifest accessible"
else
    echo "❌ Manifest non accessible"
fi

# Vérifier les métadonnées de base
echo "🏷️  Test des métadonnées..."
TITLE=$(curl -s https://www.inthegleam.com | grep -o '<title>.*</title>' | head -1)
if [[ -n "$TITLE" ]]; then
    echo "✅ Title trouvé: $TITLE"
else
    echo "❌ Title non trouvé"
fi

DESCRIPTION=$(curl -s https://www.inthegleam.com | grep -o 'name="description" content="[^"]*"' | head -1)
if [[ -n "$DESCRIPTION" ]]; then
    echo "✅ Meta description trouvée"
else
    echo "❌ Meta description non trouvée"
fi

# Suggestions d'amélioration
echo ""
echo "🎯 Prochaines étapes recommandées:"
echo "1. Soumettre le sitemap dans Google Search Console"
echo "2. Configurer Google Analytics et vérifier le tracking"
echo "3. Optimiser les images avec des formats WebP/AVIF"
echo "4. Ajouter du contenu régulier (blog, actualités)"
echo "5. Surveiller les Core Web Vitals"
echo ""
echo "📊 Outils de test recommandés:"
echo "- PageSpeed Insights: https://pagespeed.web.dev/"
echo "- Rich Results Test: https://search.google.com/test/rich-results"
echo "- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly"