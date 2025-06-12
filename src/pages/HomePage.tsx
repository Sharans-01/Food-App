import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChefHat, Utensils, Clock, Book, Star, ArrowRight } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import ServiceCard from '../components/home/ServiceCard';
import CategoryCard from '../components/home/CategoryCard';
import FeaturedRecipeCard from '../components/home/FeaturedRecipeCard';
// import TestimonialSlider from '../components/home/TestimonialSlider';

const HomePage: React.FC = () => {
 const services = [
  {
    icon: <ChefHat size={32} />,
    title: 'Expert Chefs',
    description: 'Our dishes are crafted by professional chefs with authentic culinary experience.'
  },
  {
    icon: <Utensils size={32} />,
    title: 'Dine-In & Takeaway',
    description: 'Enjoy your favorite meals at our restaurant or conveniently take them to-go.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Quick Service',
    description: 'Fresh food served fast, ensuring you never wait long for a delicious experience.'
  },
  {
    icon: <Book size={32} />,
    title: 'Custom Orders',
    description: 'Personalize your meals to match your taste, spice level, and dietary needs.'
  },
  
];

  const categories = [
    {
      id: 'biryani',
      name: 'Briyani',
      image: '/biryani/ambur.jpg',
      count: 7
    },
    {
      id: 'chicken',
      name: 'Chicken',
      image: '/chicken/lollipop.jpg',
      count: 10
    },
    {
      id: 'burger',
    name: 'Burger',
     image: '/burger/beef1.jpeg',
      count: 8
    },
    {
      id: 'dessert',
    name: 'Dessert',
      image: '/dessert/brownie.jpg',
      count: 12
    }
  ];

  const featuredRecipes = [
    {
      id: '1',
      title: 'Hyderabadi Biryani',
      image: '/biryani/hyderabadi.jpg',
      rating: 4.8,
      time: 25,
      difficulty: 'Medium',
      description: 'Aromatic basmati rice cooked with marinated chicken in rich spices, layered and slow-cooked in traditional dum style.'
    },
    {
      id: '2',
      title: 'Chicken Tandoori',
      image: '/chicken/tandoori.jpg',
      rating: 4.9,
      time: 40,
      difficulty: 'Medium',
      description:  'Whole chicken leg quarters marinated in yogurt and tandoori spices, grilled to smoky perfection.'
    },
    {
      id: '3',
      title: 'Barbeque Pizza',
      image: '/pizza/bbq.jpg',
      rating: 4.7,
      time: 20,
      difficulty: 'Easy',
      description: 'A quick and flavorful Thai stir-fry with chicken, fresh basil, and a spicy sauce.'
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* Our Services Section */}
      <section id="services" className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              From step-by-step recipes to meal planning tips, we provide everything you need to enhance your culinary journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Recipes Section */}
      <section id="featured-recipes" className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Special Recipes</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover our most popular and highly-rated recipes loved by our community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <FeaturedRecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/recipes" className="btn-primary inline-flex items-center">
              View All Recipes
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="section bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Recipe Categories</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Browse our recipes by category to find exactly what you're looking for.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section
      <section id="testimonials" className="section bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              See what our community has to say about their cooking experiences with Tasty Bites.
            </p>
          </motion.div>
          
          <TestimonialSlider />
        </div>
      </section>
       */}
      {/* Call to Action Section */}
      {/* Call to Action Section */}
<section className="py-16 bg-primary-600 text-white">
  <div className="container-custom text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Hungry? Let’s Serve You Something Delicious!</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Explore our wide range of mouthwatering dishes made by expert chefs. Order now or visit us today!
    </p>
    <Link to="/recipes" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-3">
      View Our Menu
    </Link>
  </div>
</section>

    </>
  );
};

export default HomePage;