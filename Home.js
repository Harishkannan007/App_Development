import React from 'react'
import './Home.css';
import park from './park.jpg';
import Navbar from './Navbar';
function Home() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
    <a href="#" class="logo">HomeGarden</a>
    <p>Welcome harish</p>
    <nav class="nav-items">
      <a href="/Gardenplanning">Garden Planning</a>
      <a href="#">Season</a>
      <a href="remainder">Remainder</a>
      {/* <a href="#">Garden Journal</a> */}
      <a href="about">About</a>
      <a href="Contact">Contact</a> 
      <a href="Login">Login</a>
      <a href="Reg">Register</a>
    </nav>
  </header>
  <main>
    <div class="intro1">
      <h1 >Welcome</h1>
      <p></p>
      {/* <button>Explore</button> */}
    </div>
    <div class="about-me">

    </div>
    </main>
  
  </div>
)
}

export default Home



