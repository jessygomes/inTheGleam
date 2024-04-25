import React from "react";

export default function Vitrine() {
  return (
    <section className="mt-[8rem] lg:mt-[12rem]">
      <article className="font-Gudea flex flex-col mt-10">
        <h1 className="text-2xl  lg:text-4xl text-center font-bold uppercase mx-auto tracking-[.20em]">
          Création de <span className="font-DissolveRegular">s</span>ite{" "}
          <span className="font-DissolveRegular">V</span>itrine
        </h1>

        <p className="hidden sm:block text-lg text-center mt-5 tracking-[.15em]">
          Ce moyen de Communication permet de mettre en valeur vos compétences
          et <br /> d&apos;établir un rapport plus personnel avec vos clients.
        </p>

        <p className="hide-lg text-base m-3 text-justify mt-4 tracking-[.15em]">
          Ce moyen de Communication permet de mettre en{" "}
          <span className="text-purple2">valeur vos compétences</span> et
          d&apos;établir un rapport plus personnel avec vos clients.
        </p>
      </article>

      <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 md:px-6 px-4 mt-8 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
        <div className="flex flex-col lg:w-1/4">
          <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
            Design
          </h3>
          <p className="font-Gudea text-m lg:text-lg text-justify lg:mt-4 content-section2">
            Votre site vitrine doit correspondre à votre image en gardant
            l&apos;identité visuelle que vous avez établie.
          </p>
        </div>

        <div className="flex flex-col lg:w-1/4">
          <h3 className="font-Gudea font-semibold text-2xl">Simplicité</h3>
          <p className="font-Gudea text-m lg:text-lg text-justify lg:mt-4 content-section2">
            L&apos;utilisateur doit trouver les données ou les informations
            rapidement & facilement.
          </p>
        </div>
      </article>

      <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 md:px-6 px-4 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
        <div className="flex flex-col lg:w-1/4">
          <h3 className="font-Gudea font-semibold  sm-text-purple text-2xl">
            Compatibilité
          </h3>
          <p className="font-Gudea text-m lg:text-lg text-justify lg:mt-4 content-section2">
            Le site vitrine doit être responsive : il doit être accessible sur
            mobiles, tablettes & ordinateurs avec une organisation adaptée.
          </p>
        </div>

        <div className="flex flex-col lg:w-1/4">
          <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
            Rapidité
          </h3>
          <p className="font-Gudea text-m lg:text-lg text-justify lg:mt-4 content-section2">
            La rapidité est un élément de confort & de satisfaction auprès de
            vos utilisateurs et bénéfique pour votre référencement
          </p>
        </div>
      </article>

      <p className="font-Gudea font-bold text-purple2 text-xl mb-10 lg:p-0 p-2 md:mt-8 lg:mt-10 uppercase text-center tracking-[.15em]">
        Votre présence sur le web doit vous servir à générer du contact !
      </p>
    </section>
  );
}
