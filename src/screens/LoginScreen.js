import React, { useState, useEffect } from 'react'
import './LoginScreen.css'

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    useEffect(() => {

    }, [])

    return (
        <div className='loginScreen'>
            <div className='login'>
                <img className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                />
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen_button'
                >
                    Sign In
                </button>

                <div className='loginScreen_gradient' />

                <div className='loginScreen_body'>
                    <>
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch anywhere, Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create o restart your membership.</h3>
                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Email Address'/>
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen_getStarted'
                                >
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
