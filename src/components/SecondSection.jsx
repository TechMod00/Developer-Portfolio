import React from 'react';

export default function SecondSection() {
  return (
    <section className="secondSec">
        <hr />

        <div className="skills">
            <h1>My Skills</h1>
            
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>WordPress</li>
            </ul>

            <ul>
                <li>NodeJS <span style={{color: "rgb( 153, 152, 152 )"}}>(Intermediate)</span></li>
                <li>Express <span style={{color: "rgb( 153, 152, 152 )"}}>(Intermediate)</span></li>
                <li>Bootstrap</li>
                <li>UI/UX Design</li>
            </ul>
        </div>
    </section>
  )
}
