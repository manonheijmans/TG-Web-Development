import React, { useState } from "react"
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    
        <div className="user-container">
          <h2>Profile</h2>
          {error && <p className="alert">{error}</p>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile">
            Update Profile
          </Link>
        </div>
     
      <div className="w-100 text-center mt-2">
        <button onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  )
}