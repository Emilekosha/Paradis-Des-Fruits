import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/Animation";
import Bannerbg from "../../assets/banner-bg.jpg";


const bgStyle = {
    backgroundImage: `url(${Bannerbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
  return (
    <section className="mt-10">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 mt-10 rounded-3xl">
        {/* section div */}
        <div >
          
        </div>

        {/* section  info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-[400px]:">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold lg:text-6xl uppercase text-gray-500 font-Poppins"
            >
              {`Obtenez des fruits frais aujourd'hui`}
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl"
            >
              {`Offrez-vous le meilleur de la nature dès aujourd'hui avec notre sélection de fruits frais soigneusement récoltés pour garantir leur qualité et leur saveur. Commandez en ligne en quelques clics et profitez de notre service de livraison rapide pour recevoir des fruits savoureux directement chez vous. Découvrez la fraîcheur à chaque bouchée et faites de votre alimentation un véritable plaisir, sans effort ni compromis.`}
            </motion.p>
            {/* <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
              <button className=" text-2xl  px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition duration-300">
                Apprendre encore plus
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
