import React, { useRef } from 'react'
import Navbar from './Componenets/Navbar'
import flower from './assets/flower.png'
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CenterText from './Componenets/CenterText';
import ParagraphDiv from './Componenets/ParagraphDiv';
import BottomDiv from './Componenets/BottomDiv';
import Footer from './Componenets/Footer';




const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  const imgageRef = useRef(null);
  const mainRef = useRef(null);
  

  gsap.registerPlugin(ScrollTrigger)


  useGSAP(()=>{
    const tl = gsap.timeline({scrollTrigger:{
      trigger: mainRef.current,
      start: 'top 0',
      end: 'top -200%',
      scrub:1
    }
  })
    tl.to(imgageRef.current,{
      transform : 'translateY(-20%) ',
      duration : 1,
    })
    tl.to(imgageRef.current,{
      transform : 'translateY(-20%) scale(0.6)',
      duration : 1,
    })
    
  })
  return (
    <div ref={mainRef} className=' bg-[salmon] min-h-screen w-full text-white'>
      <Navbar/>
      
      <div  id="center" className='reletive px-[8vw] pb-[12vw] pt-[8vw]'>
      <CenterText/>
      <ParagraphDiv/>
      <BottomDiv/>
    
      <div id="photu">
      <img ref={imgageRef} className=' fixed top-0 h-[78vw]  left-[7%]' src={flower} alt="" />
      </div>
      </div>
       
       <Footer/>

    </div>
  )
}
      

export default App
