// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600',
//     role: 'Home Cook',
//     rating: 5,
//     text: 'The recipes on Tasty Bites are amazing! They\'re easy to follow and always turn out delicious. My family now gets excited when they hear I\'m trying a new recipe from this site.'
//   },
//   {
//     id: 2,
//     name: 'Marcus Chen',
//     image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
//     role: 'Food Enthusiast',
//     rating: 4,
//     text: 'I\'ve been using Tasty Bites for the past six months and my cooking skills have improved significantly. The step-by-step instructions and tips are incredibly helpful.'
//   },
//   {
//     id: 3,
//     name: 'Sarah Williams',
//     image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
//     role: 'Busy Parent',
//     rating: 5,
//     text: 'As a busy mom of three, I need quick and reliable recipes. Tasty Bites has been a lifesaver with their 30-minute meal section. Everything is delicious and kid-approved!'
//   }
// ];

// const TestimonialSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };
  
//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };
  
//   const currentTestimonial = testimonials[currentIndex];
  
//   return (
//     <div className="relative max-w-4xl mx-auto">
//       <div className="bg-white rounded-xl shadow-md overflow-hidden">
//         <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
//           {/* Image */}
//           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary-100">
//             <img 
//               src={currentTestimonial.image} 
//               alt={currentTestimonial.name} 
//               className="w-full h-full object-cover"
//             />
//           </div>
          
//           {/* Content */}
//           <div className="flex-grow">
//             <div className="text-primary-500 mb-4">
//               <Quote size={36} />
//             </div>
            
//             <motion.p 
//               key={currentTestimonial.id}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-lg text-neutral-700 italic mb-6"
//             >
//               {currentTestimonial.text}
//             </motion.p>
            
//             <div className="flex items-center">
//               <div>
//                 <h4 className="font-bold text-xl">{currentTestimonial.name}</h4>
//                 <p className="text-neutral-500">{currentTestimonial.role}</p>
//               </div>
//               <div className="ml-auto flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} filled={i < currentTestimonial.rating} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Navigation Buttons */}
//       <div className="flex justify-center mt-8 space-x-4">
//         <button 
//           onClick={goToPrevious}
//           className="p-2 rounded-full bg-white shadow hover:bg-primary-50 transition-colors"
//           aria-label="Previous testimonial"
//         >
//           <ChevronLeft size={24} className="text-primary-500" />
//         </button>
        
//         <div className="flex space-x-2 items-center">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full ${
//                 index === currentIndex ? 'bg-primary-500 w-4' : 'bg-neutral-300'
//               } transition-all duration-300`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
        
//         <button 
//           onClick={goToNext}
//           className="p-2 rounded-full bg-white shadow hover:bg-primary-50 transition-colors"
//           aria-label="Next testimonial"
//         >
//           <ChevronRight size={24} className="text-primary-500" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // Star component
// const Star: React.FC<{ filled: boolean }> = ({ filled }) => {
//   return (
//     <svg 
//       xmlns="http://www.w3.org/2000/svg" 
//       width="20" 
//       height="20" 
//       viewBox="0 0 24 24" 
//       fill={filled ? "currentColor" : "none"}
//       stroke="currentColor" 
//       strokeWidth="2" 
//       strokeLinecap="round" 
//       strokeLinejoin="round" 
//       className={filled ? "text-primary-500" : "text-neutral-300"}
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
//     </svg>
//   );
// };

// export default TestimonialSlider;