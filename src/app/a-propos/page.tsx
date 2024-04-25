import React from "react";
import RevealEffect from "../../components/RevealEffect/RevealEffect";

export default function Propos() {
  return (
    <section className="mt-[8rem] mb-[4rem] lg:mt-[12rem]">
      <div className="flex flex-col justify-center md:mt-10 lg:mt-16">
        <h3 className="font-Gudea text-center text-4xl lg:text-5xl tracking-widest uppercase sm-content-s3">
          Notre équipe
        </h3>

        <p className="font-Gudea text-m lg:text-lg text-justify lg:mt-10 md:mt-4 md:px-10 lg:px-44 2xl:px-72 mb-2 sm-content-s3">
          Chez nous,{" "}
          <span className="font-extrabold text-purple2">
            tout se déroule en interne
          </span>
          , favorisant une collaboration fluide et efficace. Nous sommes deux
          frères et{" "}
          <span className="font-extrabold text-purple2">
            développeurs web passionnés et créatifs.
          </span>{" "}
          Nous travaillons main dans la main pour concrétiser vos projets et
          chacun de nous possède ses propres spécialités ce qui permet de vous
          fournir un service complet.
          <br></br> <br></br> Jessy est orienté Front-End afin de vous apporter
          la meilleure interface en fonction de vos besoins et de
          l&apos;expérience utilisateur. Puis, Lenny est orienté Back-End et
          permet un fonctionnement optimal de votre site web et de sa sécurité.{" "}
          <br></br> <br></br>
          Notre but est de transformer vos idées en solutions web remarquables,
          en offrant
          <span className="font-extrabold text-purple2">
            {" "}
            une expérience immersive pour vous et vos utilisateurs.
          </span>
        </p>
      </div>

      <div className="font-Gudea flex flex-col mt-10">
        <h1 className="text-2xl lg:text-4xl text-center font-bold uppercase mx-auto tracking-[.15em]">
          Création sur-mesure !
        </h1>

        <p className="text-base text-center mt-5 tracking-[.15em] p-2">
          <span className="text-purple2">Sculptez votre présence</span> en ligne
          avec des solutions personnalisées.
        </p>
      </div>
      <RevealEffect>
        <div className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 px-4  mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 sm-text-purple text-2xl">
              Diagnostic
            </h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Nous débutons chaque projet par une analyse de vos besoins et de
              vos objectifs. Cette étape nous permet de comprendre votre vision
              et de concevoir des solutions sur mesure qui répondent
              parfaitement à vos exigences.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold text-2xl">Créativité</h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Nos compétences graphique et de développement nous permettent de
              créer des sites web uniques et personnalisés. Chaque détail est
              soigneusement conçu pour refléter l&apos;identité de votre marque.
            </p>
          </div>
        </div>
        <div className="type-site flex flex-wrap justify-center md:text-center lg:text-left lg:p-0 px-4 md:mt-6 lg:mt-8 md:gap-6 lg:gap-36 bloc-section2">
          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold sm-text-purple text-2xl">
              Flexibilité
            </h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Grâce à notre approche agile, nous sommes en mesure d&apos;adapter
              et de modifier rapidement les fonctionnalités tout au long du
              processus de développement. Cette flexibilité garantit que votre
              site évolue en fonction de vos besoins et des tendances du marché.
            </p>
          </div>

          <div className="flex flex-col lg:w-1/4">
            <h3 className="font-Gudea font-semibold lg:text-purple2 text-2xl">
              Accessibilité
            </h3>
            <p className="font-Gudea text-m text-justify lg:mt-4 content-section2">
              Nous assurons une compatibilité et une optimisation maximale sur
              tous les appareils, qu&apos;il s&apos;agisse de smartphones, de
              tablettes ou d&apos;ordinateurs de bureau. Votre site sera
              accessible à tous, où que vos visiteurs se trouvent.
            </p>
          </div>
        </div>
      </RevealEffect>
    </section>
  );
}
