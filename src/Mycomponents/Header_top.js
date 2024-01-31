import React from 'react'

import '../App.css';
import '../CSS/style.css'

const Header_top = () => {
  return (
    <div className="container">
        <div className="header_section_top">
            <div className="row">
                <div className="col-sm-12">
                    <div className="custom_menu">
                        <ul>
                            <li><a href="">Best Sellers</a></li>
                            <li><a href="#">Today's Deals</a></li>
                            <li><a href="#">Customer Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header_top
