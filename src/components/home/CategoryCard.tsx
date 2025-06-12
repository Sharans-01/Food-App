import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryProps {
  category: {
    id: string;
    name: string;
    image: string;
    count: number;
  };
  index: number;
}

const CategoryCard: React.FC<CategoryProps> = ({ category, index }) => {
  return (
    <motion.div 
      className="category-card aspect-[4/3] group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/recipes?category=${category.id}`}>
        <div className="relative w-full h-full overflow-hidden">
          {/* Image */}
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all duration-300"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm">{category.count} recipes</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;