import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function HeroFormation() {
  const niveaux = [
    {
    title: "2ᵉ Bac",
    color: "#003cff",
    filieres: [
      {
        matiere: "Mathématiques",
        desc: "Cours, exercices et résumés pour bien préparer le Bac.",
        formateur: "Prof Yassine Mo",
      },
      {
        matiere: "Sciences Physiques",
        desc: "Explications simples et expériences pratiques.",
        formateur: "Prof Marouane Bnaeim",
      },
      {
        matiere: "Sciences de la Vie et de la Terre (SVT)",
        desc: "Fiches de biologie et géologie avec exercices corrigés.",
        formateur: "Prof Hamza Touhami",
      },
    ],
  },
  {
    title: "1ère Bac",
    color: "#21bf73",
    filieres: [
      {
        matiere: "Français",
        desc: "Analyse de texte, résumé et préparation de l’examen.",
        formateur: "Prof Hamza Touhami",
      },
      
    ],
  },
  {
    title: "1ᵉ Année Collège (1AC)",
    color: "#ff6b6b",
    filieres: [
      {
        matiere: "Mathématiques",
        desc: "Cours simplifiés, exercices interactifs et quiz.",
        formateur: "Prof Yassine Mo",
      },
      {
        matiere: "Sciences Physiques",
        desc: "Expériences amusantes pour comprendre les lois physiques.",
        formateur: "Prof Marouane Bnaeim",
      },
      {
        matiere: "SVT",
        desc: "Découverte du corps humain et des phénomènes naturels.",
        formateur: "Prof Hamza Touhami",
      },
    ],
  },
  {
    title: "2ᵉ Année Collège (2AC)",
    color: "#ffa500",
    filieres: [
      {
        matiere: "Mathématiques",
        desc: "Cours simplifiés, exercices interactifs et quiz.",
        formateur: "Prof Yassine Mo",
      },
      {
        matiere: "Sciences Physiques",
        desc: "Expériences amusantes pour comprendre les lois physiques.",
        formateur: "Prof Marouane Bnaeim",
      },
      {
        matiere: "SVT",
        desc: "Découverte du corps humain et des phénomènes naturels.",
        formateur: "Prof Hamza Touhami",
      },
    ],
  },
  {
    title: "3ᵉ Année Collège (3AC)",
    color: "#000c47",
    filieres: [
      {
        matiere: "Mathématiques",
        desc: "Cours simplifiés, exercices interactifs et quiz.",
        formateur: "Prof Yassine Mo",
      },
      {
        matiere: "Sciences Physiques",
        desc: "Expériences amusantes pour comprendre les lois physiques.",
        formateur: "Prof Marouane Bnaeim",
      },
      {
        matiere: "SVT",
        desc: "Découverte du corps humain et des phénomènes naturels.",
        formateur: "Prof Hamza Touhami",
      },
      {
        matiere: "Français",
        desc: "Analyse de texte, résumé et préparation de l’examen.",
        formateur: "Prof Ayoub",
      },
    ],
  },
  
  
];


  return (
    <div>

      <section className="min-h-screen bg-[#E9ebff] py-12 px-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#003cff] mb-8">
          Nos Formations
        </h1>

        {niveaux.map((niveau) => (
          <div key={niveau.title} className="w-full max-w-6xl mb-12">
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: niveau.color }}
            >
              {niveau.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {niveau.filieres.map((filiere, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-semibold text-[#000c47] mb-3">
                    {filiere.matiere}
                  </h3>
                  <p className="text-gray-600 mb-4">{filiere.desc}</p>
                  <p className="font-medium text-[#003cff] mb-4">
                    Formateur : {filiere.formateur}
                  </p>
                  <button className="bg-[#003cff] text-white px-4 py-2 rounded-lg hover:bg-[#002bb5]">
                    Voir les cours
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
