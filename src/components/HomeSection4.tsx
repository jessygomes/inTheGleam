/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function HomeSection4() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
            Nos <span className="text-purple2">Atouts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi nos clients nous font confiance pour leurs
            projets web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tarif avantageux */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
            <div className="w-16 h-16 bg-gradient-to-br from-purple2 to-purple3 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Tarif Avantageux
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              En tant que Freelancers, nous offrons des tarifs compétitifs
              adaptés aux besoins des entreprises et des particuliers. Profitez
              de solutions web de qualité professionnelle à des prix bien
              inférieurs à ceux des agences traditionnelles.
            </p>
          </div>

          {/* Design personnalisé */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Design Personnalisé
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Chaque projet est unique ! Nous concevons des designs sur mesure
              qui reflètent vos goûts et valorisent votre identité visuelle.
              Transformez vos idées en un site web moderne, élégant et
              parfaitement adapté à vos besoins.
            </p>
          </div>

          {/* Support rapide */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Support Rapide
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Nous privilégions une communication claire et continue à chaque
              étape de votre projet : avant, pendant et après la réalisation.
              Notre support réactif vous garantit une réponse sous 24 heures
              pour toute question ou demande.
            </p>
          </div>

          {/* Pure code */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Pure Code
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              En tant que développeurs experts, nous utilisons un code pur et
              optimisé, offrant une flexibilité totale dans la création de votre
              site web. Vous bénéficiez d'une solution sur-mesure, performante
              et évolutive, sans limitations liées aux outils standards.
            </p>
          </div>
        </div>

        {/* Call to action modernisé */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple3 to-purple2 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-Gudea">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-Gudea leading-relaxed">
              Contactez-nous dès maintenant pour discuter de vos besoins et
              découvrir comment nous pouvons transformer vos idées en réalité
              digitale.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-blackGleam font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-Gudea"
            >
              Obtenir un devis gratuit
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
