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
    <div className="flex bg-gray-100 h-[450px] justify-center rounded-md w-full items-center mt-5 pb-7">
      <AnimatePresence>
        {(
          <>
            
            <div className="flex flex-col items-start w-[50%] px-28 gap-4">
                
                

                <motion.h2 
                    key={hero.id}
                    initial={{ x: -200, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }} 
                    transition={{ duration: 1, ease: "easeInOut" }} 
                    className="text-7xl font-bold">{hero.title}</motion.h2>
                <motion.h2 
                    key={hero.id + hero.secondTitle}
                    initial={{ x: -200, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }} 
                    transition={{ duration: 1, ease: "easeInOut" }} 
                    className="text-7xl font-bold text-[#59A52C]">{hero.secondTitle}</motion.h2>
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

           <div className="w-[50%] relative">
              <div className="flex h-[400px] relative justify-end px-20">
                <motion.div
                      key={hero.id + hero.title + hero.product.discount }
                      initial={{ opacity:0, scale: 0.5 }}
                      animate={{ opacity:1, scale:1, rotate: [-10, 10] }} 
                      
                      transition={{ duration: 1, rotate: { duration: 1.5,repeat: Infinity, repeatType: "reverse", ease: "easeInOut"} }}
                      className="bg-yellow-400 h-[80px] rounded-full text-black text-xl w-[80px] absolute font-bold right-28 top-7 text-center py-3 px-2 z-40"
                  >
                      {hero?.product?.discount} <br /> OFF
                </motion.div>
                
                <motion.div
                  key={hero.id + 'img'}
                  initial={{ x:200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut"  }}
                  className="z-10"
                >
                  <img src={hero.product.image} alt="" className="h-[450px]"  />
                </motion.div>

                
              </div>
              {/* product card */}
              <motion.div
                  key={hero.id + 'product-card'}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="bg-white rounded-md p-5 w-[400px] flex flex-col items-start absolute bottom-10 left-20 "
                  >
                    
                    <div className="flex gap-1 items-center">
                       <Tag size={16} className=""/>
                      <p className="text-gray-300 font-medium inline-block">  {hero.product.category}</p>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#437d21]">{hero.product.name}</h3>
                    <div>Stars  <span className="text-gray-500 text-sm"> ({ hero.product.reviews} reviews)</span></div>
                    <h2 className="text-3xl font-bold">₹{hero.product.price}.00  <span className="text-[18px] font-semibold"> <strike>₹{hero.product.strikePrice}.00</strike></span></h2>
                    <button className="border rounded-md px-3 py-1 mt-3 cursor-pointer">View more</button>
              </motion.div>
           </div>
            
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
