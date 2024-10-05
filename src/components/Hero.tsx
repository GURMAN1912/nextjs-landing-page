"use client";
import ArrowRight from '../assets/icons/arrow-w.svg';
import messageImage from '../assets/images/message.png';
import cursorImage from '../assets/images/cursor.png';
import Image from 'next/image';
import {motion } from 'framer-motion';
import { Fascinate } from 'next/font/google';
export const Hero = () => {
  return(
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_80%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'>

</div>
      <div className="container relative ">
        <div className="flex gap-3 item-center justify-center">
        <a href="#" className="flex gap-3 border py-1 px-2 rounded-lg items-center border-white/30">
          <span>Version 2.0 is here</span>
          <span className='inline-flex items-start gap-1'>
          <span>Read more</span>

          </span>
        </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex  relative '>

        <h1 className='text-7xl sm:text-9xl   font-bold tracking-tighter text-center'>
          One Task <br /> at a Time
        </h1>
        <motion.div className='absolute right-[500px] top-[108px] hidden sm:inline'
          drag
          dragSnapToOrigin

        >
        <Image draggable={false} src={cursorImage} alt='cursor' height={200 } width={200} className='max-w-none' />
        </motion.div>
        <motion.div className='absolute top-[56px] left-[520px] hidden sm:inline'
        drag
        dragSnapToOrigin>
        <Image draggable={false} src={messageImage} alt='message' height={200} width={200} className='max-w-none' />
        </motion.div>
          </div>
        </div>
        <div className='flex justify-center '>
        <p className='text-xl mt-8 text-center max-w-md'>
          Celebrate the joy of accomplishment with an app designed to track your progesss ,
          motivate your efforts,and celebrate your success.
        </p>
        </div>
        <div className='flex justify-center mt-8'>
        <button className='bg-white text-black py-3 px-5 rounded-lg'> Get for Free</button>
        </div>
      </div>
      

    </div>
  );
};
