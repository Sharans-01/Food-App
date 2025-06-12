import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 z-0 h-[40vh]">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/4049786/pexels-photo-4049786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have questions, feedback, or recipe suggestions? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 text-primary-500 p-3 rounded-md mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p className="text-neutral-600">
                      123 Culinary Street<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 text-primary-500 p-3 rounded-md mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-neutral-600">
                      hello@tastybites.com<br />
                      support@tastybites.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 text-primary-500 p-3 rounded-md mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-neutral-600">
                      +1 (555) 123-4567<br />
                      Mon-Fri: 9am-5pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 text-primary-500 p-3 rounded-md mr-4">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        <Instagram size={22} />
                      </a>
                      <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        <Facebook size={22} />
                      </a>
                      <a href="#" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        <Twitter size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-neutral-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:outline-none transition"
                        placeholder="Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:outline-none transition"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:outline-none transition"
                      placeholder="Recipe suggestion"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 focus:outline-none transition"
                      placeholder="Type your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our recipes and services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              // {
              //   question: "How do I save a recipe to my favorites?",
              //   answer: "Simply click the bookmark icon on any recipe page. You can view all your saved recipes in your profile under 'Saved Recipes'."
              // },
              {
                question: "Can I submit my own recipe?",
                answer: "Yes! We welcome community submissions. Use the 'Submit Recipe' form in your account dashboard. Our team will review and may feature it on our site."
              },
              {
                question: "Are there options for dietary restrictions?",
                answer: "Absolutely. You can filter recipes by dietary preferences including vegetarian, vegan, gluten-free, dairy-free, and more using our search filters."
              },
              {
                question: "How often are new recipes added?",
                answer: "We add new recipes several times per week. Subscribe to our newsletter to get updates on the latest additions to our collection."
              },
              {
                question: "Can I adjust serving sizes for recipes?",
                answer: "Yes, most recipes include a serving size adjuster that will automatically recalculate ingredient quantities based on your needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown />
                    </span>
                  </summary>
                  <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Tasty Bites</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly recipe inspiration, cooking tips, and exclusive content delivered directly to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-neutral-800"
              required
            />
            <button
              type="submit"
              className="bg-secondary-500 hover:bg-secondary-600 px-6 py-3 rounded-r-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

const ChevronDown: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);