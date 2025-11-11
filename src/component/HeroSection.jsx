import React from "react";
import logo from "../assets/image.png"; // تأكد الصورة فـ src/assets

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-r from-[#E9ebff] to-white overflow-hidden">
      
      {/* Texte principal */}
      <div className="max-w-lg mx-10 md:mx-20 animate-fadeIn">
        <p className="text-[#21bf73] font-semibold text-lg tracking-wide uppercase">
          🎓 Rejoignez-nous
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#000c47] mt-3 leading-tight">
          25K+ Étudiants <br />
          <span className="text-[#003cff]">Nous font confiance</span>
        </h1>

        <p className="text-gray-600 mt-5 text-lg leading-relaxed">
          Chaque jour apporte une nouvelle opportunité d’apprentissage et de
          réussite. Découvrez nos formations et commencez votre parcours vers l’excellence.
        </p>

        <div className="flex gap-5 mt-8">
          <button className="bg-[#21bf73] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1aa863] shadow-md hover:shadow-xl transition-all duration-300">
            Commencer Maintenant
          </button>
          <button className="border-2 border-[#21bf73] text-[#21bf73] px-6 py-3 rounded-lg font-semibold hover:bg-[#21bf73] hover:text-white shadow-md transition-all duration-300">
            En savoir plus
          </button>
        </div>
      </div>

      {/* Image côté droit */}
      <div className="mt-10 md:mt-0 mx-10 md:mx-20 relative animate-slideUp">
        <div className="absolute inset-0 bg-[#003cff] opacity-10 blur-3xl rounded-full -z-10"></div>
        <img
          src={logo}
          alt="Student"
          className="w-[400px] md:w-[450px] drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
