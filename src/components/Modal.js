import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen,closeModal} = value;
                const {img, title, price} = value.modelProduct;    
                
                if(!modalOpen){
                    return null;
                }
                else{
                    return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal"className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center">
                                        <h5>Item Added To The Cart</h5>
                                        <img src={img} className="img img-fluid"></img>
                                        <h5>{title}</h5>
                                        <h5><span>$</span>{price}</h5>
                                        <Link to="/shop" >
                                            <button class="btn btn-secondary btn-sm"
                                            onClick={()=>closeModal()}>
                                                Shop
                                            </button>
                                        </Link>
                                        <Link to="/cart" >
                                            <button class="btn btn-primary btn-sm ml-3"
                                            onClick={() =>closeModal()}>
                                                Add To Cart
                                            </button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    );
                }
            }}
        </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-item:center;
    justify-content:center;
    #modal{
        background:var(--mainwhite)
    }
`;
