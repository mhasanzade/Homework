import React, { Component } from 'react';
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png";
import business from "./img/business.png";
import website from "./img/website.png";
import marketing from "./img/marketing.png";
import about from "./img/about.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faLayerGroup, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import user1 from './img/user1.jpg';
import user2 from './img/user2.jpg';
import user3 from './img/user3.jpg';
import user4 from './img/user4.jpg';
import user5 from './img/user5.jpg';
import user6 from './img/user6.jpg';
import user7 from './img/user7.jpg';
import user8 from './img/user8.jpg';
import brand1 from './img/brand1.png';
import brand2 from './img/brand2.png';
import brand3 from './img/brand3.png';
import brand4 from './img/brand4.png';
import brand5 from './img/brand5.png';
import brand6 from './img/brand6.png';
import brand7 from './img/brand7.png';
import brand8 from './img/brand8.png';
import brand9 from './img/brand9.png';





export class All extends Component {
      render() {
        var settings = {
            centerMode: true,
            centerPadding: '300px',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,

            responsive: [
                {
                  breakpoint: 1263,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding:'20px'


                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding:'20px'
                  }
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          };
        return (
            <div className="all">
                <div className="black">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <a class="navbar-brand col-lg-2 col-sm-3 col-4" href="#">
                        <img src={logo} alt="" />
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blocks</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacts</a>
                        </li>
                        </ul>

                        <button class="btn btn-outline-success my-2 my-sm-0 d-none d-lg-flex" type="submit">Buy now</button>

                    </div>
                </nav>
                <div className="container mt-5">
                    <div className="heading-agency col-lg-8 col-md-8 col-sm-8">
                        <h1>A DIGITAL <br /> AGENCY.</h1>
                    </div>
                    <div className="services mt-5">
                        <div className="row">
                            <div className="service col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="icon">
                                    <img src={business} alt="" />
                                </div>
                                <h3>Business Stratagy</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>

                            <div className="service col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="icon">
                                    <img src={website} alt="" />
                                </div>
                                <h3>Website Development</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>

                            <div className="service col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="icon">
                                    <img src={marketing} alt="" />
                                </div>
                                <h3>Marketing & Reporting</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>


                <div className="about">
                    <div className="container">
                        <div className="about-image col-lg-5 col-md-12 col-sm-12 col-xs-4 ">
                            <div className="margin-img">
                              <img src={about} alt="" />
                            </div>
                            
                        </div>
                        <div className="about-text col-lg-7 col-md-12 col-sm-12 col-12">
                            <div className="text-1">
                                <h2>About</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                            </div>
                            <div className="text-2">
                                <div className="text-2-col col-lg-6">
                                    <h3>Who we are</h3>
                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                                <div className="text-2-col col-lg-6">
                                    <h3>Who we are</h3>
                                    <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="services-4">
                    <div className="container mt-4 mb-4">
                    <div className="left-text col-lg-4 ">
                        <h2>Services</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        <div className="service-btn">
                            <a href="">Request Custom Service</a>
                        </div>
                    </div>
                    <div className="right-text col-lg-7">
                        <div className="card col-lg-6 col-sm-6">
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faAddressCard} className="icon-4"/>
                            </div>
                            <h3>Business Stratagy</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>

                        <div className="card col-lg-6 col-sm-6">
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faLayerGroup} className="icon-4"/>
                            </div>
                            <h3>Business Stratagy</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>

                        <div className="card col-lg-6 col-sm-6">
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faUsers} className="icon-4"/>
                            </div>
                            <h3>Business Stratagy</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>

                        <div className="card col-lg-6 col-sm-6">
                            <div className="card-icon">
                                <FontAwesomeIcon icon={faTv} className="icon-4"/>
                            </div>
                            <h3>Business Stratagy</h3>
                            <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                        </div>

                        
                    </div>
                    </div>
                </div>


                <div className="all-works">
                    <div className="container mt-4">
                        <div className="all-works-text col-lg-6 col-md-9 col-sm-11 col-11">
                            <h2>All Works</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        </div>
                    </div>

                    <div className="all-works-slider">
                        <Slider {...settings}>

                            <div className="content">
                                <div className="content-img"></div>
                                <div className="content-text col-lg-12 col-md-12 col-sm-12 col-12">
                                    <p>Development</p>
                                    <h4>Getting tickets to the big show</h4>
                                    <button className="card-btn">Case Study</button>
                                </div>
                            </div>

                            <div className="content" >
                                <div className="content-img" id="content3"></div>
                                <div className="content-text">
                                    <p>Development</p>
                                    <h4>Getting tickets to the big show</h4>
                                    <button className="card-btn">Case Study</button>
                                </div>
                            </div>

                            <div className="content">
                                <div className="content-img" id="content4"></div>
                                <div className="content-text">
                                    <p>Development</p>
                                    <h4>Getting tickets to the big show</h4>
                                    <button className="card-btn">Case Study</button>
                                </div>
                            </div>

