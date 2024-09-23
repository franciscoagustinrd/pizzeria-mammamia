import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import profileImage from "../assets/profile-sample.png";

export default function Profile() {
 const { user, logout } = useContext(UserContext);

 if (!user.token) {
  return <Navigate to="/login" />;
 }

 return (
  <div className="footer-fix">
   <div className="container text-center mt-5 pt-5">
    <img
     src={profileImage}
     className="rounded-circle mb-3"
     style={{ width: "100px" }}
     alt="Perfil"
    />
    <h5 className="mb-2">
     <strong>Francisco Romero</strong>
    </h5>
    <p className="text-muted">
     Pizzaiolo <span className="badge bg-primary">Primerizo</span>
    </p>
    <h4>francisco@gmail.com</h4>
    <button className="btn btn-outline-danger mt-2" onClick={logout}>
     Cerrar sesión
    </button>
   </div>
  </div>
 );
}
