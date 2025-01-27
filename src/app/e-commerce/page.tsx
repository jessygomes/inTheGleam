import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création de Site E-Commerce Professionnel | inTheGleam",
  description:
    "Boostez votre chiffre d'affaires avec un site e-commerce sur-mesure. Découvrez les avantages d'une boutique en ligne moderne et performante pour étendre votre portée géographique et séduire vos clients.",
  keywords: [
    "site e-commerce",
    "création boutique en ligne",
    "développement e-commerce",
    "site de vente en ligne",
    "solutions e-commerce sur-mesure",
    "agence e-commerce",
    "inTheGleam e-commerce",
  ],
  openGraph: {
    title: "Création de Site E-Commerce Professionnel | inTheGleam",
    description:
      "Boostez votre chiffre d'affaires avec un site e-commerce sur-mesure. Découvrez les avantages d'une boutique en ligne moderne et performante pour étendre votre portée géographique et séduire vos clients.",
    url: "https://www.inthegleam.com/ecommerce",
    type: "website",
    images: [
      {
        url: "https://www.inthegleam.com/images/ecommerce-og-image.jpg",
        alt: "Création de Site E-Commerce Professionnel - inTheGleam",
        width: 1200,
        height: 630,
      },
    ],
  },
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

          <p className="hidden sm:block text-lg text-left mt-5 tracking-[.15em] w-2/3 mx-auto">
            Aujourd’hui, près d’un Français sur deux effectue des achats en
            ligne. Le e-commerce est un levier puissant pour augmenter votre
            chiffre d’affaires et élargir votre zone géographique. <br />{" "}
            Profitez de cette opportunité pour toucher un public plus large et
            booster votre croissance.
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
              Votre site e-commerce doit refléter votre image de marque tout en
              respectant votre identité visuelle. Nous vous accompagnons dans le
              développement d’un design unique et professionnel qui vous
              démarquera sur le marché et renforcera votre crédibilité.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold text-2xl">
              Paiement Sécurisé
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Intégrez des solutions de paiement sécurisées pour garantir une
              expérience utilisateur fluide et protéger les données sensibles de
              vos clients. Nous vous proposons des systèmes fiables qui
              facilitent la gestion de votre site tout en renforçant la
              confiance de vos utilisateurs.
            </p>
          </div>
        </article>

        <article className="type-site flex flex-wrap justify-center md:text-center lg:text-left md:px-6 md:mt-5 px-4 lg:p-2 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold  sm-text-purple text-2xl">
              Gestion simple
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Simplifiez la gestion de votre boutique en ligne avec des outils
              intuitifs, accessibles même sans compétences techniques. Prenez
              facilement le contrôle de votre site e-commerce pour gérer vos
              produits, commandes et clients en toute autonomie.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
              Multi-langue
            </h3>
            <p className="font-Gudea text-m lg:text-lg text-justify md:text-center lg:text-justify lg:mt-4 content-section2">
              Ouvrez votre boutique en ligne au marché international grâce à un
              site multilingue. La traduction professionnelle de votre contenu
              vous permettra de toucher de nouveaux clients et d’augmenter vos
              ventes de manière significative.
            </p>
          </div>
        </article>

        <p className="lg:w-2/3 lg:mx-auto font-Gudea font-bold text-purple2 text-base lg:text-xl mb-10 lg:p-0 px-4 md:mt-6 lg:mt-10 uppercase lg:text-center tracking-[.15em]">
          Transformez votre présence en ligne en une opportunité pour attirer de
          nouveaux clients et développer votre activité.
        </p>
      </section>

      <h2 className="p-8 text-center mb-8 text-2xl lg:text-4xl text-white nostech uppercase mx-auto tracking-[.15em]">
        <span className="font-DissolveRegular">R</span>éalisation
      </h2>

      <section className="grid md:grid-cols-2 items-center justify-center gap-12 mb-16 px-8 md:px-0 lg:w-[60%] mx-auto">
        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden transition-all md:min-h-fit rounded-md">
          <div className="relative lg:h-[200px] lg:w-[400px] overflow-hidden">
            <Image
              src={"/images/bellenippe.png"}
              width={500}
              height={500}
              alt="Belle Nippe"
              className="flex justify-center items-center h-full w-full rounded-md bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1">
            <div className="flex flex-col gap-2 w-full">
              <Link target="_blank" href={"https://www.bellenippe.fr/"}>
                <p className="line-clamp-2 text-white font-Gudea uppercase bg-blackGleam p-1 text-center hover:bg-purple duration-200 rounded-md">
                  www.bellenippe.fr
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-fit w-full max-w-fit flex-col gap-1 overflow-hidden transition-all md:min-h-fit rounded-md">
          <div className="relative lg:h-[200px] lg:w-[400px] overflow-hidden">
            <Image
              src={"/images/phonedumonde.png"}
              width={500}
              height={500}
              alt="Belle Nippe"
              className="flex justify-center items-center h-full w-full rounded-md bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>

          <div className="flex flex-row justify-between rounded-b-sm px-2 py-1 w-full">
            <div className="flex flex-col gap-2 w-full">
              <Link target="_blank" href={"https://www.telephonedumonde.com/"}>
                <p className="w-full line-clamp-2 text-white font-Gudea uppercase bg-blackGleam p-1 text-center hover:bg-purple duration-200 rounded-md">
                  www.telephonedumonde.com
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
