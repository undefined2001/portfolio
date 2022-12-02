import React from 'react';
import image from '../image/image.png'


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
                    <div className={`my-info my-font py-3 text-${(props.mode === "light") ? "dark" : "light"}`}>
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
                        <a className="link" href="/"><i className="fa-brands fa-linkedin fa-3x my-icon " style={style()[1]}></i></a>
                        <a href="https://www.facebook.com/asraful.islam.taj/"><i className="fa-brands fa-facebook fa-3x my-icon" style={style()[1]}></i></a>
                        <a href="/"><i className="fa-brands fa-github fa-3x my-icon" style={style()[1]}></i></a>
                        <a href="/"><i className="fa-brands fa-facebook-messenger fa-3x my-icon" style={style()[1]}></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}
