import React from 'react';
import Simon from '../Simon.png'
import Netflix from '../netflix.png'

export default function Projects() {
    return (
        <section className="container projSec">
            <div className="projHead">
                <h1> My Personal Projects</h1>
            </div>

            <div className="projList">

                <div className="container proj1">
                    <img src={Simon} alt="Netflix UI Clone" />
                    <p>Simon Game built using HTML, CSS and JS <br />
                        All the logic is used is written using jQuery.
                    </p>
                    <a href="https://github.com/TechMod00/Simon-Game">GitHub Link</a>
                </div>



                <div className="container proj1">
                    <img src={Netflix} alt="Netflix UI Clone" />
                    <p>Netflix UI Clone, built from Scratch,<br />
                        Used Bootstrap to add look and feel.
                    </p>
                    <a href="https://github.com/TechMod00/TechRepo">GitHub Link</a>
                </div>


            </div>
        </section>
    )
}
