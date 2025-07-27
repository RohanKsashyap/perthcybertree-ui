import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Bug as Solution, Lightbulb, CheckCircle } from 'lucide-react';
import { DataContext } from '@/context/DataContext';

const CaseStudiesSection = () => {
  const { caseStudies } = useContext(DataContext);

  return (
    <section id="casestudies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses overcome challenges and achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 overflow-hidden"
            >
              <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                <img  alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={study.image} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">{study.title}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Lightbulb className="w-8 h-8 text-cyan-400 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Problem</h4>
                    <p className="text-gray-300">{study.problem}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Solution className="w-8 h-8 text-purple-400 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-pink-400 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Results</h4>
                    <p className="text-gray-300">{study.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;