import React from 'react'
import cpplogo from '../image/cpp.png'
import djlogo from '../image/django.png'
import pylogo from '../image/python.png'
import mbedlogo from '../image/mbed.png'

export default function Skills(props) {
    const style = () => {
        if (props.mode === "light") {
            return [{ border: "2px solid black" }, { color: "black" }, { backgroundColor: "#f0f5f5" }, { textAlign: 'center', color: "black" }]
        } else {
            return [{ border: "2px solid white" }, { color: "white" }, { backgroundColor: "#1c1e21" }, { textAlign: 'center', color: "white" }]
        }
    }
    return (
        <>
            <div className="container-fluid d-flex justify-content-center" style={style()[2]}>
                <div className="shadow-lg my-container-2 my-2">
                    <h1 className='my-5 my-font' style={style()[3]}>Skills</h1>
                    <div className="skill-container">
                        <div className="skill-1 shadow-lg">
                            <h5>C++</h5>
                            <img src={cpplogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>

                        <div className="skill-2 shadow-lg">
                            <h5>Python</h5>
                            <img src={pylogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>

                        <div className="skill-3 shadow-lg">
                            <h5>Django</h5>
                            <img src={djlogo} alt="" />
                            <a className="btn btn-primary" href="https://undefined2001.pythonanywhere.com/admin" rel='noopener' target = "_blank">Project</a>
                        </div>

                        <div className="skill-4 shadow-lg">
                            <h5>Embedded<br />System </h5>
                            <img src={mbedlogo} alt="" />
                            <button className='btn btn-primary'>Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

