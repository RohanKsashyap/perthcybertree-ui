import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: billingCycle === 'monthly' ? 200 : 2000,
      originalPrice: billingCycle === 'monthly' ? 250 : 2500,
      features: [
        "Basic website (5-10 pages)",
        "Responsive design",
        "Contact form",
        "SEO optimization",
        "Basic analytics",
        "1 month free support",
        "Domain & hosting setup",
        "SSL certificate"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: billingCycle === 'monthly' ? 500 : 5000,
      originalPrice: billingCycle === 'monthly' ? 650 : 6500,
      features: [
        "Everything in Starter",
        "Custom design",
        "CMS integration",
        "E-commerce functionality",
        "Advanced SEO",
        "3 months free support",
        "Performance optimization",
        "Social media integration",
        "Email marketing setup",
        "Google Analytics"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-500"
    },
    {
      name: "Enterprise",
      description: "For large-scale projects and enterprises",
      price: billingCycle === 'monthly' ? 1200 : 12000,
      originalPrice: billingCycle === 'monthly' ? 1500 : 15000,
      features: [
        "Everything in Professional",
        "Custom functionality",
        "Advanced integrations",
        "Priority support",
        "Performance monitoring",
        "Security audits",
        "Training sessions",
        "Ongoing maintenance",
        "24/7 support",
        "Custom reporting"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: 200,
      period: "month",
      features: [
        "Regular updates",
        "Security patches",
        "Backup management",
        "Email support",
        "Performance monitoring"
      ]
    },
    {
      name: "Premium Maintenance",
      price: 500,
      period: "month",
      features: [
        "Everything in Basic",
        "Priority support",
        "Content updates",
        "SEO optimization",
        "Analytics reports",
        "Phone support"
      ]
    },
    {
      name: "Enterprise Support",
      price: 1000,
      period: "month",
      features: [
        "Everything in Premium",
        "24/7 support",
        "Custom development",
        "Performance optimization",
        "Security monitoring",
        "Dedicated manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our quality guarantee and ongoing support.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative group ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      {billingCycle === 'monthly' && <span className="text-gray-400 ml-2">/month</span>}
                      {billingCycle === 'yearly' && <span className="text-gray-400 ml-2">/year</span>}
                    </div>
                    {plan.originalPrice !== plan.price && (
                      <div className="text-gray-400 line-through text-lg">
                        ${plan.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full bg-gradient-to-r ${plan.color} hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Plans */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Maintenance <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Plans</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Keep your website running smoothly with our comprehensive maintenance packages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {maintenancePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="text-3xl font-bold text-cyan-400">
                  ${plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We understand that every business is unique. Contact us for a custom quote tailored to your specific requirements.
            </p>
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 