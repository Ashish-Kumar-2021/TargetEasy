import { Book, GraduationCap, Target, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  { title: 'Class 6 - 10', desc: 'Build strong concepts for a better future.', icon: <Book size={32} className="text-blue-600" />, bg: 'bg-blue-50/50 hover:bg-blue-50', border: 'hover:border-blue-200' },
  { title: 'Class 11 - 12', desc: 'Get expert guidance for board exams.', icon: <GraduationCap size={32} className="text-blue-900" />, bg: 'bg-teal-50/50 hover:bg-teal-50', border: 'hover:border-teal-200' },
  { title: 'Competitive Exams', desc: 'Prepare for a successful career.', icon: <Target size={32} className="text-purple-600" />, bg: 'bg-purple-50/50 hover:bg-purple-50', border: 'hover:border-purple-200' },
  { title: 'Foundation Courses', desc: 'Strong base for long-term success.', icon: <Award size={32} className="text-orange-600" />, bg: 'bg-orange-50/50 hover:bg-orange-50', border: 'hover:border-orange-200' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Courses = () => {
  return (
    <div id="courses" className="py-24 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-secondary font-bold text-sm tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-secondary"></span> Our Courses
          </p>
          <h2 className="text-4xl font-extrabold text-primary mb-4 tracking-tight">Courses for a Brighter Tomorrow</h2>
          <p className="text-gray-500 text-lg">We offer specialized coaching for different classes and competitive exams to help you build a strong foundation and achieve your goals.</p>
        </div>
        <button className="bg-white border border-gray-200 text-primary px-7 py-3 rounded-full font-semibold hover:border-secondary hover:text-secondary transition-all flex items-center gap-2 whitespace-nowrap group shadow-sm hover:shadow-md">
          View All Courses <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`group ${course.bg} border border-transparent ${course.border} p-8 rounded-2xl flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="mb-6 p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10">
              {course.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{course.title}</h3>
            <p className="text-base text-gray-600 mb-8 leading-relaxed relative z-10">{course.desc}</p>
            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:text-secondary transition-colors relative z-10">
              Know More
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                <ArrowRight size={12} />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Courses;