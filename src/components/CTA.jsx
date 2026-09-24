import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <div className="bg-primary text-white py-20 relative overflow-hidden">
      {/* Decorative Target Graphic */}
      <motion.div 
        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 origin-center"
      >
        <div className="w-[500px] h-[500px] rounded-full border-[30px] border-secondary flex items-center justify-center">
          <div className="w-[350px] h-[350px] rounded-full border-[30px] border-white flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full bg-secondary"></div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          <div className="w-full lg:w-1/3">
             <motion.div 
               initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
               className="text-3xl font-handwriting transform -rotate-6 text-blue-200"
             >
               Your Goals<br/>
               Our Guidance<br/>
               <span className="text-white font-bold text-4xl">A Brighter Future</span><br/>
               <span className="text-lg opacity-80 font-sans tracking-widest">(A vision)</span>
             </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="w-full lg:w-1/3 text-center"
          >
            <p className="text-blue-300 font-bold text-sm uppercase tracking-[0.2em] mb-4">Take The First Step</p>
            <h2 className="text-4xl font-extrabold mb-6">Join Target Easy<br/>Today</h2>
            <p className="text-blue-100 text-base mb-8">Get expert guidance and start your journey towards success.</p>
            
            <a href="/contact" className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-secondary transition-all duration-300 inline-flex items-center justify-center gap-2 mx-auto shadow-xl shadow-red-900/50 group">
              Enquire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
          <div className="w-full lg:w-1/3"></div>

        </div>
      </div>
    </div>
  );
};

export default CTA;