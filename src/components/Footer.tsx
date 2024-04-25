import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SparklesCore } from "./ui/vortex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <footer className="bg-[#080808] h-[95vh] lg:h-[85vh] flex flex-col items-center justify-center">
      <SparklesCore
        background="transparent"
        minSize={0.3}
        maxSize={1}
        particleDensity={100}
        className="absolute w-full h-[80vh]"
        particleColor="#FFFFFF"
      />
      <div className="flex justify-center items-center h-[85%] lg:gap-8 pt-10">
        <Image
          className="object-contain h-[5rem] w-auto lg:h-[7rem] mr-5 lg:mr-0 imgNeon"
          src="/logos/Logo_Inline_inTheGleam_Blanc.png"
          alt="logo inthegleam"
          width={300}
          height={300}
        />
      </div>

      <div className="flex flex-col justify-center items-center z-10">
        <div className="flex gap-4 flex-col lg:flex-row text-white text-center">
          <Link
            href="/"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            Accueil
          </Link>
          <Link
            href="/vitrine"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            Site Vitrine
          </Link>
          <Link
            href="/e-commerce"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            Site E-Commerce
          </Link>
          <Link
            href="/a-propos"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            A Propos de nous
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            Contact
          </Link>
          <Link
            href="/mentions-legales"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            Mentions légales
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            Politique de confidentialité
          </Link>
        </div>

        <div className="flex gap-4 flex-col lg:flex-row text-white text-center pt-5">
          <a
            href=""
            className="flex items-center gap-2 text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            contact@inthegleam.fr
          </a>
          <Link
            href="https://www.instagram.com/inthe_gleam/"
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-[#b080dd] transition-all ease-in-out"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            @inthe_gleam
          </Link>
        </div>
      </div>

      <div className="flex gap-4 text-white relative bottom-0 text-[0.7rem] text-center pt-10 pb-2">
        <p>2024 inTheGleam &copy; - All rights reserved</p>
      </div>
    </footer>
  );
}
