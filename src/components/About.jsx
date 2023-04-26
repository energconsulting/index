import React from 'react'
import save from '/energysaving.png'
import './About.css'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={save} alt='Rólunk' />
                <div className='col-2'>
                    <h1 className='font-bold'>Rólunk</h1>
                    <span className='line'></span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum hic, fugit voluptate distinctio molestias quis quidem alias ex unde debitis qui corporis, doloremque maxime vitae similique ipsam at facere quia.</p>
                    <p className='secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque alias veritatis, id ratione praesentium qui aliquid blanditiis fugiat adipisci dolor neque distinctio quas rem quia quos quasi dolores voluptatem sit.
                    </p>
                    <div className='button'>
                        <Link className='btn' activeClass='current' to="contact" spy={true} smooth={true} offset={20} duration={800}>Lépjen kapcsolatba velünk</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
