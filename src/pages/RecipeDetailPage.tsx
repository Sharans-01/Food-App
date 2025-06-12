// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft, Clock, Users, ChefHat, Bookmark, Star, Printer, Share2 } from 'lucide-react';
// import { recipes } from '../data/recipeData';

// const RecipeDetailPage: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [recipe, setRecipe] = useState<any>(null);
//   const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');
  
//   useEffect(() => {
//     if (id) {
//       const foundRecipe = recipes.find(r => r.id === id);
//       setRecipe(foundRecipe);
      
//       // Set page title
//       if (foundRecipe) {
//         document.title = `${foundRecipe.title} | Tasty Bites`;
//       }
//     }
    
//     return () => {
//       document.title = 'Tasty Bites';
//     };
//   }, [id]);
  
//   if (!recipe) {
//     return (
//       <div className="container-custom py-20 text-center">
//         <h2 className="text-3xl mb-4">Recipe not found</h2>
//         <p className="mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
//         <Link to="/recipes" className="btn-primary">
//           Browse All Recipes
//         </Link>
//       </div>
//     );
//   }
  
//   return (
//     <>
//       {/* Recipe Hero */}
//       <div className="relative pt-16">
//         <div className="absolute inset-0 z-0 h-[60vh]">
//           <div 
//             className="w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: `url('${recipe.image}')` }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
//           </div>
//         </div>
        
//         <div className="container-custom relative z-10 pt-12 md:pt-20 pb-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-4xl mx-auto text-white"
//           >
//             <Link to="/recipes" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
//               <ArrowLeft size={18} className="mr-2" />
//               Back to recipes
//             </Link>
            
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
            
//             <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
//               <div className="flex items-center">
//                 <Clock size={18} className="mr-2" />
//                 <span>{recipe.time} minutes</span>
//               </div>
//               <div className="flex items-center">
//                 <ChefHat size={18} className="mr-2" />
//                 <span>{recipe.difficulty}</span>
//               </div>
//               <div className="flex items-center">
//                 <Users size={18} className="mr-2" />
//                 <span>{recipe.servings} servings</span>
//               </div>
//               <div className="flex items-center">
//                 <Star size={18} className="mr-1" fill="currentColor" />
//                 <span>{recipe.rating.toFixed(1)}</span>
//               </div>
//             </div>
            
//             <p className="text-lg text-white/90 max-w-3xl">{recipe.description}</p>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Recipe Content */}
//       <div className="bg-white py-12">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto">
//             {/* Action Buttons */}
//             <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
//               <div className="flex gap-2">
//                 <button className="btn-primary">
//                   <Bookmark size={18} className="mr-2" />
//                   Save Recipe
//                 </button>
//                 <button className="btn-outline">
//                   Start Cooking
//                 </button>
//               </div>
              
//               <div className="flex gap-2">
//                 <button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors" aria-label="Print recipe">
//                   <Printer size={20} className="text-neutral-700" />
//                 </button>
//                 <button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors" aria-label="Share recipe">
//                   <Share2 size={20} className="text-neutral-700" />
//                 </button>
//               </div>
//             </div>
            
//             {/* Tabs */}
//             <div className="border-b border-neutral-200 mb-8">
//               <div className="flex">
//                 <button
//                   className={`py-3 px-4 font-medium text-lg border-b-2 transition-colors ${
//                     activeTab === 'ingredients' 
//                       ? 'border-primary-500 text-primary-500' 
//                       : 'border-transparent text-neutral-500 hover:text-neutral-800'
//                   }`}
//                   onClick={() => setActiveTab('ingredients')}
//                 >
//                   Ingredients
//                 </button>
//                 <button
//                   className={`py-3 px-4 font-medium text-lg border-b-2 transition-colors ${
//                     activeTab === 'instructions' 
//                       ? 'border-primary-500 text-primary-500' 
//                       : 'border-transparent text-neutral-500 hover:text-neutral-800'
//                   }`}
//                   onClick={() => setActiveTab('instructions')}
//                 >
//                   Instructions
//                 </button>
//               </div>
//             </div>
            
//             {/* Tab Content */}
//             <div className="mb-12">
//               {activeTab === 'ingredients' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h2 className="text-2xl font-bold mb-6">Ingredients</h2>
//                   <p className="text-neutral-600 mb-6">For {recipe.servings} servings</p>
                  
//                   <ul className="space-y-3">
//                     {recipe.ingredients.map((ingredient: string, index: number) => (
//                       <li key={index} className="flex items-baseline gap-3 pb-2 border-b border-neutral-100">
//                         <input type="checkbox" className="mt-1" />
//                         <span>{ingredient}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               )}
              
//               {activeTab === 'instructions' && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <h2 className="text-2xl font-bold mb-6">Step by Step Instructions</h2>
                  
//                   <ol className="space-y-8">
//                     {recipe.instructions.map((instruction: string, index: number) => (
//                       <li key={index} className="flex gap-4">
//                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-500 font-bold flex items-center justify-center">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <p className="text-neutral-800">{instruction}</p>
//                         </div>
//                       </li>
//                     ))}
//                   </ol>
//                 </motion.div>
//               )}
//             </div>
            
//             {/* Nutrition Facts */}
//             <div className="bg-neutral-50 rounded-lg p-6 mb-12">
//               <h2 className="text-xl font-bold mb-4">Nutrition Facts</h2>
//               <p className="text-neutral-600 text-sm mb-4">Per serving</p>
              
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {recipe.nutrition.map((item: { name: string, value: string }, index: number) => (
//                   <div key={index} className="text-center p-3 bg-white rounded-md shadow-sm">
//                     <p className="text-neutral-500 text-sm">{item.name}</p>
//                     <p className="text-lg font-bold text-neutral-800">{item.value}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Tags */}
//             <div className="mb-12">
//               <h3 className="text-lg font-medium mb-3">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 {recipe.tags.map((tag: string, index: number) => (
//                   <Link 
//                     key={index} 
//                     to={`/recipes?tag=${tag.toLowerCase()}`}
//                     className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-neutral-700 text-sm transition-colors"
//                   >
//                     {tag}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Similar Recipes Section */}
//       <div className="bg-neutral-50 py-12">
//         <div className="container-custom">
//           <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {recipes
//               .filter(r => r.id !== recipe.id && r.category === recipe.category)
//               .slice(0, 3)
//               .map((similarRecipe, index) => (
//                 <Link 
//                   key={similarRecipe.id} 
//                   to={`/recipes/${similarRecipe.id}`}
//                   className="group block"
//                 >
//                   <div className="recipe-card h-full flex flex-col">
//                     <div className="relative aspect-video overflow-hidden">
//                       <img 
//                         src={similarRecipe.image} 
//                         alt={similarRecipe.title} 
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
//                       />
//                     </div>
//                     <div className="p-4 flex-grow">
//                       <div className="flex justify-between items-center mb-2">
//                         <div className="flex items-center">
//                           <Star size={16} className="text-primary-500 mr-1" fill="currentColor" />
//                           <span className="text-sm">{similarRecipe.rating.toFixed(1)}</span>
//                         </div>
//                         <div className="flex items-center text-sm text-neutral-600">
//                           <Clock size={16} className="mr-1" />
//                           <span>{similarRecipe.time} min</span>
//                         </div>
//                       </div>
//                       <h3 className="font-bold group-hover:text-primary-500 transition-colors">
//                         {similarRecipe.title}
//                       </h3>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RecipeDetailPage;