import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/80 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="w-full lg:w-1/2 z-10"
          >
            <motion.p variants={fadeUp} className="text-secondary font-bold text-sm tracking-[0.2em] mb-4 uppercase flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary"></span>
              Learn | Practice | Achieve
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-extrabold text-primary leading-tight mb-2 tracking-tight">
              Target Easy -
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                (A vision)
              </span>
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-secondary pl-4">
              Your Goals | Our Guidance | A Brighter Future
            </motion.h3>
            <motion.p variants={fadeUp} className="text-gray-600 mb-10 max-w-lg text-lg leading-relaxed">
              We provide quality education and personalized guidance to help you achieve your dreams. With the right support, learning becomes easier and success is closer.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              
              {/* Changed from button to anchor tag */}
              <a href="#courses" className="bg-secondary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-500/20 group">
                Explore Our Courses
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Changed from button to anchor tag */}
              <a href="#about" className="border-2 border-primary/20 text-primary px-8 py-3.5 rounded-full font-semibold hover:border-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                Know More
              </a>
              
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>

              <img
                src="/hero-image.jpg"
                alt="Teacher"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl z-10 relative border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;