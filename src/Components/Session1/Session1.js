import React from 'react'
import classes from './Session1.module.css'
import log from '../../Assets/Niit pic/log.png'
import Logo2 from '../../Assets/Niit pic/Logo2.png'
import log3 from '../../Assets/Niit pic/log3.png'
import log4 from '../../Assets/Niit pic/log4.png'
import log5 from '../../Assets/Niit pic/log5.png'
import log6 from '../../Assets/Niit pic/log6.png'
import HDFC1 from '../../Assets/Niit pic/HDFC1.png'
import Finoculus from '../../Assets/Niit pic/Finoculus.png'
import sentienz1 from '../../Assets/Niit pic/sentienz1.png'
import HDB1 from '../../Assets/Niit pic/HDB1.png'
import solutionlogo from '../../Assets/Niit pic/solutionlogo.png'
import Neptunelogo from '../../Assets/Niit pic/Neptunelogo.png'



const Logo = () => {
  return (
    <div className={classes.Container}>
        <div className={classes.Logoim}>
         <img src={log} alt='log'/>
         <img src={Logo2} alt='Logo2'/>
        
        <img src={log3} alt='log3'/>
        <img src={log4} alt='log4'/>
        <img src={log5} alt='log5'/>
        <img src={log6} alt='log6'/>
          
        </div>
        <div className={classes.logoimg}>
          <img src={HDFC1} alt="HDFC1"/>
          <img src={Finoculus} alt="Finoculus"/>
          <img src={sentienz1} alt="sentienz1"/>
          <img src={HDB1} alt="HDB1"/>
          <img src={solutionlogo} alt="solutionlogo"/>
          <img src={Neptunelogo} alt="Neptunelogo"/>

        
          
        </div>
      
    </div>
  )
}

export default Logo