import React, { createContext, useState, useEffect, useCallback } from 'react';
import { toast } from '@/components/ui/use-toast';
import { API_ENDPOINTS } from '../config/api';

export const DataContext = createContext();

const initialData = {
  services: [
    {
      title: "Website Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience."
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional functionality across all devices."
    },
    {
      title: "Custom Solutions",
      description: "Tailored software solutions designed to meet your unique business requirements and goals."
    }
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Cross-platform mobile app for food ordering with real-time tracking.",
      tech: ["React Native", "Firebase", "Stripe"],
    }
  ],
  founder: {
    name: 'Rohan kumar & Rajeshwar Bassi',
    title: 'Founder & CEO',
    bio: 'Both are visionary leaders with over a decade of experience in the tech industry, passionate about bridging the gap between innovative ideas and market-ready digital products.',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  team: [
    {
      name: 'Santosh',
      title: 'Lead Developer',
    },
    {
      name: 'Rohan Mehta',
      title: 'Mobile App Specialist',
    },
    {
      name: 'Priya Singh',
      title: 'UI/UX Designer',
    },
  ],
  testimonials: [
    {
      quote: "CyberTree delivered a stunning website that perfectly captured our brand. Their team was professional and highly skilled!",
      name: "Sarah Chen",
      title: "CEO, Innovate Solutions",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      quote: "Our mobile app developed by CyberTree has significantly boosted our customer engagement. Fantastic work!",
      name: "David Lee",
      title: "Founder, Green Eco Pty Ltd",
      avatar: "https://images.unsplash.com/photo-1544723795-3fb6469e3768"
    },
    {
      quote: "The custom software solution they provided streamlined our operations. Highly recommend CyberTree for complex projects.",
      name: "Jessica White",
      title: "Operations Manager, Global Logistics",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d877341ace"
    },
  ],
  caseStudies: [
    {
      title: "Transforming Retail with an AI-Powered E-commerce Platform",
      problem: "A traditional brick-and-mortar retailer struggled with declining sales and limited online presence, unable to compete with digital-native brands.",
      solution: "CyberTree developed an AI-powered e-commerce platform with personalized recommendations, automated inventory management, and a seamless checkout experience.",
      results: "Achieved a 40% increase in online sales within 6 months, 25% reduction in inventory waste, and a significant improvement in customer retention.",
      image: "https://images.unsplash.com/photo-1483982258100-edab625e14d4"
    },
    {
      title: "Streamlining Healthcare Services with a Patient Management App",
      problem: "A healthcare provider faced inefficiencies in patient scheduling, record keeping, and communication, leading to long wait times and administrative burden.",
      solution: "We designed and built a secure, intuitive mobile application for patient appointments, digital health records, and integrated telehealth features.",
      results: "Reduced patient wait times by 30%, improved administrative efficiency by 20%, and enhanced overall patient satisfaction.",
      image: "https://images.unsplash.com/photo-1576091160399-c5c9945a0046"
    },
  ],
  certifications: [
    { name: "ISO 27001 Certified", logo: "https://images.unsplash.com/photo-1526374965328-98ba43615e0d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ISO 27001 Certification Logo" },
    { name: "Certified Ethical Hacker (CEH)", logo: "https://images.unsplash.com/photo-1518779578643-41484556488a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Certified Ethical Hacker (CEH) Logo" },
    { name: "AWS Partner", logo: "https://images.unsplash.com/photo-1606240724654-fd51bef0adc5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "AWS Partner Logo" },
    { name: "Microsoft Partner", logo: "https://images.unsplash.com/photo-1627398242485-f55a109919f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Microsoft Partner Logo" },
  ],
  industries: [
    { name: "Healthcare", description: "Revolutionizing patient care with secure and efficient digital solutions.", icon: "HeartPulse" },
    { name: "Finance", description: "Building robust and compliant financial applications for secure transactions.", icon: "Banknote" },
    { name: "E-commerce & Retail", description: "Crafting engaging online shopping experiences that boost sales and customer loyalty.", icon: "ShoppingBag" },
    { name: "Education", description: "Developing innovative e-learning platforms and educational tools.", icon: "GraduationCap" },
    { name: "Real Estate", description: "Creating immersive property search platforms and management tools.", icon: "Building" },
    { name: "Logistics & Supply Chain", description: "Optimizing operations with advanced tracking and management systems.", icon: "Truck" },
  ]
};

export const DataProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState(() => {
    const localData = localStorage.getItem('cybertree_testimonials');
    return localData ? JSON.parse(localData) : initialData.testimonials;
  });

  const [caseStudies, setCaseStudies] = useState(() => {
    const localData = localStorage.getItem('cybertree_caseStudies');
    return localData ? JSON.parse(localData) : initialData.caseStudies;
  });

  const [certifications, setCertifications] = useState(() => {
    const localData = localStorage.getItem('cybertree_certifications');
    return localData ? JSON.parse(localData) : initialData.certifications;
  });

  const [industries, setIndustries] = useState(() => {
    const localData = localStorage.getItem('cybertree_industries');
    return localData ? JSON.parse(localData) : initialData.industries;
  });

  const [founder] = useState(initialData.founder);

  useEffect(() => {
    // Function to fetch data without Authorization
    const fetchData = (url) => {
      return fetch(url)  // No headers required now
        .then(res => res.ok ? res.json() : [])
        .then(data => Array.isArray(data) ? data : [])
        .catch(() => []);
    };

    // Fetch services
    fetchData(API_ENDPOINTS.SERVICES)
      .then(data => setServices(data));

    // Fetch projects
    fetchData(API_ENDPOINTS.PROJECTS)
      .then(data => setProjects(data));

    // Fetch employees (team)
    fetchData(API_ENDPOINTS.EMPLOYEES)
      .then(data => setTeam(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('cybertree_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('cybertree_caseStudies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  useEffect(() => {
    localStorage.setItem('cybertree_certifications', JSON.stringify(certifications));
  }, [certifications]);

  useEffect(() => {
    localStorage.setItem('cybertree_industries', JSON.stringify(industries));
  }, [industries]);

  const handleTestimonialSubmit = useCallback(
    (testimonial) => {
      setTestimonials((prevTestimonials) => {
        const updatedTestimonials = [...prevTestimonials, testimonial];
        localStorage.setItem('cybertree_testimonials', JSON.stringify(updatedTestimonials));
        return updatedTestimonials;
      });
      toast({
        title: "Testimonial Added",
        description: "Thank you for submitting your feedback!",
      });
    },
    []
  );

  const handleCaseStudySubmit = useCallback(
    (caseStudy) => {
      setCaseStudies((prevCaseStudies) => {
        const updatedCaseStudies = [...prevCaseStudies, caseStudy];
        localStorage.setItem('cybertree_caseStudies', JSON.stringify(updatedCaseStudies));
        return updatedCaseStudies;
      });
      toast({
        title: "Case Study Added",
        description: "Thank you for sharing your success story!",
      });
    },
    []
  );

  const value = {
    services,
    projects,
    team,
    testimonials,
    caseStudies,
    certifications,
    industries,
    founder,
    handleTestimonialSubmit,
    handleCaseStudySubmit,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
