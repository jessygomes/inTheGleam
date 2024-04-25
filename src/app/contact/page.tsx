import ContactForm from "@/components/ContactForm";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | inTheGleam",
  description:
    "Contactez-nous : Vous avez un projet ? Besoin de conseils ? Réponse en moins de 24 heures !",
};

export default function Contact() {
  return (
    <section className="mt-[8rem] mb-[4rem] lg:mt-[12rem]">
      {" "}
      <div className="font-Gudea flex flex-col mt-10 lg:p-0">
        <h1 className="lg:text-4xl text-2xl font-bold uppercase mx-auto tracking-[.20em]">
          contactez-nous !
        </h1>

        <p className="lg:text-lg text-md pr-5 pl-5 lg:p-0 text-center mt-2 tracking-[.15em]">
          Vous avez un projet ? Besoin de conseils ? <br /> Réponse en moins de
          24 heures !
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
