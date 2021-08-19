import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();



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
      <div className="auth-card-content">
        <h2>Log In</h2>
        {error && <p className="alert">{error}</p>}
        <form className="auth-form" onSubmit={handleSubmit}>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={emailRef} required />
       
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} required />
          <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        
          <button disabled={loading} type="submit">
            Log In
          </button>
        </form>
        

        <div className="auth-card-redirect">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
