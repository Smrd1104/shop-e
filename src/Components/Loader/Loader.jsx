import React from 'react'
import classes from './Loader.module.css'
const Loader = () => {
  return (
    <div className={`${classes.container}`}>
    <div className="square">
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div className={`${classes.square}`}>
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
    <div className={`${classes.square}`}>
      <span style="--i:0;"></span>
      <span style="--i:1;"></span>
      <span style="--i:2;"></span>
      <span style="--i:3;"></span>
    </div>
  </div>
  )
}

export default Loader