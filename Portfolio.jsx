import React, { useState } from 'react';
import {BsArrowBarDown} from 'react-icons/bs';
import {BsArrowBarUp} from 'react-icons/bs';

import './portfolio.css';
import im1 from '../../assets/im1.jpg';
import im2 from '../../assets/im2.jpg';
import im3 from '../../assets/im3.jpg';
import im4 from '../../assets/im4.jpeg';
import im5 from '../../assets/im5.jpg';
import im6 from '../../assets/im6.jpg';
const Portfolio = () => {
    const [toggleDisplay, setToggleDisplay] = useState(false);
    return(
        <div className='app__portfolio section__padding' id='portfolio'>
            <div className='app__portfolio_content flex__direction'>
                <h1>PORTFOLIU</h1>
                <h1>CUM LUCRĂM</h1>
                <p>Aici vei găsi câteva dintre proiectele noastre, pentru detalii despre proiecte mai complexe.</p>
                <h1>Contacteaza-ne</h1>
                <div className='app__portfolio-img'>
                    <img src={im1} alt='first' />
                    <img src={im2} alt='second' />
                    <img src={im3} alt='third' />
                        <div className='app__portfolio-img-but'>
                            <button href='#link1' link="veziv.ro"  alt='firstb'>Veziv.ro</button>
                            <button href='#link2' link="veziv.ro" alt='secondb'>Veziv.ro</button>
                            <button href='#link3' link="veziv.ro" alt='thirdb'>Veziv.ro</button>
                        </div>
                        
                 </div>
            
             </div>
             <div className='app__portfolio_extra'>
                {toggleDisplay
                            ? <BsArrowBarUp color="#fff" size={27} onClick={() => setToggleDisplay(false)} />
                            : <BsArrowBarDown color="#fff" size={27} onClick={() => setToggleDisplay(true)} />}
                            {toggleDisplay && (
                                <div className='app__portfolio-img-extra'>
                                    <img src={im4} alt='forth' />
                                    <img src={im5} alt='fivth' />
                                    <img src={im6} alt='sixth' />
                                    <div className='app__portfolio-img-extra-but'>
                                        <button href='#link4' link="veziv.ro" alt='forthb'>Veziv.ro</button>
                                        <button href='#link5' link="veziv.ro" alt='fivthb'>Veziv.ro</button>
                                        <button href='#link6' link="veziv.ro" alt='sixthb'>Veziv.ro</button>
                                    </div>
                                </div>
                            )}
                 </div>
        </div>
        
        
    );
};

export default Portfolio;
