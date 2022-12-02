import React from 'react';
import PropTypes from "prop-types";


export default function Navbar(props) {
    

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <a className="navbar-brand my-font" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Skills
                                </a>
                                <ul className="dropdown-menu m-2">
                                    <li><a className="dropdown-item" href="/">C++</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Embedded<br/>System</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Pyhton</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Django</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input border-primary border-2" type="checkbox" onClick={props.switchMode} role="switch" id="flexSwitchCheckDefault" aria-checked/>
                                <label className={`form-check-label my-font text-${(props.mode === "light")?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

//defining the props data type 
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

//assigning default value to props
Navbar.defaultProps = {
    title: "Enter Title"
}