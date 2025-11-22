import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Nos Réalisations | inTheGleam - Portfolio Développement Web",
  description:
    "Découvrez nos projets web et mobiles réalisés. Portfolio de sites vitrines, e-commerce et applications web développés par notre équipe d'experts chez inTheGleam.",
  keywords: [
    "portfolio inTheGleam",
    "réalisations web",
    "projets développement web",
    "exemples sites web",
    "références inTheGleam",
    "portfolio développeur web",
    "projets e-commerce",
    "sites vitrines réalisés",
  ],
  openGraph: {
    title: "Nos Réalisations | inTheGleam - Portfolio Développement Web",
    description:
      "Découvrez nos projets web et mobiles réalisés. Portfolio de sites vitrines, e-commerce et applications web développés par notre équipe d'experts.",
    images: [
      {
        url: "/logos/LogoPNG_inTheGleam_Black.png",
        width: 1200,
        height: 630,
        alt: "Portfolio inTheGleam",
      },
    ],
  },
  alternates: {
    canonical: "https://www.inthegleam.com/nos-realisations",
  },
};

export default function NosRealisations() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Nos <span className="text-gray-600">Réalisations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets récents et laissez-vous
              inspirer par nos créations sur mesure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vous pouvez ajouter vos projets ici */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Projets à venir</h3>
              <p className="text-gray-600">
                Cette section sera bientôt enrichie avec nos dernières
                réalisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
