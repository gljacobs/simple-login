import React from 'react';
import './style.css';

function Login() {
    return (
        <div id="logcard" className="row">
            <div className="col s12 m12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Login Here</span>
                        <div className="row">
                            <form id="login" className="col s12 ">
                                <div className="row">
                                    <div className="input-field col s8 offset-s2">
                                        <input id="namein" type="text" className="validate" />
                                        <label for="namein">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s8 offset-s2">
                                        <input id="password" type="password" className="validate" />
                                        <label for="password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <button className="btn waves-effect waves-light col s4 offset-s4" type="submit" name="action">Login
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-action">
                            <a href="#">Don't have an account? Sign up here!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;