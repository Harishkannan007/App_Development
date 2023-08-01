// import React from 'react'
// import './About.css';
// // import plant01 from './plant01.jpg';
// import  plants from './plants.jpg';
// function About() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//   <header class="header">
//   {/* <img src={plants.jpg} width={50} height={50}></img> */}

//     <a href="#" class="logo">HomeGarden</a>
//     <nav class="nav-items">
//       <a href="Gardenplanning">Garden Planning</a>
//       <a href="#">Season</a>
//       <a href="remainder">Remainder</a>
//       {/* <a href="#">Garden Journal</a> */}
//       <a href="about">About</a>
//       <a href="ContactPage">Contact</a> 
//       <a href="Login">Login</a>
//       <a href="Reg">Register</a>
//     </nav>
//   </header>
//   <main>
//     <div class="about-intro1">
//       <h1 >About </h1>
//       <p></p>
      
//     </div>
//      <div class="about-you">
//     </div> 
//     <h2>Creating a home and garden app requires a thoughtful approach to provide users with valuable content and features that cater to their gardening and home improvement needs. Here are some content ideas for a home and garden app:</h2>

//     </main>
//   </div>
// )
// }

// export default About


import React from 'react'
import plants from './plants.jpg';
import bg002 from './bg002.jpg'
// import plant02 from './plant.png';
import './About.css';
import Garden from './Gardenplanning';
// import Fruits from './Fruits.jpg';

function About() {
  return (
    <div>
  <header class="header">
  <img src={Garden.jpg} width={70}></img>
    <a href="home" class="logo">HomeGardening</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    <a href="garden">Garden Calender</a>
    <a href="remainder">Remainder</a> 
      {/* <a href="#">Garden Journal</a>   */}
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>
  <main>
    <div class="a-intro">
      <h1>About us</h1>
      
    </div>
    
    <div class="a-about">
        <p></p>
       <center> <h2>“My garden is my most beautiful masterpiece.”
</h2></center>
{/* <center>
    <img src={Fruits.jpg} width={1000} height={600}></img>
        </center> */}
   <center> <h3>Welcome to our Home Garden Application, where we help you unlock the beauty 
        and potential of your green spaces. At Home Garden, we are dedicated to providing a 
        seamless gardening experience for enthusiasts of all levels, from beginners to seasoned gardeners.Our mission is to empower individuals to create and maintain their dream gardens right at home. 
            Whether you have a small balcony or a spacious backyard, our user-friendly
             application offers a wide range of features and resources to support your gardening journey.</h3></center>
        </div>
    <div class="a-about">
        <p></p>
    </div>
    <div class="a-about">
        <p></p>
       <center><h2>Garden Design and Inspiration: Offer ideas and inspiration for garden designs, landscaping, and outdoor decor. Include images, articles, and videos showcasing beautiful gardens for different styles and sizes.</h2></center> 
    </div>
    </main>
  
  </div>
)
}

export default About


