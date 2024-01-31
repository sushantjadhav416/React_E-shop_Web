import React from 'react'

import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/dropdown.js';

import '../App.css';
import '../CSS/style.css'
import DropDown from './DropDown';

const Header_bottom = () => {
  return (
    <div className="header_section">
        <div className="container">
            <div className="containt_main">

                <DropDown></DropDown>
                <div className="main">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this blog"/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header_box">
                    <button className="btn btn-danger">
                        <a href="Login">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span className="padding_10">Login</span>
                        </a>
                    </button>

                    <div className="login_menu">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span className="padding_10">Cart<small id="crt"></small></span>
                                </a>
                            </li>
                            <li>
                                <a href="Register" >
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <span className="padding_10">Register</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header_bottom
