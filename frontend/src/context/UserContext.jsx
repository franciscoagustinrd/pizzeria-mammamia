import React, { createContext, useState } from 'react';

export const UserContext = createContext(); 

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log(data);
        setToken(data.token);
        localStorage.setItem('token', data.token);
      } else {
        console.error("Error en login:", data.message);
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

const register = async (email, password) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token); 
      localStorage.setItem('token', data.token); 
    } else {
      console.error("Error en el registro:", data.message);
    }
  } catch (error) {
    console.error("Error en el registro:", error);
  }
};
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error('Error al obtener el perfil del usuario');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      return null;
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    console.log('Logout: token removed');
  };

  return (
    <UserContext.Provider value={{ token, login, register, getProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};
