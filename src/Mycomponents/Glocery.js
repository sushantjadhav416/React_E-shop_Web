import React from 'react'

import '../App.css';
import '../CSS/style.css'
import 'bootstrap/js/dist/carousel.js';

const Glocery = () => {
  return (
<div className="G_section">
    <div id="G_main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <h1 className="fashion_taital">Daily Grocery Needs</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Shampoo Products</h4>
                                    <p className="price_text">Start Price  100 Rs.</p>
                                    <div className="G_img"><img src={require('../IMAGES/shamp.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Tea Products</h4>
                                    <p className="price_text">Start Price   50 Rs.</p>
                                    <div className="G_img"><img src={require('../IMAGES/tea.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Froots</h4>
                                    <p className="price_text">Start Price 50 Rs.</p>
                                    <div className="G_img"><img src={require('../IMAGES/froots.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
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
                    <h1 className="fashion_taital">Daily Grocery Needs</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Shampoo Products</h4>
                                    <p className="price_text">Starting Price 100 </p>
                                    <div className="G_img"><img src={require('../IMAGES/shamp.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Tea Products</h4>
                                    <p className="price_text">Start Price100 </p>
                                    <div className="G_img"><img src={require('../IMAGES/tea.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Froots</h4>
                                    <p className="price_text">Start Price  100</p>
                                    <div className="G_img"><img src={require('../IMAGES/froots.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
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

export default Glocery
