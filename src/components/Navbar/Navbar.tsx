"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SparklesCore } from "../ui/vortex";

const itemNavbar = [
  {
    text: "Accueil",
    link: "/",
  },
  {
    text: "E-Commerce",
    link: "/e-commerce",
  },
  {
    text: "Vitrine",
    link: "/vitrine",
  },
  {
    text: "A Propos",
    link: "/a-propos",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //! BURGER TO CROSS + AFFICHE LA NAVBAR MOBILE
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setNavActive(!navActive);
  };

  const pathname = usePathname();

  //! NAVBAR SCROLL
  useEffect(() => {
    if (pathname === "/") {
      // vérifie si nous sommes sur la page d'accueil
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        if (isScrolled !== scrolled) {
          setScrolled(!scrolled);
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setScrolled(true); // active l'arrière-plan pour toutes les autres pages
    }
  }, [scrolled, pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="w-full absolute h-[100%]">
        <SparklesCore
          id="tsparticlesHeader"
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <nav className={styles.nav}>
        <div className="flex justify-center">
          <Link href="/">
            <Image
              className={styles.headerLogo}
              src="/logos/Logo_icon_inTheGleam_White.png"
              alt="Logo intTheGleam"
              width={400}
              height={400}
            />
          </Link>
        </div>

        <div
          className={`${styles.nav__menuBar} ${
            isActive ? styles.activeBurger : ""
          }`}
          onClick={handleClick}
        >
          <div className={`${styles.line} ${styles.l1}`}></div>
          <div className={`${styles.line} ${styles.l2}`}></div>
          <div className={`${styles.line} ${styles.l3}`}></div>
        </div>

        <div
          className={`${navActive ? styles.active : ""} ${
            styles.nav__menuList
          }`}
        >
          {itemNavbar.map((item, index) => {
            const active =
              item.link === "/"
                ? pathname === "/"
                : pathname.startsWith(item.link);
            return (
              <div key={index}>
                <Link
                  href={item.link}
                  onClick={handleClick}
                  className={`${styles.nav__item} ${
                    active ? styles.activeLink : ""
                  }`}
                >
                  <div
                    className={`${styles.nav__item} ${
                      active ? styles.activeLink : ""
                    }`}
                  >
                    {item.text}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <Link href="/contact">
              <div className="bg-purple2 rounded-full w-12 h-12 m-2 lg:m-4 fixed bottom-1 right-0 flex items-center justify-center hover:scale-110 hover:bg-black transition duration-500">
                <span className="animate-ping absolute top-1 right-0 -mt-1 mr-1 flex items-center justify-center rounded-full h-3 w-3 bg-sky-500"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
            </Link> */}
      </nav>
    </header>
  );
}
