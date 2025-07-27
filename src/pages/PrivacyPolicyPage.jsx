import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: [
        "Personal information (name, email, phone number) when you contact us",
        "Project requirements and specifications you provide",
        "Website usage data and analytics",
        "Communication records between you and our team",
        "Payment information (processed securely through third-party providers)"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6" />,
      content: [
        "To provide our services and fulfill project requirements",
        "To communicate with you about your project",
        "To improve our services and website experience",
        "To send you relevant updates and marketing materials (with your consent)",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Information Sharing",
      icon: <Lock className="w-6 h-6" />,
      content: [
        "We do not sell, trade, or rent your personal information",
        "We may share information with trusted third-party service providers",
        "Information may be disclosed if required by law",
        "We maintain strict confidentiality agreements with all partners",
        "Your data is protected by industry-standard security measures"
      ]
    },
    {
      title: "Data Security",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "We implement appropriate security measures to protect your data",
        "All data is encrypted during transmission and storage",
        "Regular security audits and updates are performed",
        "Access to personal information is limited to authorized personnel",
        "We maintain backup and recovery procedures"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - CyberTree</title>
        <meta name="description" content="Learn how CyberTree protects and handles your personal information and data privacy." />
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
                Privacy <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Access & Control</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Request access to your personal data</li>
                    <li>• Request correction of inaccurate data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Object to processing of your data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Communication</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Update your communication preferences</li>
                    <li>• Request data portability</li>
                    <li>• Lodge a complaint with authorities</li>
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
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 mb-6">
                  We're committed to protecting your privacy while delivering exceptional results.
                </p>
                <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium">
                  <Link to="/#contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage; 