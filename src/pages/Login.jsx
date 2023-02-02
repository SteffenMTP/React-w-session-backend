import React, { useContext } from 'react'
import {Navigate} from 'react-router-dom'
// import logincontext for at kunen gemme globalt om der er logget ind
import { LoginContext } from '../context/LoginContext'

const Login = () => {

    const { signIn, adminUser } = useContext(LoginContext)

    // hvis der er en bruger/logget ind så send direkte videre til admin
    if (adminUser) {
        return <Navigate to="/admin" replace />
    }

    // håndter loginformularens submit
    const handleLogin = (e) => {
        e.preventDefault()
        //simulerer login
        signIn(e.target.email.value)
        
        // let email = e.target.email.value
        // let pw = e.taarget.password.value

        // if(email === "admin@admin.dk" && pw === "123456") {
        // }

    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label> Email:
                        <input type="text" name='email' defaultValue="admin@admin.dk" required placeholder='Email' />
                    </label>
                </div>
                <div>
                    <label> Password:
                        <input type="text" name='password' defaultValue="123456" required placeholder='Password' />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login