import React, { Component } from 'react'
import { CartProvider } from 'react-use-cart'
import {BrowserRouter, Route, Link, Router} from 'react-router-dom';
import Card from './Cards';
import App from './App';
// import data from './data';
import Nav from './Nav';
import CardItem from './CardItem';
// import { Nav } from 'react-bootstrap';


export default class Finally extends Component {
    render() {
        return (
        <BrowserRouter>
        <Nav/>
                    {/* <App/> */}
                    <CartProvider>
                        <Card/>        
                </CartProvider>
       </BrowserRouter>
        )
    }
}
