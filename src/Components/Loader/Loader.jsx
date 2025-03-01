// src/Loader.js
import React from 'react';
import Logo from "../../assets/new-logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center gap-10 items-center flex-col  bg-gradient-to-b from-[#FCB714] via-[#ED8023] via-[#00A8CE] to-[#0F56A6]/50 ">

      <div className=''>
       
          <img src={Logo} alt="logo" className="w-32 object-contain rounded-full border shadow-2xl bg-gradient-to-t from-[#0F56A6] via-[#ED8023] via-[#00A8CE] to-[#FCB714]" />
                 
      </div>

      {/* <div  
        className="w-20 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(black_0deg,black_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(orange_0deg,orange_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(yellow_0deg,yellow_180deg,transparent_180deg,transparent_360deg)]"
      >
        <span
          className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#black_0deg,#yellow_180deg,transparent_180deg,transparent_360deg)]"
        >
        </span>
      </div> */}

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