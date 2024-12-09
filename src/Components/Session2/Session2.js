import React from 'react'
import classes from './Session2.module.css'
import Niitlogo from '../../Assets/Niit pic/Niitlogo.png'
import image1 from '../../Assets/Niit pic/image1.png'
const Session2 = () => {
  return (
    <div className={classes.Container}>
        <div className={classes.content}>
        <div className={classes.Textside}>
            <img src={Niitlogo} alt='Niitlogo'/>
            <h3>About Us</h3>
            <p>NIIT is a leading Skills and Talent Development Corporation that is building a manpower pool for global industry requirements.

The company, which was set up in 1981 to help the nascent IT industry overcome its human resource challenges, today ranks among the world's leading training companies owing to its vast and comprehensive array of talent development programs.</p>
        
        <botton>Learn More</botton>
        </div>
        <div className={classes.Imageside}>
            <img src={image1} alt='image1'/>
        </div>
        </div>
       
    </div>
  )
}

export default Session2