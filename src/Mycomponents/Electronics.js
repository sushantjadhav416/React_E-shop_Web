import React from 'react'
import '../App.css';
import '../CSS/style.css'
import 'bootstrap/js/dist/carousel.js';
import 'react-bootstrap/Carousel/package.json';

const Electronics = () => {

    var c = 0;
    const mycart=() =>
    {
       alert("The iteam is added to your cart");
       c++;
       document.getElementById("crt").innerHTML = " +" + c;
    }
  return (
    <div class="fashion_section">
    <div id="main_slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container">
                    <h1 class="fashion_taital">Electronic</h1>
                    <div class="fashion_section_2">
                        <div class="row">
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">Laptop</h4>
                                    <p class="price_text">Starting price 20,000 Rs.</p>
                                    <div class="electronic_img"><img src={require('../IMAGES/laptop-img.png')}/></div>
                                    <div class="btn_main">
                                        <div class="buy_bt"><a href="#" onclick={() => mycart()}>Buy Now</a></div>
                                        <div class="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">Mobile</h4>
                                    <p class="price_text">Starting Price 5000 Rs.</p>
                                    <div class="electronic_img"><img src={require('../IMAGES/mobile-img.png')}/></div>
                                    <div class="btn_main">
                                        <div class="buy_bt"><a href="#">Buy Now</a></div>
                                        <div class="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">Computers</h4>
                                    <p class="price_text">Starting Price 10,000 Rs.</p>
                                    <div class="electronic_img"><img src={require('../IMAGES/computer-img.png')}/></div>
                                    <div class="btn_main">
                                        <div class="buy_bt"><a href="#">Buy Now</a></div>
                                        <div class="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container">
                    <h1 class="fashion_taital">Electronic</h1>
                    <div class="fashion_section_2">
                        <div class="row">
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">HeadPhones</h4>
                                    <p class="price_text">Starting Price 300 Rs.</p>
                                    <div class="electronic_img"><img src={require('../IMAGES/headphones.png')}/></div>
                                    <div class="btn_main">
                                        <div class="buy_bt"><a href="#">Buy Now</a></div>
                                        <div class="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">TV</h4>
                                    <p class="price_text">Starting Price  7000 Rs.</p>
                                    <div class="electronic_img"><img src={require('../IMAGES/TV.png')}/></div>
                                    <div class="btn_main">
                                        <div class="buy_bt"><a href="#">Buy Now</a></div>
                                        <div class="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-4">
                                <div class="box_main">
                                    <h4 class="shirt_text">Speakers</h4>
                                    <p class="price_text">Starting Price  800 Rs.</p>
                                    <div class="electronic_img"><img src={require('../IMAGES/sp.png')}/></div>
                                    <div class="btn_main">
                                        <div class="buy_bt"><a href="#">Buy Now</a></div>
                                        <div class="seemore_bt"><a href="#">See More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <a class="carousel-control-prev" href="#main_slider" role="button" data-bs-slide="prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control-next" href="#main_slider" role="button" data-bs-slide="next">
            <i class="fa fa-angle-right"></i>
        </a>
    </div>
</div>
  )
}

export default Electronics
