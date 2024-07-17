import React, { useEffect, useState } from 'react'
import { PanelContext } from './PanelContext'
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const PanelProvider = ({children}) => {

  const navigator = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //  making this function global to check admin or a user
 

    const checkAuthStatus = () => {

   
    const token = localStorage.getItem('token');
    if (token) {
              // to be done later 
    }else{
      setIsAuthenticated(false)
    }

  }
 


  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
     navigator("/login")
    
  };


  return (
    <PanelContext.Provider value={{isAuthenticated,  setIsAuthenticated, checkAuthStatus, logout}}>
      { children }
    </PanelContext.Provider>
  )
}

export default PanelProvider;
