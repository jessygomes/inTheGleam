"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cp5v6fk",
        "template_rh8cml5",
        form.current!,
        "6F6d9nwpNXoJ0_n_F"
      )
      .then(
        () => {
          (document.getElementById("success") as HTMLElement).classList.remove(
            "hidden"
          );
          if (form.current) {
            (form.current as HTMLFormElement).reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form
        action="submit"
        ref={form}
        onSubmit={sendEmail}
        className="font-Gudea space-y-6"
      >
        {/* Nom et Prénom */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
              placeholder="Votre nom"
            />
          </div>
          <div className="group">
            <label htmlFor="last_name" className="block text-sm font-semibold text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
              placeholder="Votre prénom"
            />
          </div>
        </div>

        {/* Email et Téléphone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
              placeholder="votre@email.com"
            />
          </div>
          <div className="group">
            <label htmlFor="tel" className="block text-sm font-semibold text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>

        {/* Société et Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="societe1" className="block text-sm font-semibold text-gray-700 mb-2">
              Société
            </label>
            <input
              type="text"
              name="societe1"
              id="societe1"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
              placeholder="Nom de votre entreprise"
            />
          </div>
          <div className="group">
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
              Budget estimé (€)
            </label>
            <select
              name="budget"
              id="budget"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
            >
              <option value="">Sélectionnez votre budget</option>
              <option value="1000-3000">1 000€ - 3 000€</option>
              <option value="3000-5000">3 000€ - 5 000€</option>
              <option value="5000-10000">5 000€ - 10 000€</option>
              <option value="10000+">10 000€ et plus</option>
              <option value="a-definir">À définir ensemble</option>
            </select>
          </div>
        </div>

        {/* Type de projet */}
        <div className="group">
          <label htmlFor="projet-type" className="block text-sm font-semibold text-gray-700 mb-2">
            Type de projet
          </label>
          <select
            name="projet_type"
            id="projet-type"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md"
          >
            <option value="">Quel est votre projet ?</option>
            <option value="site-vitrine">Site vitrine</option>
            <option value="e-commerce">Site e-commerce</option>
            <option value="application-web">Application web</option>
            <option value="refonte">Refonte de site existant</option>
            <option value="maintenance">Maintenance / Support</option>
            <option value="autre">Autre projet</option>
          </select>
        </div>

        {/* Message */}
        <div className="group">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Décrivez votre projet *
          </label>
          <textarea
            name="mess"
            id="message"
            rows={6}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple2 focus:border-transparent transition-all duration-300 hover:bg-white group-hover:shadow-md resize-none"
            placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
          ></textarea>
        </div>

        {/* Bouton et message de succès */}
        <div className="space-y-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple2 to-purple3 text-white font-bold py-4 px-8 rounded-2xl hover:from-purple3 hover:to-purple2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple2 focus:ring-offset-2"
          >
            <span className="flex items-center justify-center">
              Envoyer ma demande
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          </button>

          <p
            id="success"
            className="hidden text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl font-semibold"
          >
            <span className="flex items-center justify-center">
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Message envoyé avec succès ! Nous vous répondrons sous 24h.
            </span>
          </p>

          <p className="text-center text-sm text-gray-500">
            * Champs obligatoires - Vos données sont protégées et ne seront jamais partagées
          </p>
        </div>
      </form>
    </div>
  );
}