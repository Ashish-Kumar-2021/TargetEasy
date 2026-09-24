import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <div id="gallery" className="py-16 bg-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-4">
          <div>
            <p className="text-primary font-bold text-sm tracking-wide uppercase mb-1">Our Gallery</p>
            <h2 className="text-3xl font-bold text-primary mb-2">Moments That Inspire</h2>
            <p className="text-gray-500">A glimpse of our classrooms, events and happy students.</p>
          </div>
          <button className="bg-secondary text-white px-6 py-2.5 rounded-full font-medium hover:bg-red-700 transition flex items-center gap-2">
            View Gallery <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md group relative">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
