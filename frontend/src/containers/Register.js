import React from 'react'
import './Register.css'
import { connect } from 'react-redux';
import { registerRequest } from '.././actions/ActionType.js';

// const mapStateToProps = (state) => {
//     return {
//         status: state.authentication.register.status,
//         errorCode: state.authentication.register.error
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         registerRequest: (id, pw) => {
//             return dispatch(registerRequest(id, pw));
//         }
//     };
// };

function Register() {
  return (
    <div>
        <div class="container auth">
            <a class="logo">MEMOPAD</a>
            <div class="card">
                <div class="header blue white-text center">
                    <div class="card-content">REGISTER</div>
                </div>
                <div class="card-content">
                    <div class="row">
                        <div class="input-field col s12 username">
                            <label>Username</label>
                            <input
                                name="username"
                                type="text"
                                class="validate"/>
                        </div>
                        <div class="input-field col s12">
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                class="validate"/>
                        </div>
                        <a class="waves-effect waves-light btn">CREATE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;
