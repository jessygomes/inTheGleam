/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import RevealEffect from "./RevealEffect/RevealEffect";

export default function HomeSection2() {
  return (
    <section className="sm:lg-[90%] lg:w-[60%] mx-auto">
      <div
        className="mt-8 flex items-center sm:justify-center lg:flex-auto mx-auto title-section2"
        id="service"
      >
        <h2 className="font-Gudea uppercase text-4xl mt-4 tracking-[.15em]">
          Nos <span className="font-DissolveRegular">S</span>ervices
        </h2>
      </div>

      <article className="flex flex-wrap sm:justify-center mx-4 lg:ml-0 lg:mr-0 lg:justify-between mt-12 md:gap-8 lg:gap-3">
        <div
          className="flex flex-col lg:w-[45%]"
          aria-label="gestion de projet web"
        >
          <h3 className="font-Gudea font-semibold sm:text-center lg:text-left lg:text-purple2 sm-text-purple text-2xl">
            Gestion de projet web
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Nous vous accompagnons dans la création de vos projets web : sites
            vitrines, e-commerce, corporate, ou événementiels. De l'idée à la
            mise en ligne, nous assurons une gestion complète et personnalisée
            pour garantir votre succès en ligne.
          </p>
        </div>

        <div className="flex flex-col lg:w-[45%]" aria-label="intégration web">
          <h3 className="font-Gudea font-semibold sm:text-center lg:text-left text-2xl">
            Intégration WEB
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Nous réalisons des intégrations HTML/CSS respectueuses des standards
            W3C. Offrez à vos utilisateurs une expérience fluide et optimisée
            sur tous les navigateurs modernes grâce à un code propre et
            performant.
          </p>
        </div>
      </article>

      <article className="flex flex-wrap ml-4 pr-4 sm:justify-center sm:mt-8 lg:mx-0 lg:justify-between lg:mt-12 md:gap-8 lg:gap-3">
        <div
          className="flex flex-col sm:text-center lg:text-left lg:w-[45%]"
          aria-label="Web Design"
        >
          <h3 className="font-Gudea sm:text-center lg:text-left font-semibold sm-text-purple text-2xl">
            Web Design
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Créez une expérience immersive pour vos utilisateurs en reflétant
            votre identité visuelle. Notre web design est conçu pour captiver
            vos visiteurs, renforcer votre image de marque et améliorer
            l’engagement.
          </p>
        </div>

        <div
          className="flex flex-col justify-center lg:mr-0 lg:w-[45%]"
          aria-label="Responsive Design"
        >
          <h3 className="font-Gudea font-semibold sm:text-center lg:text-left lg:text-purple2 text-2xl">
            Responsive Design
          </h3>
          <p className="font-Gudea text-m sm:text-center lg:text-left lg:text-lg lg:mt-4 content-section2">
            Nos designs sont optimisés pour tous les appareils : ordinateurs,
            tablettes et mobiles. Votre site s'adapte automatiquement pour
            offrir une expérience utilisateur idéale, quelle que soit la taille
            de l'écran.
          </p>
        </div>
      </article>

      <article className="flex flex-wrap ml-4 pr-4 sm:justify-center sm:mt-8 lg:mx-0 lg:justify-between lg:mt-12 md:gap-8 lg:gap-3">
        <div
          className="flex flex-col lg:w-[45%]"
          aria-label="Maintenance site internet"
        >
          <h3 className="font-Gudea font-semibold sm:text-center lg:text-left lg:text-purple2 sm-text-purple text-2xl">
            Maintenance site internet
          </h3>
          <p className="font-Gudea text-m sm:text-center lg:text-left lg:text-lg lg:mt-4 content-section2">
            Assurez la longévité et la sécurité de votre site web grâce à une
            maintenance régulière. Nous veillons à optimiser les performances,
            corriger les bugs, et garantir la compatibilité avec les nouvelles
            technologies.
          </p>
        </div>

        <div
          className="flex flex-col lg:mr-0 lg:w-[45%]"
          aria-label="Référencement naturel"
        >
          <h3 className="font-Gudea sm:text-center lg:text-left font-semibold text-2xl">
            Référencement naturel
          </h3>
          <p className="font-Gudea text-m lg:text-lg lg:mt-4 content-section2">
            Optimisez la visibilité de votre site grâce à un référencement
            naturel efficace. Nous structurons vos contenus avec des balises
            sémantiques et des mots-clés stratégiques pour améliorer votre
            positionnement dans les moteurs de recherche.
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