                            <div className="content">
                                <div className="content-img" id="content5"></div>
                                <div className="content-text">
                                    <p>Development</p>
                                    <h4>Getting tickets to the big show</h4>
                                    <button className="card-btn">Case Study</button>
                                </div>
                            </div> 

                            <div className="content">
                                <div className="content-img" id="content6"></div>
                                <div className="content-text">
                                    <p>Development</p>
                                    <h4>Getting tickets to the big show</h4>
                                    <button className="card-btn">Case Study</button>
                                </div>
                            </div>
                            
                            <div className="content">
                            <div className="content-img" id="content1"></div>
                                <div className="content-text">
                                    <p>Development</p>
                                    <h4>Getting tickets to the big show</h4>
                                    <button className="card-btn">Case Study</button>
                                </div>
                            </div>

                        </Slider>
                        </div>


                        <div className="our-fun-facts mb-4">
                            <h3>Our Fun Facts</h3>
                            <div className="container">
                                
                            <div className="countup col-lg-3 col-md-3 col-sm-3">
                        <CountUp
                        start={0}
                        end={992}
                        duration={1.75}
                        onPauseResume={1.75}
                        separator=" "
                        delay={0}
                        decimal=","
                        suffix="+"
                        >
                        {({ countUpRef, start }) => (
                            <div>
                            <span ref={countUpRef} />
                                        <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                            </div>
                            
                        )}
                        </CountUp>
                        <p className="countup-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                        </div>

                        <div className="countup col-lg-3 col-md-3 col-sm-3">
                        <CountUp
                        start={0}
                        end={575}
                        duration={1.75}
                        separator=" "
                        delay={0}
                        decimal=","
                        suffix="+"
                        >
                        {({ countUpRef, start }) => (
                            <div>
                            <span ref={countUpRef} />
                                        <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                            </div>
                            
                        )}
                        </CountUp>
                        <p className="countup-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                        </div>

                        <div className="countup col-lg-3 col-md-3 col-sm-3">
                        <CountUp
                        start={0}
                        end={69}
                        duration={1.75}
                        
                        redraw={false}
                        separator=" "
                        delay={0}
                        decimal=","
                        suffix="+"
                        >
                        {({ countUpRef, start }) => (
                            <div>
                            <span ref={countUpRef} />
                                        <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                            </div>
                            
                        )}
                        </CountUp>

                        <p className="countup-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                        </div>
                        </div>
                        </div>
                </div>


                <div className="aklima">
                    <div className="container">
                    <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                    <h6><span>AKLIMA</span>- COO, AMERIMAR ENTERPRISES, INC.</h6>
                    <div className="users">
                        <div className="row">
                            <div className="user">
                                <img src={user1} alt="" />
                            </div>
                            <div className="user">
                                <img src={user2} alt="" />
                            </div>
                            <div className="user">
                                <img src={user3} alt="" />
                            </div>
                            <div className="user">
                                <img src={user4} alt="" />
                            </div>
                            <div className="user">
                                <img src={user5} alt="" />
                            </div>
                            <div className="user">
                                <img src={user6} alt="" />
                            </div>
                            <div className="user">
                                <img src={user7} alt="" />
                            </div>
                            <div className="user">
                                <img src={user8} alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="brands pb-4">
                    <div className="container">
                    <h2>Brands</h2>
                    <div className="row">
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand1} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand2} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand3} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand4} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand5} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand6} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand7} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand8} alt="" />
                        </div>
                        <div className="brand col-lg-2 col-md-3 col-sm-3 col-4">
                            <img src={brand9} alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="row">
                        <div className="footer-left col-lg-6">
                            <div className="footer-left-text">
                            <p>READY TO DO THIS</p>
                            <h2>Let's get <br/> to work</h2>
                            <button className="contact-us">
                                CONTACT US
                            </button>
                            </div>
                        </div>
                        <div className="footer-right col-lg-6">
                            <div className="container">
                            <div className="row">
                                <div className="quick-link col-lg-6 col-md-4 col-sm-12">
                                    <h4>Quick Link</h4>
                                    <ul>
                                        <li><a href="">Work</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Let's talk</a></li>
                                    </ul>
                                </div>

                                <div className="quick-link col-lg-6 col-md-4 col-sm-12">
                                    <h4>Say Hello</h4>
                                    <ul>
                                        <li><a href="">admin@example.com</a></li>
                                        <li><a href="">hr@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="copyright col-lg-12 col-md-12 col-12 col-sm-12">
                                <p>Copyright © 2021 Rainbow-Themes. All Rights Reserved.</p>
                                </div>
                            </div>
                            </div>

                            
                        </div>

                    </div>
                    </div>
                
            </div>


        );
        
      }
}

export default All