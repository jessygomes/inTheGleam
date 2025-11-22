import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-nous | inTheGleam - Experts en Développement Web",
  description:
    "Discutez de vos projets avec l'équipe inTheGleam. Bénéficiez de conseils personnalisés et obtenez une réponse rapide sous 24 heures. Transformez vos idées en solutions digitales.",
  keywords: [
    "contact inTheGleam",
    "agence développement web",
    "experts web et mobile",
    "demander un devis web",
    "contact agence web",
    "développement web sur-mesure",
    "inTheGleam contact",
  ],
};

export default function Contact() {
  return (
    <>
      {/* Hero Section moderne */}
      <section className="relative min-h-screen bg-white pt-52 pb-16 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section titre et description */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-blackGleam mb-8 tracking-wide font-Gudea">
                Contactez-<span className="text-purple2">Nous</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Vous avez un projet ? Besoin de conseils ?
                <br />
                <span className="text-purple2 font-semibold">
                  Réponse garantie en moins de 24 heures !
                </span>
              </p>

              {/* Statistiques/Avantages rapides */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple2/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple2 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-blackGleam mb-2 font-Gudea">
                    Réponse Rapide
                  </h3>
                  <p className="text-gray-600 text-sm font-Gudea">
                    Moins de 24h
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple2/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <h3 className="font-bold text-blackGleam mb-2 font-Gudea">
                    Conseils Gratuits
                  </h3>
                  <p className="text-gray-600 text-sm font-Gudea">
                    Sans engagement
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple2/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-blackGleam mb-2 font-Gudea">
                    Équipe Dédiée
                  </h3>
                  <p className="text-gray-600 text-sm font-Gudea">
                    Experts à l&apos;écoute
                  </p>
                </div>
              </div>
            </div>

            {/* Section informations de contact */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Pourquoi nous choisir */}
                <div className="bg-gradient-to-br from-purple2 to-purple3 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-Gudea">
                    Pourquoi nous choisir ?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold font-Gudea">
                          Expertise technique
                        </h4>
                        <p className="text-white/80 text-sm font-Gudea">
                          Technologies modernes et performantes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold font-Gudea">
                          Accompagnement personnalisé
                        </h4>
                        <p className="text-white/80 text-sm font-Gudea">
                          Suivi de A à Z de votre projet
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold font-Gudea">
                          Délais respectés
                        </h4>
                        <p className="text-white/80 text-sm font-Gudea">
                          Livraison dans les temps convenus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations de contact */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-blackGleam mb-6 font-Gudea">
                    Moyens de contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple2/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-purple2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blackGleam font-Gudea">
                          Email
                        </h4>
                        <p className="text-gray-600 font-Gudea">
                          contact@inthegleam.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple2/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-purple2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blackGleam font-Gudea">
                          Disponibilité
                        </h4>
                        <p className="text-gray-600 font-Gudea">
                          Lun - Ven : 9h00 - 18h00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple2/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-purple2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blackGleam font-Gudea">
                          Zone d&apos;intervention
                        </h4>
                        <p className="text-gray-600 font-Gudea">
                          France & International
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to action additionnel */}
                <div className="bg-gradient-to-r from-gray-900 to-blackGleam rounded-3xl p-8 text-white text-center">
                  <h3 className="text-xl font-bold mb-4 font-Gudea">
                    Besoin d&apos;une réponse immédiate ?
                  </h3>
                  <p className="text-gray-300 mb-6 font-Gudea">
                    Consultez notre FAQ ou nos réalisations pour en savoir plus
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* <a
                      href="/nos-realisations"
                      className="bg-white text-blackGleam font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 font-Gudea"
                    >
                      Nos réalisations
                    </a> */}
                    <a
                      href="/a-propos"
                      className="border-2 border-white text-white font-bold py-3 px-6 rounded-xl hover:bg-white hover:text-blackGleam transition-all duration-300 font-Gudea"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
