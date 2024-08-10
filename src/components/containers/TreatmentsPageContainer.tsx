"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TreatmentsPageContainer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.8,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col items-start xl:max-w-[[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb6 mx-auto max-w-[540px] xl:max-w-none">
              Indulge in our Luxurious Service
            </h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">
             
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Classic Full Set: €60 </h3>
                </div>
                <p className="pl-6 text-[18px]">
                  <h2>Duration : 1 hour 30min</h2>
                </p>
                <p className="pl-6 text-[15px]">
                  This set is recommend for queens who like a natural but
                  noticable look!
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Hybrid full set: €80 </h3>
                </div>
                <p className="pl-6 text-[18px]">
                  <h2>Duration : 2 hours 15min </h2>
                </p>
                <p className="pl-6 text-[15px]">
                This set is recommend for queens who like to go all the way with lashes! Very full, noticiable, & glamorous set! This is my most popular set offered
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Volume full set: €100</h3>
                </div>
                <p className="pl-6 text-[18px]">
                  <h2>Duration : 2hours 45min </h2>
                </p>
                <p className="pl-6 text-[15px]">
                The sky is the limit with this set! This is the fullest, darkest, longest, most dramatic set! Recommend for queens who desire the spotlight look!
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Wispy Customized set : €120</h3>
                </div>
                <p className="pl-6 text-[18px]">
                <h2>Duration : 3hours 10min</h2>
                </p>
                <p className="pl-6 text-[15px]">
                Hey Queen are you ready for our exclusive Wispy / colourd Customize Lash Set collection! Elevate your beauty routine with our luxurious wispy lashes that are designed to enhance your natural beauty and bring out your inner glam
Elevate your lashes, elevate your look!”
                </p>
              </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </motion.section>
  );
};

export default TreatmentsPageContainer;
