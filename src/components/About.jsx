import React from 'react';

export default function About() {
    return (
        <section className="aboutSec">
            <div class="abt p-5 text-center bg-body-dark">
                <div class="container py-5">
                    <h1 class="aboutHead" style={{ fontSize: "70px" }}>Hi, I am Aryan.</h1>
                    <p class="col-lg-8 m-auto lead text-light"></p>
                </div>
            </div>

            <div className="descSec">
                <div className="left">
                    Some lines <br />about myself.
                </div>

                <div className="right">
                    <span>I am Aryan Sharma. </span>
                    <span>I am passionate for UI/UX</span>
                    <span> and Web designing.</span>
                    <span>I completed my training from Udemy as a </span>
                    <span>certified Web Developer and Designer.</span>
                </div>
            </div>
        </section>
    )
}
