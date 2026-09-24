import { GraduationCap, BookOpen, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const features = [
  { icon: <GraduationCap size={28} className="text-primary" />, title: 'Expert Faculty', desc: 'Learn from experienced and dedicated teachers' },
  { icon: <BookOpen size={28} className="text-primary" />, title: 'Proven Results', desc: 'Consistent track record of success' },
  { icon: <Users size={28} className="text-primary" />, title: 'Personal Attention', desc: 'Small batches for better learning' },
  { icon: <TrendingUp size={28} className="text-primary" />, title: 'Complete Support', desc: 'Study material, doubt sessions & career guidance' },
  { icon: <ShieldCheck size={28} className="text-primary" />, title: 'Safe & Positive Environment', desc: 'A place to learn grow and succeed' },
];

const FeaturesBar = () => {
  return (
    <div className="border-y border-blue-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-primary text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-tight mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;
