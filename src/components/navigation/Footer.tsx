import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Utensils className="text-primary-400" size={24} />
              <span className="font-display text-xl font-bold text-primary-400">Tasty Bites</span>
            </Link>
            <p className="text-neutral-300">
              Discover delicious recipes and cooking tips to elevate your culinary skills. Our mission is to make cooking accessible and enjoyable for everyone.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/recipes" className="text-neutral-300 hover:text-primary-400 transition-colors">Recipes</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/recipes?category=breakfast" className="text-neutral-300 hover:text-primary-400 transition-colors">Breakfast</Link></li>
              <li><Link to="/recipes?category=lunch" className="text-neutral-300 hover:text-primary-400 transition-colors">Lunch & Dinner</Link></li>
              <li><Link to="/recipes?category=desserts" className="text-neutral-300 hover:text-primary-400 transition-colors">Desserts</Link></li>
              <li><Link to="/recipes?category=vegetarian" className="text-neutral-300 hover:text-primary-400 transition-colors">Vegetarian</Link></li>
              <li><Link to="/recipes?category=quick" className="text-neutral-300 hover:text-primary-400 transition-colors">Quick & Easy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Join Our Newsletter</h4>
            <p className="text-neutral-300 mb-4">Get weekly recipes and cooking tips directly in your inbox.</p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-neutral-800"
                />
                <button 
                  type="submit" 
                  className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Tasty Bites. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
            <Link to="/faq" className="text-neutral-400 hover:text-primary-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;