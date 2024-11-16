import React from "react";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";
import Skills from "./Skills.jsx";

const About = () => {
    return (
        <>
            <div className="AboutPage">
                <div className="AboutText">
                    <h1 className="AboutTextHeading">Get to <b>know</b> me!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum neque
                        reprehenderit aspernatur, maiores unde voluptate ipsam nostrum et
                        eius dignissimos illo <b>hello</b>voluptates recusandae cupiditate totam dolores
                        vero ducimus perferendis magni? <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
                        tenetur! sdfg
                    </p>
                </div>
                <div>
                    <Tilt>
                        <Lottie
                            className="illustration"
                            animationData={Coder}
                            loop={true}
                        />
                    </Tilt>
                </div>
            </div>
            <h1 className="SkillsHeading">Skillset</h1>
            <div className="skills">
                <Skills skill="Github" />
            </div>
        </>
    );
};

export default About;
