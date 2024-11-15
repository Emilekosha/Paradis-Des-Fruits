import BannerImg from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/Animation";

const Banner = () => {
  return (
    <section >
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 mt-10 rounded-xl bg-yellow-50">
        {/* section left image */}
        <div className="flex justify-center items-center"> 
          <img
            src={BannerImg}
            alt=""
            className="w-[300px] md:w-[400px] object-cover"
          />
        </div>
        
        {/* section right info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-[400px]:">
            <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="text-3xl font-bold lg:text-6xl uppercase text-gray-500 font-Poppins">Informations sur la marque</motion.h1>
            <motion.p
                 variants={FadeUp(0.7)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once: true}}
                className="text-2xl">
            {` Notre boutique de fruits en ligne s'engage à offrir des produits frais, savoureux et de qualité exceptionnelle, directement issus des meilleurs producteurs locaux. Nous mettons un point d'honneur à sélectionner des fruits cultivés de manière responsable, tout en favorisant des pratiques durables pour protéger l'environnement. Grâce à notre plateforme simple et intuitive, nous vous offrons une expérience d'achat pratique, avec des options de livraison rapide et des services personnalisés pour répondre à vos besoins.`}
            </motion.p>
            {/* <motion.p
                 variants={FadeUp(0.9)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once: true}}>
                
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              omnis magnam repellendus ea sint perferendis ut quas, saepe
              necessitatibus natus quaerat adipisci explicabo. Rerum corporis,
              ipsa in sapiente eum amet!
            </motion.p> */}
            {/* button */}
            <motion.div
              variants={FadeLeft(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center py-2"
            >
              <button className=" text-2xl  px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition duration-300">
              Apprendre encore plus
              </button>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Banner;
