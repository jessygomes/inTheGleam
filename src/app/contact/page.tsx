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
      <section className="relative min-h-screen bg-white pt-36 lg:pt-32 pb-20 overflow-hidden flex flex-col justify-center">
        {/* Éléments décoratifs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple2 rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple3 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section titre et description */}
            <div className="text-center mb-16">
              {/* Eyebrow */}
              <span className="inline-block mb-6 text-xs font-Gudea tracking-[.35em] uppercase text-purple2 border border-purple2/40 rounded-full px-4 py-1.5">
                inthegleam
              </span>

              <h1 className="font-semibold text-blackGleam text-center text-3xl sm:text-5xl tracking-[.15em] uppercase mb-6 font-Gudea">
                <span className="font-DissolveRegular mr-1 text-5xl sm:text-7xl text-blackGleam">
                  C
                </span>
                ontactez-{" "}
                <span className="bg-gradient-to-r from-purple3 to-purple2 bg-clip-text text-transparent">
                  Nous
                </span>
              </h1>

              <p className="font-Gudea tracking-wider text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Vous avez un projet ? Besoin de conseils ?{" "}
                <span className="text-purple2 font-semibold">
                  Réponse garantie en moins de 24 heures !
                </span>
              </p>

              {/* Statistiques/Avantages rapides */}
              <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple2 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <h3 className="font-bold text-blackGleam mb-1 font-Gudea text-sm">
                    Réponse Rapide
                  </h3>
                  <p className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                    Moins de 24h
                  </p>
                </div>

                <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <h3 className="font-bold text-blackGleam mb-1 font-Gudea text-sm">
                    Conseils Gratuits
                  </h3>
                  <p className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
                    Sans engagement
                  </p>
                </div>

                <div className="rounded-xl p-5 border border-blackGleam/10 bg-blackGleam/5 hover:border-purple2/40 hover:bg-purple2/5 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <h3 className="font-bold text-blackGleam mb-1 font-Gudea text-sm">
                    Équipe Dédiée
                  </h3>
                  <p className="text-blackGleam/50 text-xs font-Gudea tracking-wide uppercase">
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
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple3 to-purple2 px-6 py-8">
                  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                      <p className="text-xs font-Gudea tracking-[.3em] uppercase text-white/50 mb-1">
                        En savoir plus ?
                      </p>
                      <h3 className="font-semibold text-white text-lg sm:text-2xl tracking-[.1em] uppercase font-Gudea">
                        Découvrez qui nous sommes
                      </h3>
                    </div>
                    <a
                      href="/a-propos"
                      className="shrink-0 inline-flex items-center gap-2 font-Gudea font-semibold text-sm bg-white text-purple2 rounded-md py-2.5 px-5 uppercase tracking-[.2em] hover:bg-white/90 transition-all duration-300 hover:scale-105"
                    >
                      Notre équipe
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flèche pour scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-blackGleam/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
