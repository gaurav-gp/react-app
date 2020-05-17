import React from 'react'
import {Link} from 'react-router-dom'
export default function CartTotals({value}) {
    const{cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className="col-lg-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right mt-5 mb-5">
                <Link to="/">
                    <button className="btn btn-danger" type="button"
                    onClick={()=>{
                        clearCart()
                    }}
                    >Clear Cart</button>
                </Link>
                <h5>
                    <span className="text-title">
                        subtotal:</span>
                    <b>${cartSubtotal}</b>
                </h5>
                <h5>
                    <span className="text-title">
                        tax:</span>
                    <b>${cartTax}</b>
                </h5>
                <h5>
                    <span className="text-title">
                        total:</span>
                    <b>${cartTotal}</b>
                </h5>
            </div>
        </React.Fragment>
            
    )
}
