import React, { useContext } from 'react'

import { LoginContext } from '../context/LoginContext'
import { useGetData } from '../hooks/useRequestData'

//Button til logud
const Logout = () => {

  // det vi skal bruge fra context-filen - signOut
  const { signOut } = useContext(LoginContext)

  const { error, loading, data, getData } = useGetData();

  const handleLogout = () => {

    // giv besked til API om at logge ud (= slet cookie/session)
    getData("http://localhost:5111/api/user/logout")
    signOut()
  }

  return (
    <div>
      <button onClick={handleLogout}>Log ud</button>
    </div>
  )
}

export default Logout