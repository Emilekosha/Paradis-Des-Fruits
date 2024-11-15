import Bannerimg2 from "../../assets/fruit-plate2.png";
import { motion} from "framer-motion";
import { FadeLeft, FadeUp } from "../../utility/Animation";

const Banner2 = () => {
  return (
    <section className="mt-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 mt-10 rounded-xl">
          {/* section right info */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-[400px]:">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold lg:text-6xl uppercase text-gray-500 font-Poppins"
              >
              Boutique de fruits en ligne
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl"
              >
                {`Bienvenue dans notre boutique en ligne dédiée aux fruits frais et savoureux ! Nous sélectionnons soigneusement chaque fruit directement auprès des meilleurs producteurs, garantissant des produits d'une fraîcheur exceptionnelle et d'une qualité irréprochable. Que vous recherchiez des pommes croquantes, des oranges juteuses, ou des avocats crémeux, notre large gamme de fruits répondra à tous vos besoins. Avec notre engagement envers des pratiques durables, vous profitez de produits non seulement délicieux, mais aussi respectueux de l’environnement.`}
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
              {` Faites vos courses en toute simplicité depuis le confort de votre domicile. Notre plateforme intuitive vous permet de commander vos fruits préférés en quelques clics, avec la garantie d'une livraison rapide et soignée. Nous croyons que la santé commence par l’assiette, et c’est pourquoi nous nous efforçons de vous offrir des fruits riches en saveurs et en nutriments. Rejoignez dès aujourd’hui notre communauté de clients satisfaits et transformez vos repas en moments de plaisir authentique !`}
              </motion.p>
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
        
        {/* section left image */}
        <div className="flex justify-center items-center"> 
          <motion.img
            src={Bannerimg2}
            alt=""
            initial={{ opacity: 0, x: 200, rotate: 75}}
            animate={{ opacity: 1, x: 0, rotate: 0}}
            transition={{duration: 1, delay: 0.2}}
            className="w-[300px] md:w-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
