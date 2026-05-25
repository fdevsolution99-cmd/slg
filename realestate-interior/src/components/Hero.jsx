import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-yellow-500"
        >
          Luxury Real Estate
        </motion.h1>

        <p className="mt-6 text-lg md:text-2xl">
          Premium Interior Designing Solutions
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full text-lg hover:scale-105 transition">
          Explore Designs
        </button>
      </div>
    </section>
  );
}

export default Hero;