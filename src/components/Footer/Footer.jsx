import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-10">
      <motion.div
        initial={{ opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <div
            className="flex gap-2 text-3xl items-center font-bold
         "
          >
            <p className="text-primary">Paradis</p>
            <p className="text-indigo-900">DesFruits</p>
            <FaLeaf className="text-secondary" />
          </div>
        </div>
        {/* social section */}
        <div className="flex items-center gap-4 text-3xl mt-6 text-gray-700">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
