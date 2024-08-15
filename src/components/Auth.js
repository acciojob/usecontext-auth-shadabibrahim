import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleClick = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p className={isAuthenticated ? 'authText' : 'notAuthText'}>
        {isAuthenticated ? 'You are now authenticated, you can proceed' : 'you are not authenticated'}
      </p>

      <input type="checkbox" onClick={handleClick} />
      <label>I'm not a robot</label>
    </div>
  );
}

export default Auth;
