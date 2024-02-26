import React,{useState} from 'react';
import {NavLink,Link} from 'react-router-dom';
import "./Navbar.css";
import SearchBar from './SearchBar';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
    const [menuOpen, setMenuOpen]=useState(false)
  return (
    <nav>
        <Link className='title'>Arogya Farms</Link>
    
        <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    <ul className={menuOpen ? "open":""}>
    <li>
      <NavLink onClick={()=>{
            setMenuOpen(!menuOpen)
        }} to="/" >Home</NavLink>
    </li>
    <li>
      <NavLink onClick={()=>{
            setMenuOpen(!menuOpen)
        }} to="About">About</NavLink>
    </li>
   
    <li>
      <NavLink onClick={()=>{
            setMenuOpen(!menuOpen)
        }} to="Contact">Contact</NavLink>
    </li>
    <li>
      <NavLink onClick={()=>{
            setMenuOpen(!menuOpen)
        }} to="Cart">Cart</NavLink>
    </li>
  </ul>
  </nav>
  );
}
