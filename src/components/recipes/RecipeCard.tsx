import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Star, Bookmark } from 'lucide-react';

interface RecipeProps {
  recipe: {
    id: string;
    title: string;
    image: string;
    rating: number;
    time: number;
    difficulty: string;
    description: string;
    cost: number;
  };
  index: number;
}

const RecipeCard: React.FC<RecipeProps> = ({ recipe, index }) => {
  return (
    <motion.div 
      className="recipe-card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        <button 
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-neutral-700 p-1.5 rounded-full transition-colors"
          aria-label="Save recipe"
        >
          <Bookmark size={16} />
        </button>
        
        <div className={`absolute top-3 left-3 text-white text-xs font-medium px-2 py-1 rounded ${
          recipe.difficulty === 'Easy' ? 'bg-secondary-500' : 
          recipe.difficulty === 'Medium' ? 'bg-primary-500' : 
          'bg-accent-500'
        }`}>
          {recipe.difficulty}
        </div>
      </div>
      
      <Link to={`/recipes/${recipe.id}`} className="flex-grow flex flex-col p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Star size={16} className="text-primary-500 mr-1" fill="currentColor" />
            <span className="text-sm">{recipe.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center text-sm text-neutral-600">
            <Clock size={16} className="mr-1" />
            <span>{recipe.time} min</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors">
          {recipe.title}
        </h3>
        
        <p className="text-neutral-600 text-sm flex-grow">
          {recipe.description.length > 100 
            ? `${recipe.description.substring(0, 100)}...` 
            : recipe.description}
        </p>
        
        {/* <div className="mt-4 flex justify-between items-center">
          <span className="text-primary-500 text-sm font-medium hover:underline">
            View Recipe
          </span>
          <span className="text-neutral-700 font-medium">
            ${recipe.cost.toFixed(2)}
          </span>
        </div> */}
      </Link>
    </motion.div>
  );
};

export default RecipeCard;