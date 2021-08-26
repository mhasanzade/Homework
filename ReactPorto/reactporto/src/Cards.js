import { render } from '@testing-library/react';
import React from 'react';
import {CartProvider, useCart} from 'react-use-cart';
import CardItem from './CardItem';
import data from './data';

const Card = () => {

    const{
        isEmpty,
        totalUniqueItems,
        items,totalItems,
        cartTotal,updateItemQuantity,
        removeItem,
        emptyCart,} = useCart();
    
   if(isEmpty) return <h1 style={{textAlign:'center', margin:'40px 0', fontWeight:'700', borderTop:'1px solid #e7e7e7', borderBottom:'1px solid #e7e7e7', padding:'20px 0'}} >Cart is empty</h1>

    return (
        <div>
            {/* <CartProvider> */}
                <selection className="py-4 container">

                    <div className="row justify-content-center hepsi">
                        <div className="col-9 items">
                            <div className="trio">
                                <h2><span style={{color:'#08c'}}>Checkout</span> <span> > Order Complete</span></h2>
                            </div>
                            <div className="order">
                                <h3>YOUR ORDER</h3>
                                <h4>Product</h4>
                            
                            <table className="d-flex align-items-center justify-content-center table table-light table-hover m-0">
                                <tbody>
                                    {items.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.img} alt="err" style={{height:'6rem'}} />
                                                </td>
                                                <td className="td-item-name">{item.title}<span className="item-quantity"> x {item.quantity}</span></td>
                                                <td className="td-item-price">${item.price}</td>
                                                <td className="td-btn">
                                                    <button className="btn btn-success ms-2" onClick={()=>
                                                        updateItemQuantity(item.id, item.quantity - 1)
                                                    }>-</button>

                                                    <button className="btn btn-success ms-2" onClick={()=>
                                                        updateItemQuantity(item.id, item.quantity + 1)
                                                    }>+</button>

                                                    <button className="btn btn-danger ms-2" onClick={()=>
                                                        removeItem(item.id)
                                                    }>Remove Item</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <div className="col-auto total-price d-flex ">
                                <h1>Total: <span> ${cartTotal} </span></h1>
                            </div>
                            </div>
                            {/* <h5>Item ({totalUniqueItems}) // Total Items : ({totalItems})</h5> */}
                        </div>

                        <div className="col-auto buttons ms-auto d-flex align-items-center justify-content-center w-100">
                        <button className="btn btn-dark m-2" onClick={()=>emptyCart()}>Clear Cart</button>
                            <button className="btn btn-primary m-2" >Buy Now</button>
                        </div>
                    </div>
                </selection>
                {/* <Card/> */}
                {/* </CartProvider> */}

            
        </div>
    )
                
}

export default Card