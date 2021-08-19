import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="auth-card">
        <div className="auth-card-content"> 
        <h2>Update Profile</h2>  
        {error && <p className="alert">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            required
            defaultValue={currentUser.email}
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            ref={passwordRef}
            required
            placeholder="Leave blank to keep the same"
          />
          <label htmlFor="password-confirm">password</label>
          <input
            type="text"
            id="password-confirm"
            ref={passwordConfirmRef}
            required
          />

         
          <button disabled={loading} type="submit">
            Update
          </button>
        </form>
      </div>
      <div>
        <Link to="/">Cancel</Link>
      </div>
      </div>
    </>
  );
}
