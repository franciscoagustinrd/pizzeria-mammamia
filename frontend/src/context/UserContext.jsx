import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
 const [user, setUser] = useState({ username: "", password: "", token: true });

 const logout = () => {
  setUser({ ...user, token: false });
 };

 return (
  <UserContext.Provider value={{ user, setUser, logout }}>
   {children}
  </UserContext.Provider>
 );
};

export default UserProvider;
