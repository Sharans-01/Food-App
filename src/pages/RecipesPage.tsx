import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, ChevronDown } from 'lucide-react';
import RecipeCard from '../components/recipes/RecipeCard';
import { recipes, categories } from '../data/recipeData';

const RecipesPage: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const clearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-primary-600 py-20 md:py-32">
        <div className="container-custom">
          <h1 className="text-white text-center mb-6">Explore Our Recipes</h1>
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-5 pl-12 rounded-full border-none focus:ring-2 focus:ring-primary-300 focus:outline-none shadow-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-2xl font-bold mb-2 md:mb-0">All Recipes</h2>
            <button 
              className="flex items-center text-neutral-700 md:hidden"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} className="mr-2" />
              Filters
              <ChevronDown size={18} className={`ml-1 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Desktop Filter (Category Only) */}
          <div className="hidden md:flex gap-4">
            <div className="relative">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="appearance-none bg-white border border-neutral-200 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-400 cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" />
            </div>

            {selectedCategory && (
              <button 
                onClick={clearFilters}
                className="text-sm text-primary-500 hover:text-primary-700 font-medium"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Mobile Filter (Category Only) */}
          <div className={`md:hidden mt-4 bg-white p-4 rounded-lg shadow-md ${isFilterOpen ? 'block' : 'hidden'}`}>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Category</label>
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full bg-white border border-neutral-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            {selectedCategory && (
              <button 
                onClick={clearFilters}
                className="w-full mt-4 py-2 text-center text-primary-500 hover:text-primary-700 font-medium border border-primary-500 rounded-md"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-neutral-600 mb-6">
          Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
        </p>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No recipes found</h3>
            <p className="text-neutral-600 mb-6">Try a different category or search</p>
            <button onClick={clearFilters} className="btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipesPage;
