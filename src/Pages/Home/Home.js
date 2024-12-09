import React from 'react'
import Header from '../../Components/Header/Header'
import HeroNiit from '../../Components/HeroNiit/HeroNiit'
import Session1 from '../../Components/Session1/Session1'
import Session2 from '../../Components/Session2/Session2'
import Session3 from '../../Components/Session3/Session3'

const Home = () => {
  return (
    <div>
   <Header/>
   <HeroNiit/>
   <Session1/>
   <Session2/>
   <Session3/>
    </div>
  )
}

export default Home