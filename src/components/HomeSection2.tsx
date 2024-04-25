import Image from "next/image";
import React from "react";
import RevealEffect from "./RevealEffect/RevealEffect";

export default function HomeSection2() {
  return (
    <section className="lg:w-[60%] mx-auto">
      <div
        className="mt-8 flex items-center lg:flex-auto mx-auto title-section2"
        id="service"
      >
        <h2 className="font-Gudea uppercase text-4xl mt-4 tracking-[.15em]">
          Nos <span className="font-DissolveRegular">S</span>ervices
        </h2>
      </div>

      <article className="flex flex-wrap mx-4 md:ml-40 lg:ml-0 lg:mr-0 lg:justify-between mt-12 md:gap-8 lg:gap-3">
        <div
          className="flex flex-col lg:w-[45%]"
          aria-label="gestion de projet web"
        >
          <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
            Gestion de projet web
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Site vitrine, site e-commerce, corporate, événementiel
          </p>
        </div>

        <div className="flex flex-col lg:w-[45%]" aria-label="intégration web">
          <h3 className="font-Gudea font-semibold text-2xl">Intégration WEB</h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Intégration HTML / CSS respectueuses des standards du web
          </p>
        </div>
      </article>

      <article className="flex flex-wrap ml-4 pr-4 md:ml-40 lg:ml-0 lg:mr-0 lg:justify-between lg:mt-12  md:gap-8 lg:gap-3">
        <div className="flex flex-col lg:w-[45%]" aria-label="Web Design">
          <h3 className="font-Gudea font-semibold sm-text-purple text-2xl">
            Web Design
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Permettre aux utilisateurs de rentrer dans votre UNIVERS. Répondre
            au mieux à votre identité visuelle.
          </p>
        </div>

        <div
          className="flex flex-col md:mr-56 lg:mr-0 lg:w-[45%]"
          aria-label="Responsive Design"
        >
          <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
            Responsive Design
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Compatible sur tous les supports, tablettes & mobiles
          </p>
        </div>
      </article>

      <article className="flex flex-wrap ml-4 pr-4 md:ml-40 lg:ml-0 lg:mr-0 lg:justify-between lg:mt-12 md:gap-8 lg:gap-3">
        <div
          className="flex flex-col lg:w-[45%]"
          aria-label="Maintenance site internet"
        >
          <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
            Maintenance site internet
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Gérer la maintenance de vos sites web permet d&apos;assurer leur
            pérennité
          </p>
        </div>

        <div
          className="flex flex-col md:mr-56 lg:mr-0 lg:w-[45%]"
          aria-label="Référencement naturel"
        >
          <h3 className="font-Gudea font-semibold text-2xl">
            Référencement naturel
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Affichage sémantique des informations pour un référencement optimal
          </p>
        </div>
      </article>

      <RevealEffect>
        <div className="sm-hidden font-Gudea tracking-widest flex flex-wrap justify-center items-center gap-10 lg:gap-24 md:mt-12 lg:mt-12">
          <div className="flex flex-col gap-4 text-center">
            <Image
              className="h-16 w-16 mx-auto"
              src="/gif/com.gif"
              alt="Communication"
              width={300}
              height={300}
            />
            <p className="text-xl font-bold">Communication</p>
          </div>

          <div className="flex flex-col gap-4 text-center">
            <Image
              className="h-16 w-16 mx-auto"
              src="/gif/accord.gif"
              alt="HighFive"
              width={300}
              height={300}
            />
            <p className="text-xl font-bold">Accord</p>
          </div>

          <div className="flex flex-col gap-4 text-center ml-7 lg:ml-0">
            <Image
              className="h-16 w-16 mx-auto"
              src="/gif/conception.gif"
              alt="Construction"
              width={300}
              height={300}
            />
            <p className="text-xl font-bold">Conception</p>
          </div>

          <div className="flex flex-col gap-4 text-center ml-3 lg:ml-0">
            <Image
              className="h-16 w-16 mx-auto"
              src="/gif/livraison.gif"
              alt="Livraison"
              width={300}
              height={300}
            />
            <p className="text-xl font-bold">Livraison</p>
          </div>
        </div>
      </RevealEffect>

      {/* VERSION MOBILE : */}

      <RevealEffect>
        <div className="md:hidden lg:hidden mr-8 font-Gudea tracking-widest flex flex-wrap justify-center gap-10">
          <div className="flex flex-col text-center">
            <Image
              className="h-16 w-16 mx-auto"
              src="/gif/com.gif"
              alt="Communication"
              width={300}
              height={300}
            />
            <p className="text-xl font-bold">Communication</p>
          </div>

          <div className="flex flex-col text-center">
            <Image
              className="h-16 w-16 mx-auto"
              src="/gif/accord.gif"
              alt="HighFive"
              width={300}
              height={300}
            />
            <p className="text-xl font-bold">Accord</p>
          </div>
        </div>
      </RevealEffect>
    </section>
  );
}
