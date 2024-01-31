import React from 'react'

const Footer = () => {
  return (
    <div className="footer_section layout_padding">
    <div className="container">
        <div className="footer_logo"><a href="Home"><img src={require('../IMAGES/logo.png')}/></a></div>
        <div className="input_bt">
            <input type="text" className="mail_bt" placeholder="Your Email" name="Your Email"/>
            <span className="subscribe_bt" id="basic-addon2"><a href="#">Subscribe</a></span>
        </div>
        <div className="footer_menu">
            <ul>
                <li><a href="#">Best Sellers</a></li>
                
                <li><a href="#">New Releases</a></li>
                
                <li><a href="#">Customer Service</a></li>
            </ul>
        </div>
        <div className="location_main">Help Line  Number : <a href="#">+1 1800 1200 1200</a></div>
    </div>
    
    <div className="copyright_section">
    <div className="container">
        <p className="copyright_text">© 2023 All Rights Reserved by e-shop Group</p>
    </div>
    </div>
   </div>
 )
}

export default Footer
