import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
 const { user, setUser } = useContext(UserContext);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const navigate = useNavigate();

 if (user.token) {
  return <Navigate to="/" />;
 }

 const handleSubmit = (e) => {
  e.preventDefault();

  let userAuth = {
   username: email,
   password: password,
   token: true,
  };

  if (email && password) {
   setUser(userAuth);
   alert("Inicio de sesión exitoso!");
   navigate("/profile");
  } else {
   setError("Credenciales incorrectas");
  }
 };

 return (
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
        required
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
        required
       />
      </div>
      {error && (
       <p className="alert alert-danger" style={{ textAlign: "center" }}>
        {error}
       </p>
      )}
      <button type="submit" className="btn btn-primary mt-2">
       Login
      </button>
     </form>
    </div>
   </div>
  </div>
 );
};

export default Login;
