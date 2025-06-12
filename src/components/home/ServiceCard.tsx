import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: {
    icon: ReactNode;
    title: string;
    description: string;
  };
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div 
      className="card p-6 hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-primary-50 text-primary-500 p-3 rounded-md inline-flex items-center justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-neutral-600">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;