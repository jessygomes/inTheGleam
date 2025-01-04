/* eslint-disable react/no-unescaped-entities */
import React from "react";
import RevealEffect from "../../components/RevealEffect/RevealEffect";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Nous | inTheGleam - Experts en Développement Web",
  description:
    "Découvrez notre équipe passionnée chez inTheGleam. Développeurs web spécialisés, nous créons des solutions sur-mesure pour transformer vos idées en projets digitaux innovants.",
};

export default function Propos() {
  return (
    <section className="mt-[8rem] mb-[4rem] lg:mt-[12rem]">
      <div className="flex flex-col justify-center md:mt-10 lg:mt-16">
        <h3 className="font-Gudea text-center text-4xl lg:text-5xl tracking-widest uppercase sm-content-s3">
          Notre équipe
        </h3>

        <p className="font-Gudea text-m lg:text-lg text-justify lg:mt-10 md:mt-4 md:px-10 lg:px-44 2xl:px-72 mb-2 sm-content-s3">
          Chez <span className="font-extrabold text-purple2">inTheGleam</span>,
          nous mettons un point d'honneur à travailler en interne pour garantir
          une{" "}
          <span className="font-extrabold text-purple2">
            collaboration fluide et efficace
          </span>
          . En tant que deux frères{" "}
          <span className="font-extrabold text-purple2">
            développeurs web passionnés
          </span>
          , nous unissons nos forces et nos spécialités pour concrétiser vos
          projets avec créativité et expertise.
          <br />
          <br />
          <span className="font-extrabold text-purple2">L'un</span> se concentre
          sur le Front-End pour créer des interfaces modernes et intuitives,
          tandis que{" "}
          <span className="font-extrabold text-purple2">L'autre</span> optimise
          le Back-End pour assurer la performance et la sécurité de vos
          solutions web.
          <br />
          <br />
          Ensemble, nous transformons vos idées en solutions web uniques, en
          offrant une{" "}
          <span className="font-extrabold text-purple2">
            expérience immersive
          </span>{" "}
          qui reflète vos ambitions.
        </p>
      </div>

      <div className="font-Gudea flex flex-col mt-10 ">
        <h1 className="text-2xl lg:text-4xl text-center font-bold uppercase mx-auto tracking-[.15em]">
          Création sur-mesure !
        </h1>

        <p className="text-base text-center mt-5 tracking-[.15em] p-2 w-2/3 mx-auto">
          <span className="text-purple2">
            Définissez votre présence en ligne
          </span>{" "}
          avec des solutions web sur-mesure. Notre expertise nous permet de
          créer des sites adaptés à vos besoins et à vos ambitions.
        </p>
      </div>
      <RevealEffect>
        <div className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 px-4  mt-8 md:gap-6 md:px-10 lg:px-0 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
              Diagnostic
            </h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Chaque projet commence par un{" "}
              <span className="font-extrabold text-purple2">
                diagnostic approfondi
              </span>{" "}
              de vos besoins et objectifs. Cette analyse nous permet de
              comprendre votre vision, de cibler vos priorités et de concevoir
              des{" "}
              <span className="font-extrabold text-purple2">
                solutions personnalisées
              </span>{" "}
              parfaitement adaptées à vos attentes.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold text-2xl">Créativité</h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Grâce à notre expertise en{" "}
              <span className="font-extrabold text-purple2">
                design graphique
              </span>{" "}
              et en développement, nous concevons des sites web uniques qui
              reflètent fidèlement l’identité de votre marque. Chaque élément
              est pensé pour séduire vos visiteurs et renforcer votre image de
              marque.
            </p>
          </div>
        </div>
        <div className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 px-4 md:mt-6 lg:mt-8 md:gap-6 md:px-10 lg:px-0 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold sm-text-purple text-2xl">
              Flexibilité
            </h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Avec une approche agile et flexible, nous adaptons et modifions
              les fonctionnalités de votre site à chaque étape du développement.
              Cette{" "}
              <span className="font-extrabold text-purple2">flexibilité</span>{" "}
              vous assure une solution web évolutive, alignée sur vos besoins et
              les tendances du marché.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
              Accessibilité
            </h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Nous garantissons une{" "}
              <span className="font-extrabold text-purple2">
                accessibilité optimale
              </span>{" "}
              et une compatibilité parfaite sur tous les appareils :
              smartphones, tablettes et ordinateurs. Votre site sera toujours
              fluide, performant et accessible, quelle que soit la plateforme
              utilisée par vos visiteurs.
            </p>
          </div>
        </div>
      </RevealEffect>
    </section>
  );
}
