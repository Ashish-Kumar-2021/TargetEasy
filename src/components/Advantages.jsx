import { UserCheck, Users, BookOpen, LineChart, HelpCircle } from 'lucide-react';

const advantages = [
  { icon: <UserCheck size={32} className="text-primary" />, title: 'Experienced & Friendly Faculty', desc: 'Learn from the best' },
  { icon: <Users size={32} className="text-primary" />, title: 'Small Batches', desc: 'More attention, better results' },
  { icon: <BookOpen size={32} className="text-primary" />, title: 'Updated Study Material', desc: 'As per latest pattern & syllabus' },
  { icon: <LineChart size={32} className="text-primary" />, title: 'Regular Tests & Performance Tracking', desc: 'Measure. Improve. Succeed.' },
  { icon: <HelpCircle size={32} className="text-primary" />, title: 'Doubt Sessions & Career Guidance', desc: 'Support beyond classroom' },
];

const Advantages = () => {
  return (
    <div id="faculty" className="py-16 bg-white overflow-hidden">
      <div id="results" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center">
          <div className="w-full lg:w-1/4">
            <p className="text-primary font-bold text-sm tracking-wide uppercase mb-2">Why Choose Us</p>
            <h2 className="text-2xl font-bold text-primary mb-3 leading-tight">The Target Easy Advantage</h2>
            <p className="text-sm text-gray-500">We focus on what truly matters - your learning, your progress and your success. Here's what makes us different.</p>
          </div>

          <div className="w-full lg:w-3/4 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {advantages.map((adv, idx) => (
              <div key={idx} className="min-w-[200px] flex-1 text-center p-4">
                <div className="mx-auto w-12 h-12 mb-3 flex items-center justify-center">{adv.icon}</div>
                <h4 className="font-bold text-primary text-sm mb-2">{adv.title}</h4>
                <p className="text-xs text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center border-t border-gray-100 pt-12">
          <div className="w-full lg:w-1/4">
            <p className="text-primary font-bold text-sm tracking-wide uppercase mb-2">Student Speaks</p>
            <h2 className="text-2xl font-bold text-primary mb-6">What Our Students Say</h2>

            <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 relative">
              <div className="absolute top-4 right-4 text-gray-200 text-4xl font-serif">"</div>
              <div className="flex items-start gap-4">
                <img src="https://i.pravatar.cc/150?img=47" alt="Student" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm text-gray-600 italic mb-3 relative z-10">"The faculty here is amazing! Concepts are explained in such a simple way that even difficult topics feel easy."</p>
                  <h5 className="font-bold text-primary text-sm">- Priya Sharma</h5>
                  <p className="text-xs text-gray-400">Class 10</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4 flex gap-4 overflow-x-auto pb-4 scrollbar-hide opacity-80 pointer-events-none">
            {advantages.slice(0, 4).map((adv, idx) => (
              <div key={idx} className="min-w-[200px] flex-1 text-center p-4">
                <div className="mx-auto w-12 h-12 mb-3 flex items-center justify-center">{adv.icon}</div>
                <h4 className="font-bold text-primary text-sm mb-2">{adv.title}</h4>
                <p className="text-xs text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
