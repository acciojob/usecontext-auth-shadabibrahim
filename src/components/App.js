import React, { useState } from "react";
import "./../styles/App.css";
import { AuthContext } from "../context/AuthContext";
import Auth from "./Auth";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <div>
      {/* Do not remove the main div */}
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Auth />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
