/* eslint-disable react/no-unescaped-entities */
import React from "react";
import RevealEffect from "../../components/RevealEffect/RevealEffect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Nous | inTheGleam - Experts en Développement Web",
  description:
    "Découvrez notre équipe passionnée chez inTheGleam. Développeurs web spécialisés, nous créons des solutions sur-mesure pour transformer vos idées en projets digitaux innovants.",
  keywords: [
    "inTheGleam",
    "à propos inTheGleam",
    "agence développement web",
    "équipe de développeurs web",
    "développement web sur-mesure",
    "création projets digitaux",
    "experts web et mobile",
  ],
};

export default function Propos() {
  return (
    <>
      {/* Hero Section avec gradient moderne */}
      <section className="relative min-h-screen bg-white pt-52 pb-16 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-blackGleam mb-8 tracking-wide">
              Notre Équipe
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Chez{" "}
              <span className="text-purple2 font-semibold">inTheGleam</span>,
              nous mettons un point d'honneur à travailler en interne pour
              garantir une{" "}
              <span className="text-purple2 font-semibold">
                collaboration fluide et efficace
              </span>
              .
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple2/20 max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                En tant que deux frères{" "}
                <span className="font-semibold text-purple2">
                  développeurs web passionnés
                </span>
                , nous unissons nos forces et nos spécialités pour concrétiser
                vos projets avec créativité et expertise.
                <br />
                <br />
                <span className="font-semibold text-purple2">L'un</span> se
                concentre sur le Front-End pour créer des interfaces modernes et
                intuitives, tandis que{" "}
                <span className="font-semibold text-purple2">l'autre</span>{" "}
                optimise le Back-End pour assurer la performance et la sécurité
                de vos solutions web.
                <br />
                <br />
                Ensemble, nous transformons vos idées en solutions web uniques,
                en offrant une{" "}
                <span className="font-semibold text-purple2">
                  expérience immersive
                </span>{" "}
                qui reflète vos ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section fonctionnalités modernisée */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
              Création <span className="text-purple2">Sur-Mesure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="text-purple2 font-semibold">
                Définissez votre présence en ligne
              </span>{" "}
              avec des solutions web sur-mesure. Notre expertise nous permet de
              créer des sites adaptés à vos besoins et à vos ambitions.
            </p>
          </div>

          <RevealEffect>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Diagnostic */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple2 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Diagnostic
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Chaque projet commence par un{" "}
                  <span className="font-semibold text-purple2">
                    diagnostic approfondi
                  </span>{" "}
                  de vos besoins et objectifs. Cette analyse nous permet de
                  concevoir des{" "}
                  <span className="font-semibold text-purple2">
                    solutions personnalisées
                  </span>{" "}
                  parfaitement adaptées.
                </p>
              </div>

              {/* Créativité */}
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
                  Créativité
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Grâce à notre expertise en{" "}
                  <span className="font-semibold text-purple2">
                    design graphique
                  </span>{" "}
                  et développement, nous concevons des sites web uniques qui
                  reflètent l'identité de votre marque et séduisent vos
                  visiteurs.
                </p>
              </div>

              {/* Flexibilité */}
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Flexibilité
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Avec une approche agile, nous adaptons les fonctionnalités à
                  chaque étape. Cette{" "}
                  <span className="font-semibold text-purple2">
                    flexibilité
                  </span>{" "}
                  vous assure une solution évolutive alignée sur vos besoins.
                </p>
              </div>

              {/* Accessibilité */}
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
                  Accessibilité
                </h3>
                <p className="text-gray-600 leading-relaxed font-Gudea">
                  Nous garantissons une{" "}
                  <span className="font-semibold text-purple2">
                    accessibilité optimale
                  </span>{" "}
                  sur tous les appareils. Votre site sera toujours fluide et
                  performant, quelle que soit la plateforme utilisée.
                </p>
              </div>
            </div>
          </RevealEffect>

          {/* Call to action modernisé */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple3 to-purple2 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-Gudea">
                Prêt à concrétiser vos idées ?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-Gudea leading-relaxed">
                Discutons de votre projet et découvrez comment notre équipe peut
                transformer vos ambitions en réalité digitale sur-mesure.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-blackGleam font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-Gudea"
              >
                Parlons de votre projet
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
    </>
  );
}
