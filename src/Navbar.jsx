import React from "react";
import { useState } from 'react'
import { UseEffect } from "react";


const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>PROJECT ZURI</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
        </nav>
    );
}
export default Navbar;