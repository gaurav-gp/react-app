import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
constructor(props) {
    super(props);

    this.state = {
    fullname: "",
    email: "",
    password: "",
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
}

update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
    [name]: value,
    });
}

displayLogin(e) {
    e.preventDefault();
    console.log("You have successfully registered");
    console.log(this.state);
    this.setState({
    fullname: "",
    email: "",
    password: "",
    });
}

render() {
    return (
    <div className="register">
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-12 my-3 text-center">
                    <form onSubmit={this.displayLogin}>
                        <h2>Register With Us</h2>

                        <div className="name mt-3 mb-3">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullname"
                            value={this.state.fullname}
                            onChange={this.update}
                        />
                        </div>

                        <div className="email mt-3 mb-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.update}
                        />
                        </div>

                        <div className="pasword mt-3 mb-3">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.update}
                        />
                        </div>

                        <div className="password mt-3 mb-3">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password1"
                        />
                        </div>

                        <button className="btn btn-primary mt-3 mb-3" type="submit" value="Register">Register</button>
                    </form>

                    <Link to="/login">Login Here</Link>
                </div>
            </div>
        </div>
    </div>
    );
}
}

export default Register;
