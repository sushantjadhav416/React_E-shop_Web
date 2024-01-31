import React from 'react';

import 'bootstrap/js/dist/carousel';

const fashion = () => {
    
  return (
    <div className="fashion_section">
    <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <h1 className="fashion_taital">Man & Woman Fashion</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Man T -shirt</h4>
                                    <p className="price_text">Price 100 Rs.</p>
                                    <div className="tshirt_img"><img src={require('../IMAGES/tshirt-img.png')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Man -shirt</h4>
                                    <p className="price_text">Price  200 Rs.</p>
                                    <div className="tshirt_img"><img src={require('../IMAGES/dress-shirt-img.jfif')}/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Woman Scart</h4>
                                    <p className="price_text">Price  500 Rs. </p>
                                    <div className="W_img"><img src={require('../IMAGES/women-clothes-img.png')}/></div>
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
                    <h1 className="fashion_taital">Man & Woman Fashion</h1>
                    <div className="fashion_section_2">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Man T-shirt</h4>
                                    <p className="price_text">Price 100 Rs.</p>
                                    <div className="tshirt_img"><img src="~/lib/images/tshirt-img.png"/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Man Shirt</h4>
                                    <p className="price_text">Price 200 Rs.</p>
                                    <div className="tshirt_img"><img src="~/lib/images/dress-shirt-img.jfif"/></div>
                                    <div className="btn_main">
                                        <div className="buy_bt"><a href="#" onclick="mycart()">Buy Now</a></div>
                                        <div className="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="box_main">
                                    <h4 className="shirt_text">Woman Scart</h4>
                                    <p className="price_text">Price   500 Rs </p>
                                    <div className="W_img"><img src="~/lib/images/women-clothes-img.png"/></div>
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

export default fashion

