import React from 'react';
import Me from '../Me.png';

export default function FirstSection() {
    return (
        <section className='firstSection'>
            <div className="leftDiv">
                
            </div>


            <div className="description">
            <span className='heading'>
                Hello, I'm Aryan <br />
            </span> 
            I am a <span style={{color: "rgb( 153, 152, 152 )"}}>Web <br /> Developer </span>  and  <span style={{color: "rgb( 153, 152, 152 )"}}><br /> UI/UX Designer.</span>
            </div>


            <div className="rightDiv">
                <img src={Me} alt="Aryan's Image" />
            </div>

        </section>
    );
}