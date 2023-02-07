import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
// import logincontext for at kunen gemme globalt om der er logget ind
import { LoginContext } from '../context/LoginContext'

import { usePostData } from '../hooks/useRequestData'

const Login = () => {

    const { signIn, adminUser } = useContext(LoginContext)

    const [email, setEmail] = useState()
    const [pw, setPw] = useState()

    const { error, loading, data, postData } = usePostData();

    // lyt efter om login lykkedes = data og et "name" i data
    useEffect(() => {
        
        if (data && data.name) {
            signIn(data.name)
        }
        
        
    }, [data])
    
    // hvis der er en bruger/logget ind så send direkte videre til admin
    if (adminUser) {
        return <Navigate to="/admin" replace />
    }

    // håndter loginformularens submit
    const handleLogin = (e) => {
        e.preventDefault()
        //simulerer login
        // let email = e.target.email.value
        // let pw = e.taarget.password.value

        postData("http://localhost:5111/api/user/login", { email: email, password: pw })

        // if(email === "admin@admin.dk" && pw === "123456") {
        //     signIn(e.target.email.value)
        // }

    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label> Email:
                        <input type="text" onChange={(e) => setEmail(e.target.value)} name='email' required placeholder='Email' />
                    </label>
                </div>
                <div>
                    <label> Password:
                        <input type="password" onChange={(e) => setPw(e.target.value)} name='password' required placeholder='Password' />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login