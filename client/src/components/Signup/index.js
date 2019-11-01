import React from 'react';
import './style.css';
// import testdata from '../../testdata.json'
import API from '../../utils/API';

class Signup extends React.Component {
    state = {
        user: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordCheck: "",
    }
    componentDidMount() {
        // API.createUser("Gabe Jaco", "gj@gmail.com", "password");
        // API.createUser("Mariah Jaco", "mj@gmail.com", "password");
    }

    handleChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    handleLogin = (event) => {
        event.preventDefault();
        API.getUsers()
            .then(users =>
                users.map((user) => {
                    console.log(user);

                    if(user.email === this.state.email) {
                        alert("Email already in use...");
                        return;
                    }
                })
            ).catch(err => {
                console.log(err)
            }
        );

        if(this.state.password !== this.state.passwordCheck) {
            alert("Passwords do not match...");
            return;
        }

        API.createUser((this.state.firstName + " " + this.state.lastName), this.state.email, this.state.password)
        .catch(err => {
            console.log(err)
        })
        .then(() => {
            this.setState({ firstName: "", lastName: "", email: "", password: "", passwordCheck: ""});
            window.location.href = "/"
        });
    }

    render() {
        return (
            <div id="signcard" className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Sign Up Here</span>
                            <div className="row">
                                <form id="signup" className="col s12 ">
                                    <div className="row">
                                        <div className="input-field col m5 offset-m1 s10 offset-s1">
                                            <input id="first-signin" type="text" className="validate" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                            <label htmlFor="namein">First Name</label>
                                        </div>
                                        <div className="input-field col m5 s10 offset-s1">
                                            <input id="last-signin" type="text" className="validate" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                                            <label htmlFor="namein">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s10 offset-s1">
                                            <input id="name-signin" type="text" className="validate" name="email" value={this.state.email} onChange={this.handleChange} />
                                            <label htmlFor="namein">Enter Email to sign up...</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col m5 offset-m1 col s10 offset-s1">
                                            <input id="password1" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange} />
                                            <label htmlFor="password">New Password</label>
                                        </div>
                                        <div className="input-field col m5 s10 offset-s1">
                                            <input id="password2" type="password" className="validate" name="passwordCheck" value={this.state.passwordCheck} onChange={this.handleChange} />
                                            <label htmlFor="password2">Verify Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light col s4 offset-s4" type="submit" name="action" onClick={this.handleLogin}>Signup
                                        <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <a href="/">Return to Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Signup;