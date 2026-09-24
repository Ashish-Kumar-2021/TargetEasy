import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Faculty', href: '/#faculty' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Results', href: '/#results' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-gray-100">
              <img src="/logo.jpg" alt="Target Easy Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h1 className="text-primary font-extrabold text-xl tracking-tight">Target Easy</h1>
              <p className="text-secondary text-[10px] font-bold tracking-widest uppercase">(A vision)</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-gray-600 hover:text-primary font-semibold text-sm transition-colors">
                {link.name}
              </a>
            ))}
            <a href="/contact" className="bg-secondary text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-md shadow-red-500/20 text-sm">
              Enquire Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none p-2 bg-gray-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-bold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-md"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;