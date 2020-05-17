import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import{Link} from 'react-router-dom';

export default class Details extends React.Component {
    render() {
        return (
        <ProductConsumer>
            {(value) =>{
                const{id,company,img,info,price,title,inCart}= value.detailProduct
                return(
                    <div className="container py-5">
                        
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img img-fluid"/>
                            </div>

                            <div className="col-10 mx-auto col-md-6 my-3">
                            
                                <h5>{title}</h5>
                                <h6 className="text-muted mt-3 mb-3">
                                    Developed By:<span className="text-uppercase">
                                        {company}
                                    </span>
                                </h6>
                                <h5 className="mt-3 mb-3"><span>$</span>{price}</h5>
                                <p className="mt-3 mb-3 text-muted">{info}</p>
                                <Link to="/">
                                    <button className="btn btn-secondary btn-sm">Back To Shop</button>                                    
                                </Link>
                                <button className="btn btn-primary btn-sm ml-3" disabled={inCart?true:false}
                                onClick={() => {
                                    value.addToCart(id)
                                    value.openModal(id);
                                }}
                                >
                                    {inCart ? "inCart" : "Add To Cart"}
                                    {/* <button ><span><i className="fa fa-shopping-cart"/>Add To Cart</span></button>                                     */}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
        )
    }
}
