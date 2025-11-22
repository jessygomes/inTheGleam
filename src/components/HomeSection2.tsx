/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import RevealEffect from "./RevealEffect/RevealEffect";

export default function HomeSection2() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="service">
          <h2 className="text-4xl md:text-5xl font-bold text-blackGleam mb-6 tracking-wide font-Gudea">
            Nos <span className="font-DissolveRegular text-purple2">S</span>
            ervices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions web complètes et sur-mesure pour accompagner votre
            réussite digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Gestion de projet web */}
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
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Gestion de projet web
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Nous vous accompagnons dans la création de vos projets web : sites
              vitrines, e-commerce, corporate, ou événementiels. De l'idée à la
              mise en ligne, nous assurons une gestion complète et personnalisée
              pour garantir votre succès en ligne.
            </p>
          </div>

          {/* Intégration WEB */}
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Intégration WEB
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Nous réalisons des intégrations HTML/CSS respectueuses des
              standards W3C. Offrez à vos utilisateurs une expérience fluide et
              optimisée sur tous les navigateurs modernes grâce à un code propre
              et performant.
            </p>
          </div>

          {/* Web Design */}
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
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Web Design
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Créez une expérience immersive pour vos utilisateurs en reflétant
              votre identité visuelle. Notre web design est conçu pour captiver
              vos visiteurs, renforcer votre image de marque et améliorer
              l'engagement.
            </p>
          </div>

          {/* Responsive Design */}
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
              Responsive Design
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Nos designs sont optimisés pour tous les appareils : ordinateurs,
              tablettes et mobiles. Votre site s'adapte automatiquement pour
              offrir une expérience utilisateur idéale, quelle que soit la
              taille de l'écran.
            </p>
          </div>

          {/* Maintenance site internet */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple3 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Maintenance site internet
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Assurez la longévité et la sécurité de votre site web grâce à une
              maintenance régulière. Nous veillons à optimiser les performances,
              corriger les bugs, et garantir la compatibilité avec les nouvelles
              technologies.
            </p>
          </div>

          {/* Référencement naturel */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple2/20">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blackGleam mb-4 font-Gudea">
              Référencement naturel
            </h3>
            <p className="text-gray-600 leading-relaxed font-Gudea">
              Optimisez la visibilité de votre site grâce à un référencement
              naturel efficace. Nous structurons vos contenus avec des balises
              sémantiques et des mots-clés stratégiques pour améliorer votre
              positionnement dans les moteurs de recherche.
            </p>
          </div>
        </div>

        {/* Section processus modernisée */}
        <RevealEffect>
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blackGleam mb-4 font-Gudea">
                Notre <span className="text-purple2">Processus</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Une méthode éprouvée en 4 étapes pour garantir le succès de
                votre projet
              </p>
            </div>

            {/* Version desktop/tablette */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="group text-center">
                <div className="w-20 h-20 mx-auto mb-6  flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-12 w-12"
                    src="/gif/com.gif"
                    alt="Communication"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="text-xl font-bold text-blackGleam mb-2 font-Gudea">
                  Communication
                </h4>
                <p className="text-gray-600 text-sm">
                  Échange et analyse de vos besoins
                </p>
              </div>

              <div className="group text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-12 w-12"
                    src="/gif/accord.gif"
                    alt="Accord"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="text-xl font-bold text-blackGleam mb-2 font-Gudea">
                  Accord
                </h4>
                <p className="text-gray-600 text-sm">
                  Validation du devis et planning
                </p>
              </div>

              <div className="group text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-12 w-12"
                    src="/gif/conception.gif"
                    alt="Conception"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="text-xl font-bold text-blackGleam mb-2 font-Gudea">
                  Conception
                </h4>
                <p className="text-gray-600 text-sm">
                  Design et développement de votre projet
                </p>
              </div>

              <div className="group text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-12 w-12"
                    src="/gif/livraison.gif"
                    alt="Livraison"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="text-xl font-bold text-blackGleam mb-2 font-Gudea">
                  Livraison
                </h4>
                <p className="text-gray-600 text-sm">
                  Mise en ligne et formation
                </p>
              </div>
            </div>

            {/* Version mobile */}
            <div className="md:hidden grid grid-cols-2 gap-8 max-w-sm mx-auto">
              <div className="group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple2 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-10 w-10"
                    src="/gif/com.gif"
                    alt="Communication"
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="text-lg font-bold text-blackGleam font-Gudea">
                  Communication
                </h4>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-10 w-10"
                    src="/gif/accord.gif"
                    alt="Accord"
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="text-lg font-bold text-blackGleam font-Gudea">
                  Accord
                </h4>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-10 w-10"
                    src="/gif/conception.gif"
                    alt="Conception"
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="text-lg font-bold text-blackGleam font-Gudea">
                  Conception
                </h4>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    className="h-10 w-10"
                    src="/gif/livraison.gif"
                    alt="Livraison"
                    width={40}
                    height={40}
                  />
                </div>
                <h4 className="text-lg font-bold text-blackGleam font-Gudea">
                  Livraison
                </h4>
              </div>
            </div>
          </div>
        </RevealEffect>
      </div>
    </section>
  );
}
