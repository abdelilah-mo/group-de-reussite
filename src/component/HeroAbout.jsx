import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import aboutImg from "../assets/logo.jpg"; // تأكد تكون الصورة فـ src/assets

export default function HeroAbout() {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#003cff] to-[#000c47] text-white py-20 px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">À propos de nous</h1>
        <p className="text-lg max-w-2xl">
          Le <span className="font-semibold">GROUPE DE LA RÉUSSITE</span> est un
          espace d’apprentissage moderne qui vise à accompagner les élèves dans
          leur réussite scolaire et personnelle.
        </p>
      </section>

      {/* Content Section */}
      <section className="py-16 px-8 bg-[#E9ebff] flex flex-col md:flex-row items-center justify-center gap-12">
        <img
          src={aboutImg}
          alt="Notre équipe"
          className="w-full md:w-1/2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
        />
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-[#000c47] mb-4">
            Qui sommes-nous ?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nous sommes une équipe de professeurs passionnés par l’enseignement
            et la réussite des élèves. Notre mission est d’offrir des formations
            de qualité adaptées à chaque niveau : collège, lycée et baccalauréat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Grâce à des cours interactifs, des supports modernes et une
            approche humaine, nous préparons les jeunes à exceller dans leurs
            études et à bâtir leur avenir.
          </p>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 px-8 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#003cff] mb-8">
          Nos Valeurs Fondamentales
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-[#E9ebff] rounded-2xl shadow-lg hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-semibold text-[#000c47] mb-3">
              🎯 Excellence
            </h3>
            <p className="text-gray-600">
              Nous visons l’excellence dans chaque cours pour assurer la
              réussite de nos étudiants.
            </p>
          </div>
          <div className="p-6 bg-[#E9ebff] rounded-2xl shadow-lg hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-semibold text-[#000c47] mb-3">
              💡 Innovation
            </h3>
            <p className="text-gray-600">
              Des méthodes pédagogiques modernes basées sur la technologie et la
              créativité.
            </p>
          </div>
          <div className="p-6 bg-[#E9ebff] rounded-2xl shadow-lg hover:-translate-y-2 transition-transform">
            <h3 className="text-2xl font-semibold text-[#000c47] mb-3">
              🤝 Esprit d’équipe
            </h3>
            <p className="text-gray-600">
              Une communauté solidaire où professeurs et élèves avancent ensemble
              vers la réussite.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-8 bg-[#003cff] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Notre Vision</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Faire du GROUPE DE LA RÉUSSITE une référence nationale en éducation,
          en offrant à chaque élève un accompagnement personnalisé et un cadre
          d’apprentissage stimulant.
        </p>
      </section>

    </div>
  );
}
