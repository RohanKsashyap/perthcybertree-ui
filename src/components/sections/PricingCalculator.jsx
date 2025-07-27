import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCalculator = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    complexity: 'medium',
    pages: 5,
    features: [],
    timeline: 'normal',
    design: 'standard',
    integrations: []
  });

  const projectTypes = [
    { id: 'website', name: 'Website', basePrice: 2000 },
    { id: 'ecommerce', name: 'E-commerce', basePrice: 5000 },
    { id: 'webapp', name: 'Web Application', basePrice: 8000 },
    { id: 'mobile', name: 'Mobile App', basePrice: 12000 },
    { id: 'custom', name: 'Custom Solution', basePrice: 15000 }
  ];

  const complexityMultipliers = {
    simple: 0.7,
    medium: 1.0,
    complex: 1.5,
    enterprise: 2.5
  };

  const features = [
    { id: 'cms', name: 'CMS Integration', price: 500 },
    { id: 'seo', name: 'SEO Optimization', price: 300 },
    { id: 'analytics', name: 'Analytics Setup', price: 200 },
    { id: 'payment', name: 'Payment Gateway', price: 800 },
    { id: 'chat', name: 'Live Chat', price: 400 },
    { id: 'email', name: 'Email Marketing', price: 300 },
    { id: 'social', name: 'Social Media Integration', price: 250 },
    { id: 'api', name: 'API Development', price: 1000 },
    { id: 'security', name: 'Advanced Security', price: 600 },
    { id: 'backup', name: 'Automated Backups', price: 200 }
  ];

  const integrations = [
    { id: 'stripe', name: 'Stripe Payment', price: 300 },
    { id: 'paypal', name: 'PayPal', price: 200 },
    { id: 'mailchimp', name: 'Mailchimp', price: 150 },
    { id: 'hubspot', name: 'HubSpot CRM', price: 400 },
    { id: 'zapier', name: 'Zapier Integration', price: 250 },
    { id: 'google', name: 'Google Services', price: 200 },
    { id: 'facebook', name: 'Facebook Pixel', price: 150 },
    { id: 'slack', name: 'Slack Integration', price: 200 }
  ];

  const timelineMultipliers = {
    urgent: 1.5,
    normal: 1.0,
    relaxed: 0.8
  };

  const designMultipliers = {
    basic: 0.8,
    standard: 1.0,
    premium: 1.3,
    custom: 1.6
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleIntegrationToggle = (integrationId) => {
    setFormData(prev => ({
      ...prev,
      integrations: prev.integrations.includes(integrationId)
        ? prev.integrations.filter(id => id !== integrationId)
        : [...prev.integrations, integrationId]
    }));
  };

  const calculatePrice = useMemo(() => {
    if (!formData.projectType) return 0;

    const selectedProject = projectTypes.find(p => p.id === formData.projectType);
    if (!selectedProject) return 0;

    let basePrice = selectedProject.basePrice;

    // Complexity multiplier
    basePrice *= complexityMultipliers[formData.complexity];

    // Pages multiplier (for websites)
    if (formData.projectType === 'website' || formData.projectType === 'ecommerce') {
      const pageMultiplier = Math.max(1, formData.pages / 5);
      basePrice *= pageMultiplier;
    }

    // Features
    const featuresCost = formData.features.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature ? feature.price : 0);
    }, 0);

    // Integrations
    const integrationsCost = formData.integrations.reduce((total, integrationId) => {
      const integration = integrations.find(i => i.id === integrationId);
      return total + (integration ? integration.price : 0);
    }, 0);

    // Timeline multiplier
    basePrice *= timelineMultipliers[formData.timeline];

    // Design multiplier
    basePrice *= designMultipliers[formData.design];

    return Math.round(basePrice + featuresCost + integrationsCost);
  }, [formData]);

  const calculateTimeline = useMemo(() => {
    if (!formData.projectType) return 0;

    const baseTimelines = {
      website: 4,
      ecommerce: 8,
      webapp: 12,
      mobile: 16,
      custom: 20
    };

    let timeline = baseTimelines[formData.projectType] || 8;

    // Complexity adjustments
    if (formData.complexity === 'simple') timeline *= 0.7;
    if (formData.complexity === 'complex') timeline *= 1.3;
    if (formData.complexity === 'enterprise') timeline *= 1.8;

    // Timeline urgency
    if (formData.timeline === 'urgent') timeline *= 0.6;
    if (formData.timeline === 'relaxed') timeline *= 1.2;

    return Math.round(timeline);
  }, [formData]);

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Project <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Calculator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an instant estimate for your project. Customize your requirements and see real-time pricing updates.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Project Type */}
            <div>
              <label className="block text-white font-medium mb-4">Project Type</label>
              <div className="grid grid-cols-2 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleInputChange('projectType', type.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      formData.projectType === type.id
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                        : 'border-white/20 bg-white/5 text-white hover:border-cyan-400/50'
                    }`}
                  >
                    <div className="font-medium">{type.name}</div>
                    <div className="text-sm text-gray-400">From ${type.basePrice}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div>
              <label className="block text-white font-medium mb-4">Project Complexity</label>
              <select
                value={formData.complexity}
                onChange={(e) => handleInputChange('complexity', e.target.value)}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="simple">Simple</option>
                <option value="medium">Medium</option>
                <option value="complex">Complex</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            {/* Pages (for websites) */}
            {(formData.projectType === 'website' || formData.projectType === 'ecommerce') && (
              <div>
                <label className="block text-white font-medium mb-4">
                  Number of Pages: {formData.pages}
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={formData.pages}
                  onChange={(e) => handleInputChange('pages', parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>
            )}

            {/* Design Level */}
            <div>
              <label className="block text-white font-medium mb-4">Design Level</label>
              <select
                value={formData.design}
                onChange={(e) => handleInputChange('design', e.target.value)}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-white font-medium mb-4">Timeline</label>
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="relaxed">Relaxed (No Rush)</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgent (Rush)</option>
              </select>
            </div>

            {/* Features */}
            <div>
              <label className="block text-white font-medium mb-4">Additional Features</label>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className="flex items-center space-x-3 p-3 bg-white/5 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 rounded focus:ring-cyan-400"
                    />
                    <div>
                      <div className="text-white text-sm font-medium">{feature.name}</div>
                      <div className="text-gray-400 text-xs">+${feature.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Integrations */}
            <div>
              <label className="block text-white font-medium mb-4">Third-party Integrations</label>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <label
                    key={integration.id}
                    className="flex items-center space-x-3 p-3 bg-white/5 border border-white/20 rounded-lg cursor-pointer hover:border-cyan-400/50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.integrations.includes(integration.id)}
                      onChange={() => handleIntegrationToggle(integration.id)}
                      className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 rounded focus:ring-cyan-400"
                    />
                    <div>
                      <div className="text-white text-sm font-medium">{integration.name}</div>
                      <div className="text-gray-400 text-xs">+${integration.price}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Estimate */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8 sticky top-8">
              <div className="text-center mb-8">
                <Calculator className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Project Estimate</h3>
                <p className="text-gray-400">Based on your selections</p>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    ${calculatePrice.toLocaleString()}
                  </div>
                  <div className="text-gray-400">Estimated Cost</div>
                </div>

                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-medium">{calculateTimeline}</div>
                    <div className="text-gray-400 text-sm">Weeks</div>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-medium">
                      ${Math.round(calculatePrice / calculateTimeline).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Per Week</div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-white font-medium mb-4">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Custom design and development</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Testing and quality assurance</li>
                    <li>• Deployment and setup</li>
                    <li>• 1 month of free support</li>
                    <li>• Training and documentation</li>
                  </ul>
                </div>

                <Button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 rounded-xl font-medium"
                >
                  Get Detailed Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  * This is an estimate. Final pricing may vary based on specific requirements and scope.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator; 