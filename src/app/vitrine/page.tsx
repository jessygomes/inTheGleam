import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création de Site Vitrine Professionnel | inTheGleam",
  description:
    "Valorisez votre entreprise avec un site vitrine sur-mesure. Découvrez les avantages d'une présence en ligne professionnelle pour attirer vos clients et renforcer votre image de marque.",
  keywords: [
    "site vitrine",
    "création site vitrine",
    "site vitrine professionnel",
    "développement site vitrine",
    "présence en ligne professionnelle",
    "image de marque en ligne",
    "site sur-mesure entreprise",
  ],
};

export default function Vitrine() {
  return (
    <>
      <section className="mt-[8rem] lg:mt-[12rem]">
        <article className="font-Gudea flex flex-col mt-10">
          <h1 className="text-2xl  lg:text-4xl text-center font-bold uppercase mx-auto tracking-[.20em]">
            Création de <span className="font-DissolveRegular">s</span>ite{" "}
            <span className="font-DissolveRegular">V</span>itrine
          </h1>

          <p className="hidden sm:block text-lg text-left  mt-5 tracking-[.15em] w-2/3 mx-auto">
            Un site vitrine est un outil essentiel pour valoriser vos
            compétences et établir une connexion authentique avec vos clients.{" "}
            <span className="text-purple">
              Il met en avant votre expertise, renforce votre crédibilité et
              favorise une communication efficace avec votre audience.
            </span>
          </p>

          <p className="hide-lg text-base m-3 text-justify mt-4 tracking-[.15em]">
            Un site vitrine est un outil essentiel pour valoriser vos
            compétences et établir une connexion authentique avec vos clients.{" "}
            <span className="text-purple2">
              {" "}
              Il met en avant votre expertise, renforce votre crédibilité et
              favorise une communication efficace avec votre audience.
            </span>
          </p>
        </article>

        <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 md:px-6 px-4 mt-8 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
              Design
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Votre site vitrine est le reflet de votre identité visuelle et de
              vos valeurs. Nous concevons des designs uniques et personnalisés
              pour renforcer votre image de marque et séduire vos visiteurs.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold text-2xl">Simplicité</h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Nous créons des sites vitrine intuitifs où les visiteurs peuvent
              trouver rapidement et facilement les informations dont ils ont
              besoin. Offrez une navigation claire et optimisée pour garantir
              une expérience utilisateur de qualité.
            </p>
          </div>
        </article>

        <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left md:px-6 md:mt-5 px-4 lg:p-2 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold  sm-text-purple text-2xl">
              Compatibilité
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Nos sites vitrines sont entièrement responsives, garantissant une
              accessibilité optimale sur tous les appareils : ordinateurs,
              tablettes et mobiles. Une organisation adaptée améliore
              l’expérience utilisateur et renforce votre présence en ligne.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
              Rapidité
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Offrez à vos visiteurs un site vitrine rapide et performant. La
              vitesse de chargement améliore l’expérience utilisateur, réduit
              les taux de rebond et renforce votre référencement sur les moteurs
              de recherche.
            </p>
          </div>
        </article>

        <p className="lg:w-2/3 lg:mx-auto font-Gudea font-bold text-purple2 text-base lg:text-xl mb-10 lg:p-0 px-4 md:mt-6 lg:mt-10 uppercase lg:text-center tracking-[.15em]">
          Transformez votre présence en ligne en un outil puissant pour attirer
          vos clients et développer votre activité.
        </p>
      </section>

      <h2 className="p-8 text-center mb-8 text-2xl lg:text-4xl text-white nostech uppercase mx-auto tracking-[.15em]">
        <span className="font-DissolveRegular">R</span>éalisation
      </h2>

      <section className="grid md:grid-cols-2 items-center gap-12 mb-16 px-8 md:px-0 lg:w-[60%] mx-auto">
        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden transition-all md:min-h-fit rounded-md">
          <div className="relative lg:h-[200px] lg:w-[400px] overflow-hidden">
            <Image
              src={"/images/nocap.png"}
              width={500}
              height={500}
              alt="Blockparty"
              className="flex justify-center items-center h-full w-full rounded-md bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2 w-full">
              <Link target="_blank" href={"https://www.nocapdscvr.com/"}>
                <p className="line-clamp-2 text-white font-Gudea uppercase bg-blackGleam p-1 text-center hover:bg-purple duration-200 rounded-md">
                  www.nocapdscvr.com
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden transition-all md:min-h-fit rounded-md">
          <div className="relative lg:h-[200px] lg:w-[400px] overflow-hidden">
            <Image
              src={"/images/blockparty.png"}
              width={500}
              height={500}
              alt="Blockparty"
              className="flex justify-center items-center h-full w-full rounded-md bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2 w-full">
              <Link target="_blank" href={"https://www.blockpartyfestival.fr/"}>
                <p className="line-clamp-2 text-white font-Gudea uppercase bg-blackGleam p-1 text-center hover:bg-purple duration-200 rounded-md">
                  www.blockpartyfestival.fr
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden transition-all md:min-h-fit rounded-md">
          <div className="relative lg:h-[200px] lg:w-[400px] overflow-hidden">
            <Image
              src={"/images/battement.png"}
              width={500}
              height={500}
              alt="faiseur de battement site web"
              className="flex justify-center items-center h-full w-full rounded-md bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2 w-full">
              <Link
                target="_blank"
                href={"https://www.faiseurdebattements.com/"}
              >
                <p className="line-clamp-2 text-white font-Gudea uppercase bg-blackGleam p-1 text-center hover:bg-purple duration-200 rounded-md">
                  www.faiseurdebattements.com
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden transition-all md:min-h-fit rounded-md">
          <div className="relative lg:h-[200px] lg:w-[400px] overflow-hidden">
            <Image
              src={"/images/flash.png"}
              width={500}
              height={500}
              alt="flash"
              className="flex justify-center items-center h-full w-full rounded-md bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2 w-full">
              <Link target="_blank" href={"https://www.flash-records.fr/"}>
                <p className="line-clamp-2 text-white font-Gudea uppercase bg-blackGleam p-1 text-center hover:bg-purple duration-200 rounded-md">
                  www.flash-records.fr
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
