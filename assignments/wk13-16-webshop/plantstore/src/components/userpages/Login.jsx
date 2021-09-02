import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login({ onRequestClose }) {
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

console.log(useAuth())

  // used to remove error message about memory leak
  useEffect(() => {
    return () => {  
    }
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="auth-container">
      <Link to="/"><span className="close"></span></Link>

      <div className="auth-card-content">
        <h2 className="auth-card-title">Log In</h2>
        {error && <p className="alert">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailRef} required />
       
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
          <div className="auth-redirect">
           <Link to="/password-reset">Forgot Password?</Link>
        </div>
        
          <button className="button" disabled={loading} type="submit">
            Log In
          </button>
        </form>
        

        <div className="auth-sign-up-link">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
