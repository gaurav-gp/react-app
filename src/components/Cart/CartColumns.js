import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row mt-5 mb-5">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="test-uppercase">Total</p>
                </div>
            </div>
            
        </div>
    )
}
