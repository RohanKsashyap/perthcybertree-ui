import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe } from 'lucide-react';
import { DataContext } from '@/context/DataContext';

const ServicesSection = () => {
  const { services } = useContext(DataContext);

  const getIcon = (title) => {
    if (!title || typeof title !== 'string') return <Code className="w-8 h-8" />;
    if (title.toLowerCase().includes('website')) return <Globe className="w-8 h-8" />;
    if (title.toLowerCase().includes('mobile')) return <Smartphone className="w-8 h-8" />;
    return <Code className="w-8 h-8" />;
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions that drive business growth and user engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(service.name)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;