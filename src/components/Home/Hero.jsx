import { heroData } from "@/data/heroData";
import { motion, AnimatePresence, delay } from "framer-motion";
import { Tag } from "lucide-react";
import { useState, useEffect } from "react";
import RatingStars from "../common/Star";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>  prevIndex === heroData.length - 1 ? 0 : prevIndex + 1);
    }, 5500); 
    

    return () => clearTimeout(timer);
  }, [currentIndex]);


  const hero = heroData[currentIndex]; 

  return (
    <div className="flex bg-gray-200  md:h-[450px] lg:h-[350px] 2xl:h-[500px] rounded-md w-full mt-5 pb-7 py-18 md:py-14">
      <AnimatePresence initial={false} mode="wait">
        {(
          <div className="flex flex-col gap-10 px-5 md:flex-row md:px-0 2xl:px-28 md:gap-5">
            
            <div className="flex flex-col items-start w-[100%] md:w-[50%] gap-5 ps-3">
                <div>
                  <motion.h2 
                      key={hero.id}
                      initial={{ x: -200, opacity: 0, scale: 0.8 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }} 
                      transition={{ duration: 1, ease: "easeInOut" }} 
                      className="text-3xl font-bold leading-none md:text-4xl lg:text-5xl 2xl:text-7xl text-nowrap">{hero.title}</motion.h2>
                  <motion.h2 
                      key={hero.id + hero.secondTitle}
                      initial={{ x: -200, opacity: 0, scale: 0.8 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }} 
                      transition={{ duration: 1, ease: "easeInOut" }} 
                      className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-nowrap text-[#59A52C] ">{hero.secondTitle}</motion.h2>
                </div>
                <motion.p
                  key={hero.id + '-desc'}
                  initial={{ x: -200, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }} 
                  
                  exit={{ opacity: 0, scale: 0.5 }} 
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} 
                  className="text-lg font-medium text-gray-600">{hero.description}</motion.p>

                  <motion.button
                    key={hero.id + '-btn'}
                    initial={{  opacity: 0, scale: 0.3 }}
                    animate={{  opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                    className="bg-white border-2 border-black font-medium py-2
                        rounded-md w-[200px] cursor-pointer text-md">
                        View more
                  </motion.button>
          </div>

         <div className="w-[100%] md:w-[50%] relative ps-4">
              <div className="relative flex justify-end overflow-hidden md:px-0 2xl:px-8">
                <motion.div
                      key={hero.id + hero.title + hero.product.discount }
                      initial={{ opacity:0, scale: 0.5 }}
                      animate={{ opacity:1, scale:1, rotate: [-10, 10] }} 
                      
                      transition={{ duration: 1, rotate: { duration: 1.5,repeat: Infinity, repeatType: "reverse", ease: "easeInOut",} }}
                      className="bg-yellow-400 h-[50px] sm:h-[80px] rounded-full text-black text-sm sm:text-xl w-[50px] sm:w-[80px] absolute font-semibold sm:font-bold right-8 md:right-28 top-2 md:top-7 text-center py-1 sm:py-3 px-2 z-40"
                  >
                      {hero?.product?.discount} <br /> <span>OFF</span>
                </motion.div>
                
                <motion.div
                  key={hero.id + 'img'}
                  initial={{ x:200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut"  }}
                  className="z-10 "
                >
                  <img src={hero.product.image} alt="" className="h-[180px] sm:h-[360px] md:h-[250px] lg:h-[280px] 2xl:h-[450px] "  />
                </motion.div>

                
              </div>
              {/* product card */}
              <motion.div
                  key={hero.id + 'product-card'}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="bg-white rounded-md p-5 w-[300px] sm:w-[400px] md:w-[320px] lg:w-[400px] flex flex-col items-start absolute bottom-0 sm:bottom-25 lg:bottom-0 2xl:bottom-10 left-0 md:left-0 lg:left-16 2xl:left:20 "
                  >
                    
                    <div className="flex items-center gap-1">
                       <Tag size={16} className=""/>
                      <p className="inline-block font-medium text-gray-300">  {hero.product.category}</p>
                    </div>
                    <h3 className="text-[16px] md:text-2xl font-semibold text-[#437d21]">{hero.product.name}</h3>
                    <div className="flex text-nowrap mt-1 items-end"><RatingStars starData={hero.product.rating} />  <span className="text-sm text-gray-500"> ({ hero.product.reviews} reviews)</span></div>
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      ₹{hero.product.price}.00  
                      <span className="text-[15px] sm:text-[18px] font-semibold sm:bg-transparent"> 
                        <strike>₹{hero.product.strikePrice}.00</strike>
                      </span>
                    </h2>
                    <button className="px-3 py-1 mt-3 border rounded-md cursor-pointer">View more</button>
              </motion.div>
           </div>
            
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
