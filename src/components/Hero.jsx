import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Typing } from '../components/Typing'
import image from '../assets/netflix5.jpg'

const Hero = () => {


  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      <div className="flex items-center justify-center">
        <img src={image} alt="" className='h-20 mt-20 w-20 rounded-full aspect-square' />
      </div>

      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-amber-500' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi 👋, I'm <span className='text-white'>Eugene.</span>
          </h1>
          <Typing />

        </div>
      </div>

      <ComputersCanvas />



      <div className='absolute xs:bottom-8 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-full border-4 border-white-50 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-amber-500 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
