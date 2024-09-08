import { useState } from "react";

export const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
   setError(true);
   return;
  }

  if (password.length >= 6) {
   alert("Authentication sucessful");
   setError(false);

   setEmail("");
   setPassword("");
  } else {
   alert("Password must be at least 6 characters");
  }
 };

 return (
  <>
   <div className="container footer-fix">
    <div className="row">
     <div className="col-lg-6 col-xs-12 p-5 mx-auto">
      <form className="m-5" onSubmit={handleSubmit}>
       <h1 style={{ paddingTop: "70px", color: "#000", textAlign: "left" }}>
        Login
       </h1>
       <div className="form-group my-3">
        <label>Email:</label>
        <input
         type="email"
         name="email"
         className="form-control"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
        />
       </div>
       <div className="form-group my-3">
        <label>Password:</label>
        <input
         type="password"
         name="password"
         className="form-control"
         onChange={(e) => setPassword(e.target.value)}
         value={password}
        />
       </div>
       {error ? (
        <p className="alert alert-danger" style={{ textAlign: "center" }}>
         All fields are required
        </p>
       ) : null}
       <button type="submit" className="btn btn-primary mt-2">
        Login
       </button>
      </form>
     </div>
    </div>
   </div>
  </>
 );
};

export default Login;
