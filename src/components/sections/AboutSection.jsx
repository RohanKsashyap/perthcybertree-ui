import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Globe, Users, Linkedin, Github } from 'lucide-react';
import { DataContext } from '@/context/DataContext';

const AboutSection = () => {
  const { founder, team } = useContext(DataContext);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* About Company */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">CyberTree</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in India with a vision to revolutionize digital experiences, CyberTree is now expanding to the Australian market. We combine innovative Indian tech expertise with a deep understanding of global business needs.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our team of skilled developers and designers specializes in creating custom websites and mobile applications that not only look stunning but also deliver exceptional performance and user experience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3"><Users className="w-6 h-6 text-cyan-400" /><span className="text-white font-medium">Expert Team</span></div>
              <div className="flex items-center space-x-3"><Award className="w-6 h-6 text-cyan-400" /><span className="text-white font-medium">Quality Assured</span></div>
              <div className="flex items-center space-x-3"><Globe className="w-6 h-6 text-cyan-400" /><span className="text-white font-medium">Global Reach</span></div>
              <div className="flex items-center space-x-3"><Code className="w-6 h-6 text-cyan-400" /><span className="text-white font-medium">Latest Tech</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  alt="CyberTree team working on innovative projects" className="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-indigo-500/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Meet the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Founder</span>
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64">
              <img  alt={founder.name} className="rounded-full w-full h-full object-cover shadow-2xl" src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
              <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-left max-w-xl">
              <h4 className="text-3xl font-bold text-white">{founder.name}</h4>
              <p className="text-xl text-cyan-400 font-semibold mb-4">{founder.title}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{founder.bio}</p>
              <div className="flex items-center space-x-4">
                <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
                <a href={founder.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Team Section */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Expert Team</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The creative minds and talented developers behind our success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img  alt={member.name} className="w-full h-full rounded-full object-cover shadow-lg" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-cyan-400 transition-colors duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-white">{member.name}</h4>
                <p className="text-cyan-400">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;