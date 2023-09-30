import React, { useState } from "react";
import Logo from "../assets/l2.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/Navbar.css";
import { Button } from "@mui/material";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/shop">Now</Link>
          <Link to="/shows">Next</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className="rightSide"></div>
      <Link to="/">Home</Link>
      <Link to="/shop">Now</Link>
      <Link to="/shows">Next</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">
        <ShoppingCartIcon />
      </Link>
      <Button onClick={toggleNavbar}>
        <ReorderIcon />
      </Button>
    </div>
  );
}

export default Navbar;
