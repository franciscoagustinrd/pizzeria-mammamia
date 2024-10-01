import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
 const { token, login } = useContext(UserContext);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 if (token) {
   return <Navigate to="/" />;
 }

 const handleSubmit = async (e) => {
   e.preventDefault();
   setError(''); 

   if (!email || !password) {
     setError('Todos los campos son obligatorios.');
     return;
   }

   if (password.length < 6) {
     setError('La contraseña debe tener al menos 6 carácteres.');
     return;
   }

   setLoading(true); 

   try {
     await login(email, password);
     if (localStorage.getItem('token')) {
      alert("Entraste a tu sesión 🍕");
      navigate('/'); 
     }
    } catch (error) {
     setError('Error en inicio de sesión. Verifica tus datos.'); 
     console.error(error);
   } finally {
     setLoading(false); 
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
           <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
             {loading ? 'Cargando...' : 'Login'}
           </button>
         </form>
       </div>
     </div>
   </div>
 );
};

export default Login;
