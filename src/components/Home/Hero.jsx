import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";


export default function Hero() {
  // Add your wildlife or nature images here
  const images = [
    photo1,
    photo2,
    photo3
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change background image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="FaunaFlux Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text + Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Protect. Preserve. Prosper.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Join FaunaFlux in safeguarding biodiversity and understanding the
          impact of climate change on wildlife.
        </motion.p>

        <motion.button
          className="mt-8 bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 hover:scale-105 transition-transform duration-300 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
