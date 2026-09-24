import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto px-4">
          Have questions about our courses or batches? We'd love to hear from you. Drop us a message or visit our center today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Side: Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-6 border-b pb-4">Get in Touch</h3>
              
              <div className="space-y-6">
                <a href="tel:+919380563478" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us Directly</p>
                    <p className="font-bold text-gray-800">+91 9380563478</p>
                  </div>
                </a>

                <a href="mailto:ramkumarsah76ap@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-secondary rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Address</p>
                    <p className="font-bold text-gray-800 break-all">ramkumarsah76ap@gmail.com</p>
                  </div>
                </a>

                {/* Clickable Address Link */}
                <a href="https://www.google.com/maps/place/TARGET+EASY+(Er.+Ram+sah)/@26.4345808,85.8993012,17z/data=!4m14!1m7!3m6!1s0x39ec4bcf40bcad73:0x6a5dcd3b812907d4!2sTARGET+EASY+(Er.+Ram+sah)!8m2!3d26.4345808!4d85.9018761!16s%2Fg%2F11t8c12gyw!3m5!1s0x39ec4bcf40bcad73:0x6a5dcd3b812907d4!8m2!3d26.4345808!4d85.9018761!16s%2Fg%2F11t8c12gyw?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Visit Our Center</p>
                    <p className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">Kataiya Road, Benipatti<br/>Madhubani, Bihar</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Opening Hours</p>
                    <p className="font-bold text-gray-800">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map with Clickable Overlay */}
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group">
              
              {/* This invisible anchor tag sits on top of the iframe to capture clicks */}
              <a 
                href="https://www.google.com/maps/place/TARGET+EASY+(Er.+Ram+sah)/@26.4345808,85.8993012,17z/data=!4m14!1m7!3m6!1s0x39ec4bcf40bcad73:0x6a5dcd3b812907d4!2sTARGET+EASY+(Er.+Ram+sah)!8m2!3d26.4345808!4d85.9018761!16s%2Fg%2F11t8c12gyw!3m5!1s0x39ec4bcf40bcad73:0x6a5dcd3b812907d4!8m2!3d26.4345808!4d85.9018761!16s%2Fg%2F11t8c12gyw?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-xl"
                title="Open in Google Maps"
              ></a>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14299.182283993356!2d85.79774454999999!3d26.363842100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed29003893693f%3A0x6b7dbf8c47eb68f0!2sBenipatti%2C%20Bihar%20847223!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '0.75rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </motion.div>

          {/* Right Side: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="w-full lg:w-2/3 bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-3xl font-extrabold text-primary mb-2">Send an Enquiry</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Student Name *</label>
                  <input type="text" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Enter full name" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="+91 00000 00000" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Select Class / Course</label>
                  <select className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white text-gray-600">
                    <option value="">Select a course...</option>
                    <option value="class6-10">Class 6 to 10</option>
                    <option value="class11-12">Class 11 & 12</option>
                    <option value="competitive">Competitive Exams</option>
                    <option value="foundation">Foundation Course</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message or Query</label>
                <textarea rows="4" className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all w-full md:w-auto flex items-center justify-center gap-2 shadow-lg shadow-red-500/30 group">
                Submit Enquiry <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;