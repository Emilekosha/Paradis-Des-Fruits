import { motion, AnimatePresence } from "framer-motion"



const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
        {
            open && (
                <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                
                className="absolute top-20 left-0 w-full h-screen z-20">
                    <div className="text-xl font-semibold uppercase bg-primary text-white p-4 py-10 m-6 rounded-xl">
                        <ul className="flex flex-col items-center gap-10 ">
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </motion.div>
            )
        }
  </AnimatePresence>
  );
}

export default ResponsiveMenu
