import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création de Site Vitrine Professionnel | inTheGleam",
  description:
    "Valorisez votre entreprise avec un site vitrine sur-mesure. Découvrez les avantages d'une présence en ligne professionnelle pour attirer vos clients et renforcer votre image de marque.",
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

        <p className="font-Gudea font-bold text-purple2 text-xl mb-10 lg:p-0 p-2 md:mt-8 lg:mt-10 uppercase text-center tracking-[.15em]">
          Transformez votre présence en ligne en un outil puissant pour attirer
          vos clients et développer votre activité.
        </p>
      </section>

      <h2 className="lg:p-0 pl-5 pr-5 text-center mb-8 text-2xl lg:text-4xl uppercase mx-auto tracking-[.15em]">
        <span className="font-DissolveRegular">R</span>éalisation
      </h2>

      <section className="grid md:grid-cols-2 items-center gap-12 mb-16 px-8 md:px-0 lg:w-[60%] mx-auto">
        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden rounded-sm transition-all md:min-h-fit">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={"/images/blockparty.png"}
              width={500}
              height={500}
              alt="Blockparty"
              className="flex justify-center items-center h-full w-full bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2">
              <Link target="_blank" href={"https://www.blockpartyfestival.fr/"}>
                <p className="line-clamp-2 text-black font-Gudea uppercase hover:text-purple2">
                  BlockParty Festival
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden rounded-sm transition-all md:min-h-fit">
          <div className="relative h-full w-full overflow-hidden ">
            <Image
              src={"/images/battement.png"}
              width={500}
              height={500}
              alt="Blockparty"
              className="flex justify-center items-center h-full w-full bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2">
              <Link
                target="_blank"
                href={"https://www.faiseurdebattements.com/"}
              >
                <p className="line-clamp-2 text-black font-Gudea uppercase hover:text-purple2">
                  Faiseur de battement
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden rounded-sm transition-all md:min-h-fit">
          <div className="relative h-full w-full overflow-hidden ">
            <Image
              src={"/images/flash.png"}
              width={500}
              height={500}
              alt="Blockparty"
              className="flex justify-center items-center h-full w-full bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2">
              <Link target="_blank" href={"https://www.flash-records.fr/"}>
                <p className="line-clamp-2 text-black font-Gudea uppercase hover:text-purple2">
                  Flash
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
