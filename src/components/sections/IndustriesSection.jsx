import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Banknote, ShoppingBag, GraduationCap, Building, Truck } from 'lucide-react';
import { DataContext } from '@/context/DataContext';

const iconMap = {
  HeartPulse: HeartPulse,
  Banknote: Banknote,
  ShoppingBag: ShoppingBag,
  GraduationCap: GraduationCap,
  Building: Building,
  Truck: Truck,
};

const IndustriesSection = () => {
  const { industries } = useContext(DataContext);

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Industries We <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across diverse sectors, providing tailored digital solutions for unique challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6 w-16 h-16 flex items-center justify-center bg-white/5 rounded-xl">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300 leading-relaxed">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;