import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { DataContext } from '@/context/DataContext';

const TestimonialsSection = () => {
  const { testimonials } = useContext(DataContext);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Client <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our happy clients have to say about our dedication and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-cyan-400 opacity-20 absolute top-6 left-6" />
              <p className="text-lg text-gray-300 italic mb-6 leading-relaxed mt-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img  alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" src={testimonial.avatar} />
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-cyan-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;