import React from 'react'
import { useState } from 'react';
import '../App.css';
import '../CSS/style.css'
import 'bootstrap/js/dist/carousel.js';

const Electronics = ({ id, name, image, price }) => {

    const [cartItems, setCartItems] = useState([]);

  
    const addItemToCart = (item) => 
    {
       setCartItems([...cartItems, item]);
    };

    const addToCart = () => 
    {
              const newItem = { id, name, image, price };
              addItemToCart(newItem);
    };
    

  return (
    <div className="fashion_section">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <h1 className="fashion_taital">Electronic</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Laptop</h4>
                                    <p className="price_text">Starting price 20,000 Rs.</p>
                                    <div className="electronic_img"><img src={require('../IMAGES/laptop-img.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onClick={addToCart}>Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Mobile</h4>
                                    <p className="price_text">Starting Price 5000 Rs.</p>
                                    <div className="electronic_img"><img src={require('../IMAGES/mobile-img.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Computers</h4>
                                    <p className="price_text">Starting Price 10,000 Rs.</p>
                                    <div className="electronic_img"><img src={require('../IMAGES/computer-img.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <h1 className="fashion_taital">Electronic</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">HeadPhones</h4>
                                    <p className="price_text">Starting Price 300 Rs.</p>
                                    <div className="electronic_img"><img src={require('../IMAGES/headphones.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">TV</h4>
                                    <p className="price_text">Starting Price  7000 Rs.</p>
                                    <div className="electronic_img"><img src={require('../IMAGES/TV.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Speakers</h4>
                                    <p className="price_text">Starting Price  800 Rs.</p>
                                    <div className="electronic_img"><img src={require('../IMAGES/sp.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <a className="carousel-control-prev" href="#main_slider" role="button" data-bs-slide="prev">
            <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control-next" href="#main_slider" role="button" data-bs-slide="next">
            <i className="fa fa-angle-right"></i>
        </a>
    </div>
</div>
  )
}

export default Electronics
