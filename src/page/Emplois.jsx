import React, { useState } from "react";
import pdf1 from "../assets/1bac.pdf";
import pdf2 from "../assets/3ac.pdf";
import Footer from "../component/Footer";

export default function PdfModalViewer() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenu principal */}
      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-[#003cff] mb-6 text-center">
          Espace Emplois
        </h1>

        {/* Section des PDF sous forme de lignes */}
        <div className="flex flex-col items-center gap-4 mb-6">
          {[{ file: pdf1, title: "Emploi 1 BAC" }, { file: pdf2, title: "Emploi 3 AC" }].map((pdf, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex items-center justify-center p-4 border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-blue-50 transition"
              onClick={() => setSelectedPdf(pdf.file)}
            >
              {/* Partie icône PDF */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-md">
                  <span className="text-blue-700 font-bold">PDF</span>
                </div>
                <span className="font-medium text-lg">{pdf.title}</span>
              </div>

              {/* Flèche */}
              <span className="text-blue-500 font-bold text-xl">&rarr;</span>
            </div>
          ))}
        </div>

        {/* Modal du PDF */}
        {selectedPdf && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 h-4/5 p-4 rounded-lg shadow-lg relative">
              {/* Bouton fermer */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
                onClick={() => setSelectedPdf(null)}
              >
                &times;
              </button>

              {/* PDF */}
              <object
                data={selectedPdf}
                type="application/pdf"
                width="100%"
                height="100%"
                className="border-2 border-gray-300 rounded-lg"
              >
                <p>
                  Votre navigateur ne supporte pas les PDFs.{" "}
                  <a href={selectedPdf} target="_blank" rel="noopener noreferrer">
                    Téléchargez le PDF ici.
                  </a>
                </p>
              </object>
            </div>
          </div>
        )}
      </div>

      {/* Footer toujours en bas */}
      <Footer />
    </div>
  );
}
