import Link from "next/link";
import React from "react";
import { SparklesCore } from "./ui/vortex";

export default function HomeSection1() {
  return (
    <>
      <section className=" bg-[#080808] h-[85%] shadow-2xl">
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={100}
          className="absolute w-full h-[85%]"
          particleColor="#FFFFFF"
        />
        <div className="pt-[147px] lg:pt-[164px] text-white text-center flex flex-col gap-[1rem] my-auto">
          <h1 className="w-gleam mt-16 lg:mt-20 font-semibold text-center text-xl lg:text-4xl tracking-[.35em] uppercase title-section1">
            {/* <span className="w-gleam font-DissolveRegular mr-2 text-4xl lg:text-7xl">
              W
            </span> */}
            Web design &{" "}
            <span className="sm-hidden">
              {/* <span className="w-gleam font-DissolveRegular mr-2 text-4xl lg:text-7xl">
                W
              </span> */}
              Web
            </span>{" "}
            Développement
          </h1>
          <p className="tracking-widest lg:p-0 px-4 text-xs lg:text-xl max-w-[50em] mx-auto title-section1">
            Nous développons des solutions digitales sur-mesure en collaboration
            avec nos clients pour répondre à leurs besoins numériques...
          </p>
          <button className="tracking-[.25em] mt-4 lg:mt-4 lg:tracking-[.55em] nav-button">
            <Link
              href="/contact"
              className="font-Gudea font-semibold text-xs lg:text-xl bg-purple2 rounded-full px-3 p-3 lg:p-3 lg:px-5 uppercase border border-purple hover:bg-blackGleam hover:border-white transition duration-500"
            >
              Prendre un rendez-vous
            </Link>
          </button>
        </div>
      </section>
      <div className="flex justify-center">
        <p className="rounded-full p-1 animate-bounce mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-14 h-14 text-[#0808087d]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </div>
    </>
  );
}
{
  /* */
}
