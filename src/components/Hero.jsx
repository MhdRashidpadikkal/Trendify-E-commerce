import { heroData } from "@/data/heroData";
import { motion, AnimatePresence } from "framer-motion";
import { Tag } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("hero data length: " + heroData.length);
  

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>  prevIndex === heroData.length - 1 ? 0 : prevIndex + 1);
    }, 5500); 

    return () => clearTimeout(timer);
  }, [currentIndex]);

  console.log("current index is " + currentIndex);
  const hero = heroData[currentIndex];
  console.log("hero is " + hero?.product?.discount);

  return (
    <div className="flex bg-gray-100 h-[700px] md:h-[450px] 2xl:h-[500px] justify-center rounded-md w-full mt-5 pb-7 py-18 md:py-14">
      <AnimatePresence>
        {(
          <div className="flex flex-col md:flex-row px-14 md:px-0 2xl:px-28 gap-10 md:gap-5">
            
            <div className="flex flex-col items-start w-[100%] md:w-[50%] gap-5 ps-3">
                <div>
                  <motion.h2 
                      key={hero.id}
                      initial={{ x: -200, opacity: 0, scale: 0.8 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }} 
                      transition={{ duration: 1, ease: "easeInOut" }} 
                      className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-bold text-nowrap leading-none">{hero.title}</motion.h2>
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
                  className="text-gray-600 text-lg font-medium">{hero.description}</motion.p>

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
              <div className="flex h-[400px] relative justify-end md:px-0 2xl:px-8 ">
                <motion.div
                      key={hero.id + hero.title + hero.product.discount }
                      initial={{ opacity:0, scale: 0.5 }}
                      animate={{ opacity:1, scale:1, rotate: [-10, 10] }} 
                      
                      transition={{ duration: 1, rotate: { duration: 1.5,repeat: Infinity, repeatType: "reverse", ease: "easeInOut"} }}
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
                  className="bg-white rounded-md p-5 w-[300px] sm:w-[400px] md:w-[320px] lg:w-[400px] flex flex-col items-start absolute bottom-50 sm:bottom-25 2xl:bottom-10 left-0 md:left-0 2xl:left:20 "
                  >
                    
                    <div className="flex gap-1 items-center">
                       <Tag size={16} className=""/>
                      <p className="text-gray-300 font-medium inline-block">  {hero.product.category}</p>
                    </div>
                    <h3 className="text-[20px] md:text-2xl font-semibold text-[#437d21]">{hero.product.name}</h3>
                    <div>Stars  <span className="text-gray-500 text-sm"> ({ hero.product.reviews} reviews)</span></div>
                    <h2 className="text-3xl font-bold">₹{hero.product.price}.00  <span className="text-[18px] font-semibold"> <strike>₹{hero.product.strikePrice}.00</strike></span></h2>
                    <button className="border rounded-md px-3 py-1 mt-3 cursor-pointer">View more</button>
              </motion.div>
           </div>
            
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
