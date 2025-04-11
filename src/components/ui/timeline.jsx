import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from "react";
import logoIcon from '../../assets/other/logo-icon.png'

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"], 
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative  w-full my-5 font-sans bg-gray-100 dark:bg-neutral-950"
      ref={containerRef}
    >
     <div className="px-4 md:px-8 lg:px-10 relative top-16 ">
        <h2 className="max-w-4xl mb-4 text-lg text-black md:text-4xl dark:text-white font-semibold flex gap-2">
          <img src={logoIcon} alt="" width={35} /> Trendify Store Journey
        </h2>
        <p className="max-w-2xl text-sm text-neutral-700 dark:text-neutral-300 md:text-base">
          From an idea to a fully launched e-commerce platform — here's a look at how
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#59A52C] to-[#549609] "> Trendify Store </span>
          evolved over time. Each milestone brought us closer to redefining online shopping.
        </p>
      </div>


      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start  pt-32 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full left-3 md:left-3 dark:bg-black">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden text-xl font-bold md:block md:pl-20 md:text-5xl text-[#111111] dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="block mb-4 text-2xl font-bold text-left md:hidden text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        
        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#0c8905] via-[#6af26a] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
