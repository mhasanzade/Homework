import React from 'react';
import { useCart } from 'react-use-cart';
import { RatingView } from 'react-simple-star-rating';
// import Card from './Cards';
import {BrowserRouter, Link, Router} from 'react-router-dom';

const CartItem = (props) => {
    const {addItem} = useCart();
    return (
            <div className="card col-lg-3 col-md-4 col-sm-6 col-6" >
                <div className="card-image">
                    <h3>HOT</h3>
                    <img src={props.img} className="card-img-top" alt="err" />
                    <div className="image-info">

                    <button className="btn btn-primary" onClick={()=>addItem(props.item)}>Add to card</button>
                    </div>
                </div>
                <div className="card-body"> 
                <h3 className="card-title">{props.title}</h3>
                <p className="card-rating"><RatingView ratingValue={props.starcount} fillColor={'#6a6a6d'} /* RatingView Props */ /></p>
                <h5 className="card-price">${props.price}</h5>
                
                </div>
                
            </div>
            
    )
}

export default CartItem
