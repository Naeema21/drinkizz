import React from 'react'
import SignIn from '../SignIn/SignIn'

const SignInFirst = () => {
    return (
        <div className='SignInFirst p-3'>
            <div className='card text-center'>
                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                className = "img-fluid"></img>
                <h6>Missing Cart Item?</h6>
                <p>Login to see the items you added previously</p>
                <SignIn />
            </div>
        </div>
    )
}

export default SignInFirst
