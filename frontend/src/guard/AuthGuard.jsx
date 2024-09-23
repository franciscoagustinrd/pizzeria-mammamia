import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthGuard = ({ children }) => {
 const { user } = useContext(UserContext);

 if (!user.token) {
  return <Navigate to="/login" />;
 }

 return children;
};

export default AuthGuard;
