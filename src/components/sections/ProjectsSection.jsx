import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { DataContext } from '@/context/DataContext';

const ProjectsSection = () => {
  const { projects } = useContext(DataContext);

  const handleProjectClick = () => {
    toast({
      title: "🚧 Project details coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in web and mobile development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {(Array.isArray(projects) ? projects : []).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img  alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-400 text-sm font-medium border border-cyan-400/30">
                    {project.category}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleProjectClick}
                    className="text-cyan-400 hover:text-white hover:bg-cyan-400/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.url && (
                  <a
                    href={/^https?:\/\//.test(project.url) ? project.url : `https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-2 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors duration-200"
                  >
                    Visit
                  </a>
                )}

                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(project.tech) ? project.tech : []).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;