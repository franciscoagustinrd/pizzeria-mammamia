import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext'; 
import { Navigate } from 'react-router-dom';
import profileImage from "../assets/profile-sample.png";

function Profile() {
  const { token, logout, getProfile } = useContext(UserContext); 
  const [email, setEmail] = useState(''); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile(); 
        if (profile && profile.email) {
          setEmail(profile.email); 
        } else {
          setError(true); 
        }
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
        setError(true);
      } finally {
        setLoading(false); 
      }
    };

    if (token) {
      fetchProfile();
    } else {
      setLoading(false); 
    }
  }, [getProfile, token]);


  if (loading) {
    return <p>Cargando perfil...</p>;
  }

  if (!token || error) {
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
     <strong>Nombre Apellido</strong>
    </h5>
    <p className="text-muted">
     Pizzaiolo <span className="badge bg-primary">Primerizo</span>
    </p>
    <h4>{email}</h4>
    <button className="btn btn-outline-danger mt-2" onClick={logout}>
     Cerrar sesión
    </button>
   </div>
  </div>
 );
}
export default Profile;