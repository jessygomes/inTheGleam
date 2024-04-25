import Image from "next/image";
import React from "react";

export default function HomeSection3() {
  return (
    <section className="flex flex-col">
      <article className="bg-[#080808] text-white shadow-2xl w-full pb-12">
        <h3 className="font-DissolveRegular text-center text-4xl lg:text-5xl tracking-widest uppercase mt-6 lg:mt-10 sm-content-s3">
          Le monde digital
        </h3>

        <p className="lg:w-[70%] mx-auto font-Gudea text-m mt-2 sm-content-s3 md:pl-10 md:pr-10 lg:mt-10 2xl:w-[80%]">
          Votre présence sur internet est devenu indispensable dans ce monde qui
          se digitalise de plus en plus chaque jour. Se réinventer, se
          transformer, se digitaliser afin de répondre aux besoins, aux
          exigences des clients et aux contraintes du marché.
        </p>
        <p className="lg:w-[70%] mx-auto font-Gudea text-m mt-2 sm-content-s3 md:pl-10 md:pr-10 lg:mt-5 2xl:w-[80%]">
          <span className="font-light">inTheGleam</span> vous accompagne tout au
          long du processus en y intégrant les technologies digitales adaptées à
          votre profil et aux propositions.
        </p>
        <p className="lg:w-[70%] mx-auto font-Gudea text-m mt-2 sm-content-s3 md:pl-10 md:pr-10 lg:mt-5 2xl:w-[80%]">
          Notre but est de cibler, d&apos;analyser les possibilités offertes par
          le digital afin de saisir toutes les opportunités et de les
          concrétiser !
        </p>
      </article>

      <div className="nostech flex flex-col justify-center text-white bg-[#3D0571] gap-4 items-center">
        <h3 className="font-Gudea text-center text-4xl lg:text-5xl tracking-[.25em] uppercase mt-12 lg:mt-16 ">
          Nos <span className="font-DissolveRegular">t</span>echnologies
        </h3>

        <div className="flex flex-wrap justify-center items-center mt-6 mb-12 lg:mb-24 gap-7 lg:gap-20">
          <Image
            className="object-contain h-20 w-20"
            src="/techno/symf.png"
            alt="logo symfony"
            width={300}
            height={300}
          />
          <Image
            className="object-contain h-20 w-20"
            src="/techno/react.png"
            alt="logo react"
            width={300}
            height={300}
          />
          <Image
            className="object-contain h-20 w-32"
            src="/techno/node.png"
            alt="logo node"
            width={300}
            height={300}
          />
          <Image
            className="object-cover w-24 h-full"
            src="/techno/php.png"
            alt="logo php"
            width={300}
            height={300}
          />
          <Image
            className="h-20 w-20"
            src="/techno/js.png"
            alt="logo js"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
