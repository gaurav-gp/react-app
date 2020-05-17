import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
constructor(props) {
    super(props);

    this.state = {
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
    console.log("You are logged in");
    console.log(this.state);
    this.setState({
    email: "",
    password: "",
    });
}

render() {
    return (
    <div className="login">
        <div className="container py-5">
        <div className="row">
            <div className="col-10 mx-auto col-md-12 my-3 text-center">
            <form onSubmit={this.displayLogin}>
                <h2>Login</h2>
                <div className="username mt-3 mb-3">
                <input
                    type="email"
                    placeholder="Username..."
                    value={this.state.email}
                    onChange={this.update}
                    name="email"
                />
                </div>

                <div className="password mt-3 mb-3">
                <input
                    type="password"
                    placeholder="Password..."
                    value={this.state.password}
                    onChange={this.update}
                    name="password"
                />
                </div>

                
                <button className="btn btn-primary mt-3 mb-3" type="submit" value="Login">Login</button>
            </form>

            <Link to="/registrations">Create an account</Link>
            </div>
        </div>
        </div>
    </div>
    );
}
}

export default Login;
