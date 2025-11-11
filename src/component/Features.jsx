import React from "react";
import { BookOpen, GraduationCap, ClipboardList } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <GraduationCap size={36} className="text-[#e74c3c]" />,
      title: "Expert instruction",
      desc: "The gradual accumulation of information about atomic and small-scale behavior.",
    },
    {
      icon: <ClipboardList size={36} className="text-[#e74c3c]" />,
      title: "Training Courses",
      desc: "Build a better learning path through structured and practical courses.",
    },
    {
      icon: <BookOpen size={36} className="text-[#e74c3c]" />,
      title: "Online Learning",
      desc: "Flexible online lessons adapted to your needs and your schedule.",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 grid md:grid-cols-3 gap-8 text-center">
      {features.map((f, i) => (
        <div key={i} className="p-6 rounded-xl shadow-md hover:shadow-lg transition bg-[#f9f9ff]">
          <div className="flex justify-center mb-4">{f.icon}</div>
          <h3 className="text-lg font-bold mb-2">{f.title}</h3>
          <p className="text-gray-600 text-sm">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
