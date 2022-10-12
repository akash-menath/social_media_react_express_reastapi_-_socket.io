import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

export default function Auth() {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                 
                </div> 
            </div>
                {/* <Login/> */}
            <Signup />
        </div>
    )
}
function Login(){
    return(
        <div className="a-right">
            <form className='info-form auth-form'>
                <h3>Log In</h3>
                <div>
                    <input type="text"
                    placeholder='Username'
                    name='username'
                    className="info-input"
                     />
                </div>
                <div>
                    <input type="text"
                    placeholder='Password'
                    name='password'
                    className="info-input"
                     />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Don't have an account Sign up </span>
                    <button className="button infoButton ">Login</button>
                </div>
            </form>
        </div>
    )
}
function Signup() {
    return (
        <div className="a-right">
            <form className='info-form auth-form'>
                <h3>Sign Up</h3>
                <div>
                    <input type="text"
                        placeholder='First name' 
                        className="info-input"
                        name='firstName' />
                    <input type="text"
                        placeholder='Last name'
                        className="info-input"
                        name='lastName' />
                </div>
                <div>
                    <input type="text"
                        placeholder='User name'
                        name='userName'
                        className="info-input" />
                </div>
                <div>
                    <input type="text"
                        placeholder='Password'
                        name='password'
                        className="info-input" />
                    <input type="text"
                        placeholder='Confirm-Password'
                        name='confirm-assword
                 ' className="info-input" />
                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
                </div>
                <button className="button infoButton" type='submit'>Signup</button>
            </form>
        </div>
    )
}
