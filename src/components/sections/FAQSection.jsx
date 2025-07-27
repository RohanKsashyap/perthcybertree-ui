import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "What services does CyberTree offer?",
          answer: "We offer comprehensive digital solutions including custom website development, mobile app development, e-commerce platforms, UI/UX design, and digital consulting services. Our expertise covers both frontend and backend development using modern technologies."
        },
        {
          question: "How much does a website cost?",
          answer: "Website costs vary based on complexity, features, and requirements. A basic website starts from $2,000, while complex e-commerce platforms can range from $8,000 to $25,000+. We provide detailed quotes after understanding your specific needs."
        },
        {
          question: "Do you provide ongoing maintenance?",
          answer: "Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance optimization, and 24/7 support. Our maintenance plans start from $200/month depending on your website's complexity."
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern, scalable technologies including React, Node.js, Python, PHP, MongoDB, MySQL, AWS, and more. We choose the best technology stack based on your project requirements and scalability needs."
        }
      ]
    },
    {
      category: "Project Process",
      questions: [
        {
          question: "How long does it take to complete a project?",
          answer: "Project timelines vary: Simple websites take 2-4 weeks, complex websites 6-12 weeks, and mobile apps 8-16 weeks. We provide detailed timelines during project planning and keep you updated throughout the process."
        },
        {
          question: "What is your development process?",
          answer: "Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment & Launch, 5) Post-launch Support. We maintain regular communication and provide progress updates."
        },
        {
          question: "Do you provide project updates?",
          answer: "Absolutely! We provide weekly progress reports, regular demos, and maintain open communication channels. You'll have access to project management tools to track progress and provide feedback in real-time."
        },
        {
          question: "Can I make changes during development?",
          answer: "Yes, we accommodate reasonable changes during development. Major changes may affect timeline and cost, which we'll discuss upfront. We recommend finalizing requirements before development starts for optimal efficiency."
        }
      ]
    },
    {
      category: "Support & Communication",
      questions: [
        {
          question: "What support do you provide after launch?",
          answer: "We provide 3 months of free support after launch, including bug fixes and minor updates. After that, we offer various support packages. We also provide training for your team to manage the website."
        },
        {
          question: "How do we communicate during the project?",
          answer: "We use multiple communication channels: email, phone, video calls, and project management tools. We're available during Australian business hours and provide emergency support for critical issues."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we provide comprehensive training for your team on how to manage and update your website. This includes content management, basic maintenance, and best practices for optimal performance."
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer: "We have a satisfaction guarantee. If you're not happy with our work, we'll revise it until you're satisfied. We maintain open communication throughout the project to ensure your vision is achieved."
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          question: "Do you provide hosting services?",
          answer: "Yes, we offer reliable hosting services with 99.9% uptime guarantee, regular backups, SSL certificates, and security monitoring. We can also work with your existing hosting provider if preferred."
        },
        {
          question: "How do you ensure website security?",
          answer: "We implement multiple security measures: SSL certificates, regular security updates, malware scanning, secure coding practices, and compliance with security standards. We also provide security monitoring and incident response."
        },
        {
          question: "Do you provide SEO optimization?",
          answer: "Yes, we build SEO-friendly websites with proper meta tags, structured data, fast loading times, and mobile optimization. We also provide ongoing SEO services to improve your search engine rankings."
        },
        {
          question: "Can you integrate with third-party services?",
          answer: "Absolutely! We can integrate with payment gateways, CRM systems, email marketing tools, analytics platforms, and other third-party services. We ensure secure and seamless integrations."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(key)) {
      newOpenItems.delete(key);
    } else {
      newOpenItems.add(key);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQ = useMemo(() => {
    if (!searchTerm.trim()) return faqData;

    return faqData.map(category => ({
      ...category,
      questions: category.questions.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);
  }, [searchTerm, faqData]);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and what to expect when working with CyberTree.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="w-6 h-6 text-cyan-400 mr-3" />
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems.has(key);
                  
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <span className="text-white font-medium pr-4">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQ.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No questions found for "{searchTerm}". Try a different search term or contact us directly.
            </p>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 