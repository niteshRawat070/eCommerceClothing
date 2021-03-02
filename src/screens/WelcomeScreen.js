import React from 'react'
import '../App.css'
import {motion } from 'framer-motion'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import menWear from '../images/menWear.jpg'
import womenWear from '../images/womenWear.jpg'



function WelcomeScreen() {
  const buttonHover={
    hover:{
      color:'coral'
    }
  }
  return (
    <>
    <div>
      <div className='topBar'>
        <p className='textTopBar'>NEW ARRIVAL IN EVERY 2-3 WEEKS</p>
        <p className='textTopBar'>LUXURIOUS ITEMS AT GREAT PRICES</p>
        <p className='textTopBar'>CONTACT HERE</p>
      </div>
      <div className='logoBar'>
        <motion.button
        variants={buttonHover}
        whileHover='hover'
        >About</motion.button>
        <img src={'https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/250x100/logo_for_b_1589993352__38272.original.png'} />
        <motion.button
        variants={buttonHover}
        whileHover='hover'
        >View Cart <AiOutlineShoppingCart size='20px' /></motion.button>
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',width:'100%',maxWidth: '100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',overflow:'hidden'}}> 
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} stopOnHover={false} showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}>
        <div style={{display:'flex',height:'90vh'}}>
        <img src={img1} height='100%' width='100%'/>
        </div>
        <div style={{display:'flex',height:'90vh'}}>
        <img src={img2} height='100%' width='100%'/></div>
        <div style={{display:'flex',height:'90vh'}}>
        <img src={img3} height='100%' width='100%'/></div>
        <div style={{display:'flex',height:'90vh'}}>
        <img src={img4} height='100%' width='100%'/></div>
        </Carousel>
    </div>
    <div className='menWomen'> 
      <motion.div
      whileHover={{
        scale:0.95
      }}
      style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
        <img src={menWear} height='100%' width='100%'/>
        <p className='skillsText'>Mens Wear</p>
      </motion.div>
      <motion.div
      whileHover={{
        scale:0.95
      }}
      style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
        <img src={womenWear} height='100%' width='100%'/>
        <p className='skillsText'>Womens Wear</p>
      </motion.div>
    </div>
    </>
  )
}

export default WelcomeScreen;
