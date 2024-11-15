// import React from 'react';
import Heropng from "../../assets/fruit-plate.png"
import LeafImage from "../../assets/leaf.png"
import {motion} from "framer-motion";
import { FadeRight } from "../../utility/Animation";


const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">
        {/* information sur la marque */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-5 space-x-6 lg:max-w-[400px]">
            <motion.h1
                variants={FadeRight(0.6)}
                initial="hidden" 
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">
              Sain
              <br />
              <span className="text-secondary">Fruits</span> frais
            </motion.h1>

            <motion.p
                 variants={FadeRight(0.9)}
                 initial="hidden" 
                 animate="visible"
                 className="text-2xl tracking-wide">
              Commandez maintenant pour une vie saine et fraîche
            </motion.p>

            <motion.p
                 variants={FadeRight(1.2)}
                 initial="hidden" 
                 animate="visible"
                 className="text-gray-500">
              Des aliments sains et délicieux pour un petit-déjeuner frais.
              Mangez tous les jours pour une bonne santé et un bon esprit
              Commandez et obtenez 20 % de réduction sur votre première commande
            </motion.p>

            {/* button */}
            <motion.div 
                 variants={FadeRight(1.5)}
                 initial="hidden" 
                 animate="visible"
                 className="flex justify-center py-2">
              <button className=" text-2xl  px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition duration-300">
                Acheter maintenant
              </button>
            </motion.div>
          </div>
        </div>

        {/* hero image */}
        <div className="flex justify-center items-center">
            <motion.img 
                initial={{ opacity: 0, x: 200, rotate: 75}}
                animate={{ opacity: 1, x: 0, rotate: 0}}
                transition={{duration: 1, delay: 0.2}}
                src={Heropng} alt="" className="w-[350px]  md:w-[550px] drop-shadow" />
        </div>
        {/* Leaf image */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
            <motion.img 
                 initial={{ opacity: 0, x: -200, rotate: 75}}
                 animate={{ opacity: 1, x: 0, rotate: 0}}
                 transition={{duration: 1, delay: 1.5}}
                src={LeafImage} alt=""  className="w-full md:max-w-[300px]"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
