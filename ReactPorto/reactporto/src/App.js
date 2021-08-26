import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from "./img/logo.png";
import "./css/style.css";
import CardItem from './CardItem';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBus, faClock, faClone, faCoins, faEnvelope, faHeart, faHome, faNewspaper, faPhone, faSearch, faShoppingBag, faStar, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import Card from './Cards';
import Nav from './Nav'
import Finally from './Finally';
import { CartProvider } from 'react-use-cart';
// import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Link, Router} from 'react-router-dom';
// import { Nav } from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <div className="all">
               
              <Nav/>


                <div className="flex">
                    <div className="container">
                    <div className="browse col-lg-2 col-md-12 col-sm-12 col-12">
                        <h2>Browse categories</h2>
                        <ul>
                            <li id="first-li" style={{backgroundColor: '#0b5ed7'}}><a href="" style={{color:'white'}}><FontAwesomeIcon icon={faHome}/> Home</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faAward}/> Categories</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faShoppingBag}/> Products</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faEnvelope}/> Features</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faNewspaper}/> Blog</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faUsers}/> About Us</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faClone}/> Elements</a></li>
                            <li><a href=""><FontAwesomeIcon icon={faStar}/> Buy Porto!</a></li>
                        </ul>
                    </div>
                    <CartProvider>
                        <div className="card-flex col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="container card-flex-container">
                <div className="row col-lg-12">
                    {data.productData.map((item,index)=>{
                        return(
                            <CardItem
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            starcount={item.starcount}
                            item={item}
                            key={index} />
                        ) 
                    })}
                </div>
                </div>
                {/* <Card/> */}
                </div>
                </CartProvider>
                    </div>
                    
                </div>


                
            </div>
        )
    }
}
const Apps = () => {
    return (
       <BrowserRouter>
           <Route exact path="/" component={App}/>
           {/* <Route path="/Cards" component={Card}></Route> */}
           <Route path="/Finally" component={Finally}/>
       </BrowserRouter>
       
    )
}
export default Apps
