// import * as React from "react";
// import { motion } from 'framer-motion';

// const ImageCard = ({ title, subtitle, imageSrc, className }) => {
//   return (
//     <div className={`flex  overflow-hidden flex-col flex-1 px-3.5 pt-10 w-full bg-white shadow-sm rounded-[30px] ${className}`}>
//       <section className="flex flex-col justify-center items-start self-center max-w-full w-[391px]">
//         <h2 className="flex flex-col max-w-full text-4xl font-bold leading-10 text-black w-[357px]">
//           {title}
//         </h2>
//         <p className="flex flex-col mt-1.5 w-full text-lg font-medium leading-5 text-zinc-800">
//           {subtitle}
//         </p>
//       </section>
//       <motion.div className="absolute bottom-0 w-full h-full" whileHover={{ y: -250 }} transition={{ duration: 0.5}}>
//   <figure className="flex flex-col justify-center w-full">
//     <img
//       loading="lazy"
//       src={imageSrc}
//       alt={title}
//       className="object-cover w-full h-full"
//     />
//   </figure>
// </motion.div>


//     </div>
//   );
// };

// export default ImageCard;

import * as React from "react";
import { motion } from 'framer-motion';

const ImageCard = ({ title, subtitle, imageSrc, className }) => {
  return (
    <div className={`flex relative  overflow-hidden flex-col flex-1 px-3.5 pt-10 w-full bg-white shadow-sm rounded-[30px] ${className}`}>
      <section className="flex flex-col justify-center items-start self-center max-w-full w-[391px] black">
        <h2 className="flex flex-col max-w-full text-4xl font-bold leading-10 text-black w-[357px]">
          {title}
        </h2>
        <p className="flex flex-col mt-1.5 w-full text-lg font-medium leading-5 text-zinc-800">
          {subtitle}
        </p>
      </section>
      <motion.div className="absolute bottom-0 w-full h-screen " initial={{y: 710 }} whileHover={{ y: 510 }} transition={{ duration: 2}}>
  <figure className="flex flex-col justify-center w-full black">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="absolute object-contain w-full h-full  "
    />
  </figure>
</motion.div>


    </div>
  );
};

export default ImageCard;