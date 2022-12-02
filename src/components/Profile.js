import React from 'react';
import image from '../image/image.png'
import cpplogo from '../image/cpp.png'
import pylogo from '../image/django.png'
import djlogo from '../image/python.png'
import mbedlogo from '../image/mbed.png'





export default function Profile(props) {
    const style = () => {
        if (props.mode === "light") {
            return [{ border: "2px solid black" }, { color: "black" }, { backgroundColor: "#f0f5f5" }, { textAlign: 'center',  color: "black" }]
        } else {
            return [{ border: "2px solid white" }, { color: "white" }, { backgroundColor: "#1c1e21" }, { textAlign: 'center',  color: "white" }]
        }
    }
    return (
        <>
            <div className="container-fluid my-container" style={style()[2]}>
                <div className="description shadow-lg my-4">
                    <div className={`info my-font py-3 text-${(props.mode === "light") ? "dark" : "light"}`}>
                        <h4>Institution: BRAC University</h4>
                        <h4>Name: Asraful Islam Taj</h4>
                        <h4>Age: 22</h4>
                        <h5>Short Description:</h5>
                        <p style={style()[0]}>
                            I am Asraful Islam Taj. Currently Doing my BSc in Computer Science and Engineering at BRAC University. I am a
                            tech enthusiast person and love to write code and play with electronics devices so thats why I choose Embedded
                            System Engineering as my career and Web development is my side Skill.
                        </p>
                    </div>
                    <div className="image">
                        <img className="my-img" style={style()[0]} src={image} alt="" />
                    </div>
                    <div className="icons">
                        <a className="link" href="/"><i className="fa-brands fa-linkedin fa-3x my-icon" style={style()[1]}></i></a>
                        <a href="https://www.facebook.com/asraful.islam.taj/"><i className="fa-brands fa-facebook fa-3x my-icon" style={style()[1]}></i></a>
                        <a href="/"><i className="fa-brands fa-github fa-3x my-icon" style={style()[1]}></i></a>
                        <a href="/"><i className="fa-brands fa-facebook-messenger fa-3x my-icon" style={style()[1]}></i></a>
                    </div>
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center" style={style()[2]}>
                <div className="shadow-lg">
                <h1 className='my-5 my-font' style={style()[3]}>Skills</h1>
                    <div className="skill-container">
                        <div className="skill-1 shadow-lg">
                            <h5><strong>C++</strong></h5>
                            <img src={cpplogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>

                        <div className="skill-2 shadow-lg">
                            <h5><strong>Python</strong></h5>
                            <img src={pylogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>

                        <div className="skill-3 shadow-lg">
                            <h5><strong>Django</strong></h5>
                            <img src={djlogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>

                        <div className="skill-4 shadow-lg">
                            <h5><strong>Embedded<br />System</strong></h5>
                            <img src={mbedlogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
