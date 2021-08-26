import React, { Component } from 'react';
import logo from "./img/logo.png";
import { CartProvider } from 'react-use-cart';
import {BrowserRouter, Route, Link, Router} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBus, faClock, faClone, faCoins, faEnvelope, faHeart, faHome, faNewspaper, faPhone, faSearch, faShoppingBag, faStar, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

export default class Nav extends Component {
    render() {
        return (
            <div className="header">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand col-lg-1 col-md-2 col-sm-3 col-3"><img src={logo} alt="X" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" href="#">Cloth</a></li>
                    <li><a class="dropdown-item" href="#">Watches</a></li>
                    <li><a class="dropdown-item" href="#">Dress</a></li>
                    <li><a class="dropdown-item" href="#">Com</a></li>
                    <li><a class="dropdown-item" href="#">Headphone</a></li>
                    <li><a class="dropdown-item" href="#">Fashion</a></li>
                    <li><a class="dropdown-item" href="#">T-Shirts</a></li>
                </ul>
                </li>
                <button class="btn btn-outline" type=""><FontAwesomeIcon icon={faSearch}/></button>
            </form>

            <div className="call">
                <div className="call-icon">
                    <FontAwesomeIcon icon={faPhone}/>
                </div>
                <div className="call-text">
                    <h3>CALL US NOW</h3>
                    <p>+123 5678 890</p>
                </div>
            </div>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faUser}/></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><FontAwesomeIcon icon={faHeart}/></a>
                </li>
                <li class="nav-item ">
                    <CartProvider>
                {/* <BrowserRouter> */}
                <Link to="/Finally"> 
                <a class="nav-link" id="navbar" role="button" aria-expanded="false">
                    <FontAwesomeIcon icon={faShoppingBag}/>
                </a>
                    </Link>
                    {/* <Card/> */}
                    {/* </BrowserRouter> */}
                    </CartProvider>

                </li>
            </ul>
            </div>
        </div>
        </nav>

            </div>
            <div className="three-section">
                    <div className="container">
                        <div className="three col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="three-icon">
                                    <FontAwesomeIcon icon={faBus}/>
                                </div>
                                <div className="three-text">
                                    <h3>FREE SHIPPING & RETURN</h3>
                                    <p>Free shipping on all orders over $99</p>
                                </div>
                        </div>
                        <div className="three col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="three-icon">
                                    <FontAwesomeIcon icon={faCoins}/>
                                </div>
                                <div className="three-text">
                                    <h3>FREE SHIPPING & RETURN</h3>
                                    <p>Free shipping on all orders over $99</p>
                                </div>
                        </div>
                        <div className="three col-lg-4 col-md-12 col-sm-12 col-12" id="three">
                                <div className="three-icon">
                                    <FontAwesomeIcon icon={faClock}/>
                                </div>
                                <div className="three-text">
                                    <h3>FREE SHIPPING & RETURN</h3>
                                    <p>Free shipping on all orders over $99</p>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
