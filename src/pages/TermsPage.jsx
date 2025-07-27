import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, Users, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsPage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "By accessing and using CyberTree's services, you agree to be bound by these Terms of Service",
        "These terms apply to all services provided by CyberTree, including website development, mobile app development, and consulting services",
        "We reserve the right to modify these terms at any time, with notice provided to clients",
        "Continued use of our services after changes constitutes acceptance of the new terms"
      ]
    },
    {
      title: "Service Description",
      icon: <Users className="w-6 h-6" />,
      content: [
        "CyberTree provides custom website development, mobile application development, and digital consulting services",
        "Services include design, development, testing, deployment, and post-launch support",
        "Project scope and deliverables are defined in individual project agreements",
        "We commit to delivering high-quality, professional solutions within agreed timelines"
      ]
    },
    {
      title: "Payment Terms",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Payment terms are specified in individual project agreements",
        "Typically, we require a 50% deposit to begin work, with remaining balance due upon project completion",
        "All prices are quoted in Australian Dollars (AUD) unless otherwise specified",
        "Late payments may result in project delays or suspension of services"
      ]
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Upon full payment, clients own the final deliverables and source code",
        "CyberTree retains rights to portfolio use of completed projects",
        "Third-party components and libraries remain under their respective licenses",
        "We maintain confidentiality of client information and project details"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "CyberTree's liability is limited to the amount paid for services",
        "We are not liable for indirect, incidental, or consequential damages",
        "Clients are responsible for providing accurate project requirements",
        "We recommend maintaining backups of all project files and data"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - CyberTree</title>
        <meta name="description" content="Read CyberTree's terms of service and understand our service agreements and policies." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Button asChild variant="outline" className="mb-6 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Terms of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These terms govern your use of CyberTree's services and outline our mutual obligations.
              </p>
              <div className="text-sm text-gray-400 mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-cyan-400 mr-4">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Project Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Development Phases</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Discovery & Requirements Gathering</li>
                    <li>• Design & Prototyping</li>
                    <li>• Development & Testing</li>
                    <li>• Deployment & Launch</li>
                    <li>• Post-launch Support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Client Responsibilities</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Provide clear project requirements</li>
                    <li>• Review and approve deliverables</li>
                    <li>• Provide timely feedback</li>
                    <li>• Maintain project communication</li>
                    <li>• Fulfill payment obligations</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Warranty & Support</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Warranty Period:</strong> We provide a 30-day warranty period after project completion for bug fixes and minor adjustments.
                </p>
                <p>
                  <strong>Support Services:</strong> Ongoing support and maintenance services are available under separate agreements.
                </p>
                <p>
                  <strong>Third-party Services:</strong> We are not responsible for issues arising from third-party services, hosting, or domain providers.
                </p>
                <p>
                  <strong>Updates & Maintenance:</strong> Regular updates and security patches are recommended to maintain optimal performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Either party may terminate a project agreement with written notice. Upon termination:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Client is responsible for payment of work completed to date</li>
                  <li>• CyberTree will deliver all completed work and source code</li>
                  <li>• Confidentiality obligations remain in effect</li>
                  <li>• Intellectual property rights are transferred as per agreement</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                For questions about these Terms of Service or to discuss your project:
              </p>
              <div className="space-y-3 text-gray-300">
                <div>
                  <strong>Email:</strong> cybertreeindia001@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> +91 7087383637
                </div>
                <div>
                  <strong>Address:</strong> Perth, Australia
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss your project and create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium">
                    <Link to="/#contact">
                      Start Your Project
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-medium">
                    <Link to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage; 