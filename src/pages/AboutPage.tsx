import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Smile, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0 h-[40vh]">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 pt-16 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/90">
              We're passionate about bringing delicious, accessible recipes to home cooks everywhere.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img 
                  src="/chef.jpg" 
                  alt="Our team in the kitchen" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white py-3 px-6 rounded-md shadow-lg">
                  <p className="font-display text-lg">Est. 2022</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                Tasty Bites was born from a simple idea: everyone deserves access to delicious, approachable recipes that work every time. Founded by a group of passionate home cooks and professional chefs, we set out to create a platform that makes cooking enjoyable and accessible for everyone, regardless of skill level.
              </p>
              <p className="text-neutral-700 mb-4">
                What started as a small collection of family recipes has grown into a comprehensive resource with thousands of tested and perfected dishes. Our team meticulously develops and tests each recipe to ensure consistent, delicious results in your kitchen.
              </p>
              <p className="text-neutral-700">
                We believe that cooking is more than just following instructions—it's about creativity, connection, and nourishment. That's why we focus on building a community where food lovers can share their experiences and inspire each other.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Tasty Bites.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: "Community",
                description: "We believe cooking brings people together. Our platform fosters a supportive community of food enthusiasts."
              },
              {
                icon: <Award size={32} />,
                title: "Quality",
                description: "We test every recipe multiple times to ensure they're reliable, delicious, and worthy of your table."
              },
              {
                icon: <Smile size={32} />,
                title: "Accessibility",
                description: "Cooking should be enjoyable for everyone. We create recipes with clear instructions for all skill levels."
              },
              {
                icon: <Target size={32} />,
                title: "Innovation",
                description: "We continuously explore new techniques, ingredients, and cuisines to keep your cooking experience fresh and exciting."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 text-primary-500 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The passionate people behind Tasty Bites who work tirelessly to bring you the best recipes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Emma Rodriguez",
                role: "Executive Chef",
                image: "/user.jpeg",
                bio: "With 15 years of culinary experience, Emma oversees recipe development and ensures every dish meets our high standards."
              },
              {
                name: "David Chen",
                role: "Food Photographer",
                image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "David captures the perfect shot of every dish, making our recipes look as good as they taste."
              },
              {
                name: "Sarah Johnson",
                role: "Recipe Developer",
                image: "https://images.pexels.com/photos/5615669/pexels-photo-5615669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Sarah specializes in creating approachable recipes that anyone can make, with a focus on quick weeknight meals."
              },
              {
                name: "Michael Park",
                role: "Culinary Director",
                image: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Michael brings his restaurant experience to home cooking, helping refine techniques for the home kitchen."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 relative overflow-hidden rounded-full aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Join Us Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Culinary Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or seasoned cook, there's a place for you in our community. Start exploring our recipes today.
          </p>
          <button className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-3">
            Explore Recipes
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;