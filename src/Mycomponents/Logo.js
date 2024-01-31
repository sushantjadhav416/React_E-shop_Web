import React from 'react'
import Mylogo from '../IMAGES/logo.png'

import '../App.css';
import '../CSS/style.css';

const Logo = () => {
  return (
    <div className="logo_section">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="logo"><a href="/"><img src={require('../IMAGES/logo.png')}/></a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logo
