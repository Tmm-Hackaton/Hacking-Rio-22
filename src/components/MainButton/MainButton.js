import * as React from "react";
import "./MainButton.css";
import { Link } from "react-router-dom";

export const MainButton = () => {
  return (
 <> 
   <Link to={"/guias"}>
   
   
    <button
        className="btn"      
      >
        Entrar
      </button>   
     </Link>
    </>
  );
};
