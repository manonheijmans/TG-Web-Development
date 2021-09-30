import React, { useRef, useState } from "react"
import { useAuth } from '../../contexts/AuthContext'
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="auth-container">
        <Link to="/"><span className="close"></span></Link>
        <div className="auth-card-content">
          <h2 className="auth-card-title">Password Reset</h2>
          {error && <p className="alert">{error}</p>}
          {message && <p>{message}</p>}
          <form className="auth-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              required />
            <div className="auth-redirect">
              <Link to="/login">Back to login?</Link>
            </div>
            <button className="button" disabled={loading} type="submit">
              Reset password
            </button>
          </form>
          <div className="auth-sign-up-link">
            Need an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>

      </div>
    </>
  )
}