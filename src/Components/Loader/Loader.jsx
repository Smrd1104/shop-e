// src/Loader.js
import React from 'react';
import Logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center gap-10 items-center flex-col bg-gradient-to-r from-primary to-secondary/40">

      <div className=' animate-pulse'>
        <a
          href="#"
          className="font-bold text-[#020b38d3] dark:text-white text-5xl sm:text-5xl flex gap-2"
        >
          {/* <img src={Logo} alt="logo" className="w-10" /> */}
          Shop <span className="text-[#000000d3]">-</span>
          <span className="text-[#ff0505d3] font-extrabold">e ...</span>
        </a>
      </div>

      <div 
        className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(black_0deg,black_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(orange_0deg,orange_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(yellow_0deg,yellow_180deg,transparent_180deg,transparent_360deg)]"
      >
        <span
          className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#black_0deg,#yellow_180deg,transparent_180deg,transparent_360deg)]"
        >
        </span>
      </div>

    </div>
  );
};

export default Loader;
































// import React from 'react'
// import classes from './Loader.module.css'
// const Loader = () => {
//   return (
//     <div className={`${classes.container}`}>
//     <div className="square">
//       <span style="--i:0;"></span>
//       <span style="--i:1;"></span>
//       <span style="--i:2;"></span>
//       <span style="--i:3;"></span>
//     </div>
//     <div className={`${classes.square}`}>
//       <span style="--i:0;"></span>
//       <span style="--i:1;"></span>
//       <span style="--i:2;"></span>
//       <span style="--i:3;"></span>
//     </div>
//     <div className={`${classes.square}`}>
//       <span style="--i:0;"></span>
//       <span style="--i:1;"></span>
//       <span style="--i:2;"></span>
//       <span style="--i:3;"></span>
//     </div>
//   </div>
//   )
// }

// export default Loader