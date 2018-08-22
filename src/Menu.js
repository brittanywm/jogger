import React from 'react'; // Dumb component because only need to deal with props (not states)
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Menu = () => (
 
   <nav className="menu">
    <Link to="/dashboard">
      <p>DASHBBOARD</p>
    </Link>
    <Link to="/add-run">
      <p>ADD RUN</p>
    </Link>
    <Link to="/run-history-list">
      <p>RUN HISTORY</p>
    </Link>
  </nav>
)
 

export default Menu;