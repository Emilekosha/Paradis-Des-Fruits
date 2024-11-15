import fruit1 from "../../assets/fruits/apple.png";
import fruit2 from "../../assets/fruits/orange.png";
import fruit3 from "../../assets/fruits/avocado.png";
import fruit4 from "../../assets/fruits/cherry.png";
import {  motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";

const MenusData = [
    {
        id: 1,
        title: "Pommes rouges fraîches",
        link: "/",
        price: "$2.00",
        image: fruit1,
        delay: 0.3,
    },
    {
        id: 2,
        title: "Oranges fraîches",
        link: "/",
        price: "$2.00",
        image: fruit2,
        delay: 0.6,
    },
    {
        id: 3,
        title: "Avocat frais",
        link: "/",
        price: "$4.00",
        image: fruit3,
        delay: 0.9,
    },
    {
        id: 4,
        title: "Cerises fraîches",
        link: "/",
        price: "$5.00",
        image: fruit4,
        delay: 1.2,
    },
]

const Menus = () => {
    return (
        <section>
            <div className="container pt-10 pb-20 bg-slate-50 rounded-lg">
                <motion.h1
                    initial={{opacity: 1, x: 0,}}
                    transition={{duration: 1, delay: 0.4}}
                    whileInView={{opacity: 1, x: -300}}
                    className="text-4xl text-primary text-center font-bold pb-10">Nos Menus</motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    {MenusData.map((menu) =>(
                        <motion.div 
                            variants={FadeLeft(menu.delay)}
                            initial="hidden"
                            whileInView={"visible"}
                            whileHover={{scale: 1.1}}
                            key={menu.id} className="flex flex-col items-center text-center   px-4 py-4 bg-gray-50 shadow-lg rounded-lg ">
                            <img src={menu.image} alt="{menu.title}" className="w-32 h-32 object-cover mx-auto" />
                            <div>
                            <h2 className="text-xl font-semibold mt-4">{menu.title}</h2>
                            </div>
                            <div><p className="text-primary mt-2 text-xl font-medium">{menu.price}</p></div>
                            <button className="w-[200px] bg-gray-700  mt-4 px-4 py-2 rounded hover:bg-secondary md:w-auto"> <a href={menu.link} className="text-white font-medium mt-2 inline-block hover:underline text-xl">
                Voir plus
            </a></button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menus;