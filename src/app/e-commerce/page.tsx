import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site E-Commerce | inTheGleam",
  description:
    "Le site e-commerce : Quels rôles et avantages pour votre entreprise ?",
};

export default function Ecommerce() {
  return (
    <>
      <section className="mt-[8rem] lg:mt-[12rem]">
        <article className="font-Gudea flex flex-col text-blackGleam">
          <h1 className="lg:p-0 pl-5 pr-5 text-center text-2xl lg:text-4xl font-bold uppercase mx-auto tracking-[.15em]">
            Création de <span className="font-DissolveRegular">s</span>ite{" "}
            <span className="font-DissolveRegular">e</span>-commerce
          </h1>

          <p className="hidden sm:block text-lg text-center mt-5 tracking-[.15em]">
            Presqu&apos;un français sur deux commande sur internet, ce qui
            permet <br /> aux entreprises d&apos;augmenter le chiffre
            d&apos;affaires. <br />
            Le e-Commerce offre la possibilité d&apos;étendre votre zone
            géographique.
          </p>

          <p className="hide-lg px-2 text-base m-2 text-justify mt-4 tracking-[.15em]">
            <span className="text-purple2">
              Presqu&apos;un français sur deux
            </span>{" "}
            commande sur internet, ce qui permet aux entreprises{" "}
            <span className="text-purple2">
              d&apos;augmenter le chiffre d&apos;affaires.{" "}
            </span>
            Le e-Commerce offre la possibilité{" "}
            <span className="text-purple2">
              d&apos;étendre votre zone géographique.
            </span>
          </p>
        </article>

        <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left md:px-6 px-4 lg:p-2 mt-8 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
              Design
            </h3>
            <p className="font-Gudea text-m lg:text-lg md:text-center lg:text-justify text-justify lg:mt-4 content-section2">
              Le site e-Commerce doit correspondre à votre image en gardant
              l&apos;identité visuelle que vous avez établi. Nous pouvons vous
              aider à la développer afin de vous affirmer sur le marché.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold text-2xl">
              Paiement Sécurisé
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Solutions de paiement pour assurer le bon fonctionnement et la
              gestion de votre site.
            </p>
          </div>
        </article>

        <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left md:px-6 md:mt-5 px-4 lg:p-2 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold  sm-text-purple text-2xl">
              Gestion simple
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Mise en place de votre gestion sans connaissances préalables en
              développement.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
              Multi-langue
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Etendre la vente à l&apos;international grâce à la traduction de
              votre site et donc une chance d&apos;augmenter vos ventes.
            </p>
          </div>
        </article>

        <p className="font-Gudea font-bold text-purple2 text-xl mb-10 lg:p-0 p-2 md:mt-6 lg:mt-10 uppercase text-center tracking-[.15em]">
          Votre présence sur le web doit vous servir à générer du contact !
        </p>
      </section>

      <h2 className="lg:p-0 pl-5 pr-5 text-center mb-8 text-2xl lg:text-4xl uppercase mx-auto tracking-[.15em]">
        <span className="font-DissolveRegular">R</span>éalisation
      </h2>

      <section className="grid md:grid-cols-2 items-center gap-12 mb-16 px-8 md:px-0 lg:w-[60%] mx-auto">
        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden rounded-sm transition-all md:min-h-fit">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={"/images/bellenippe.png"}
              width={500}
              height={500}
              alt="Belle Nippe"
              className="flex justify-center items-center h-full w-full bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2">
              <Link target="_blank" href={"https://www.bellenippe.fr/"}>
                <p className="line-clamp-2 text-black font-Gudea uppercase hover:text-purple2">
                  Belle Nippe
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
