"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Fassahat Ullah Qureshi",
    role: "CEO, Emergi Mentors",
    text: "It’s my pleasure to recommend Ahad, an exceptional Senior Full Stack Developer who has been instrumental in the success of Emergi Mentors. Ahad played a pivotal role in delivering Release 1 of our product, showcasing not only his technical expertise but also his unwavering dedication, honesty, and humility. I highly recommend Ahad to any organization looking for a talented, hardworking, and visionary professional. Ahad, thank you for your incredible contributions. I’m excited to see you achieve even greater heights in your career!",
    img: "/assets/img/TehreemBilal.jpeg",
    linkedin: "https://linkedin.com/in/john-smith",
  },
  {
    name: "Tehreem Bilal",
    role: "Lecturer | Expert Content Writer",
    text: "I'm delighted to recommend Ahad Ali, an exceptional student I've had the pleasure of teaching in Software Quality Engineering and Requirements Engineering. Ahad demonstrated outstanding analytical skills, creativity, and dedication to delivering high-quality solutions. His passion for software development shone through in every project. Ahad's ability to balance technical expertise with teamwork and communication skills makes him invaluable. I confidently endorse him for future opportunities, knowing he'll make a meaningful impact.",
    img: "/assets/img/TehreemBilal2.jpeg",
    linkedin: "https://linkedin.com/in/emily-johnson",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-slate-950 border-t border-white/10 w-full relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Quote className="text-purple-400 w-8 h-8" /> Recommendations
        </h2>
        <p className="text-gray-400 mb-12">
          Feedback and appreciation from professionals I’ve worked with.
        </p>

        <div className="relative flex justify-center items-center">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-purple-600/20 
            p-3 rounded-full text-white transition-all duration-300 z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Review container with fixed height */}
          <div className="relative w-full max-w-3xl h-auto min-h-[450px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full bg-gradient-to-br from-purple-800/20 to-slate-800/40 border border-purple-600/20 
                  rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-purple-600/30"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={reviews[current].img}
                    alt={reviews[current].name}
                    width={90}
                    height={90}
                    className="rounded-full mb-5 border-2 border-purple-500 shadow-lg"
                  />
                  <p className="text-gray-300 text-base md:text-sm italic mb-6 leading-relaxed">
                    “{reviews[current].text}”
                  </p>
                  <h4 className="text-white font-semibold text-lg">
                    {reviews[current].name}
                  </h4>
                  <a
                    href={reviews[current].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 text-sm hover:underline mt-1"
                  >
                    {reviews[current].role}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-purple-600/20 
            p-3 rounded-full text-white transition-all duration-300 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
