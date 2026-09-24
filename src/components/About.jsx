import { Target, Eye, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="py-24 bg-blue-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/my-classroom.jpg" alt="Students studying" className="w-full h-[450px] object-cover" />
              
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-primary text-white p-6 rounded-xl shadow-2xl border-l-4 border-secondary max-w-[220px] backdrop-blur-sm bg-primary/95">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary text-xl">📍</div>
                </div>
                <h3 className="font-bold text-xl leading-tight">Target Easy<br/>Kataiya Road<br/>Benipatti</h3>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-primary font-bold text-sm tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
               <span className="w-6 h-0.5 bg-primary"></span> About Us
            </p>
            <h2 className="text-4xl font-extrabold text-primary mb-6">Why Target Easy - (A vision)</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              At Target Easy - (A vision), we believe that every student has the potential to achieve great things. Our mission is to provide quality education, personalized guidance and a supportive learning environment where students can grow with confidence and clarity.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <Target size={26} />, title: "Our Mission", desc: "Empower every learner to achieve their goals." },
                { icon: <Eye size={26} />, title: "Our Vision", desc: "To be a trusted name in quality education." },
                { icon: <Star size={26} />, title: "Our Values", desc: "Discipline, Dedication, Care & Excellence." },
                { icon: <Heart size={26} />, title: "Our Commitment", desc: "Your success is our priority." },
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-blue-200 pl-5 group cursor-default">
                  <div className="text-primary mb-3 transform group-hover:scale-110 group-hover:text-secondary transition-all duration-300 origin-left">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-primary text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;