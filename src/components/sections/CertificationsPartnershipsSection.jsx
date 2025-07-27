import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Award, HeartHandshake as Handshake } from 'lucide-react';
import { DataContext } from '@/context/DataContext';

const CertificationsPartnershipsSection = () => {
  const { certifications } = useContext(DataContext);

  return (
    <section id="certifications-partnerships" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications and strategic partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center h-40 w-40 hover:border-cyan-400/50 transition-all duration-300"
            >
              <img src={cert.logo} alt={cert.alt} className="max-w-[80px] max-h-[80px] object-contain mb-3" />
              <p className="text-sm font-semibold text-white">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsPartnershipsSection;