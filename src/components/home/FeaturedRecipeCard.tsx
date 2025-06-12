import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

interface RecipeProps {
  recipe: {
    id: string;
    title: string;
    image: string;
    rating: number;
    time: number;
    difficulty: string;
    description: string;
  };
  index: number;
}

const FeaturedRecipeCard: React.FC<RecipeProps> = ({ recipe, index }) => {
  return (
    <motion.div 
      className="recipe-card group h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* <Link to={`/recipes/${recipe.id}`} className="block h-full"> */}
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-accent-500 text-white px-2 py-1 rounded text-sm font-medium">
            Featured
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Rating & Time */}
          <div className="flex justify-between mb-2">
            <div className="flex items-center text-sm">
              <Star size={16} className="text-primary-500 mr-1" fill="currentColor" />
              <span>{recipe.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Clock size={16} className="mr-1" />
              <span>{recipe.time} min</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
            {recipe.title}
          </h3>
          
          {/* Description */}
          <p className="text-neutral-600 mb-4 flex-grow">
            {recipe.description}
          </p>
          
          {/* Difficulty
          <div className="text-sm font-medium">
            <span className="text-neutral-700">Difficulty: </span>
            <span className={`
              ${recipe.difficulty === 'Easy' ? 'text-secondary-500' : ''}
              ${recipe.difficulty === 'Medium' ? 'text-primary-500' : ''}
              ${recipe.difficulty === 'Hard' ? 'text-accent-500' : ''}
            `}>
              {recipe.difficulty}
            </span>
          </div> */}
        </div>
      {/* </Link> */}
    </motion.div>
  );
};

export default FeaturedRecipeCard;