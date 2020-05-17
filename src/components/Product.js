import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropeTypes from "prop-types";

export default class Product extends Component {
render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
    <ProductContainer className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
            <ProductConsumer>
                {(value) => (
                    <div className="img-div"  onClick={() => {
                        value.handleDetail(id)
                    }}>
                    <button
                        className="btn btn-primary btn-sm float-right m-1"
                        disabled={inCart ? true : false}
                        onClick={() => {
                            value.addToCart(id)
                            value.openModal(id);
                        }}
                        >
                        {inCart ? (
                            <p disabled>
                            {" "}
                            incart
                            </p>
                        ) : (
                            <i className="fa fa-shopping-cart" />
                        )}
                        </button>
                        <Link to="/details">
                        <img src={img} alt="detail image" className="card-img-top"></img>
                        </Link>
                </div>
                )}
    
            </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">
                                {title}
                            </p>
                        <h4 className="text-black">
                            <span>$</span>{price}
                        </h4>
                    </div>
                </div>
                
    </ProductContainer>
    );
}
}

Product.propeTypes = {
    product:PropeTypes.shape({
        id:PropeTypes.number,
        img:PropeTypes.string,
        title:PropeTypes.string,
        price:PropeTypes.number,
        inCart:PropeTypes.bool,
    }).isRequired
}

const ProductContainer = styled.div``;
