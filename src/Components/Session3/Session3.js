import React from 'react'
import classes from './Session3.module.css'
import image2 from '../../Assets/Niit pic/image2.png'
import image3 from '../../Assets/Niit pic/image3.png'
import image4 from '../../Assets/Niit pic/image4.png'

const Session3 = () => {
  return (
    
    <div className={classes.Container}>
    <div className={classes.Content}>
    <div className={classes.Textside}>
    <h2>POPULAR PROGRAMMES</h2>
    <p>Elevate your skills with our most in-demand programmes</p>
    </div>
    <div className={classes.Textside2}>
        <div>
            <h6>SHORT TERM COURSE</h6><h6>LONG TERM COURSE</h6>
            
        </div>
    </div>
    <div className={classes.Imageside}>
    <img src={image2} alt='image2'/>
    <img src={image3} alt='image3'/>
    <img src={image4} alt='image4'/>

    </div>
    </div>
    </div>
  )
}

export default Session3