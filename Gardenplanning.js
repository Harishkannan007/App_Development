import React from 'react'
import  green from './green.jpg';
import  flower from './flower.jpg';
import  plants from './plants.jpg';
import  Fruits from './Fruits.jpg';
import  Veg from './Veg.jpg';
import bg003 from './bg003.jpg';
import './Gardenplanning.css';
// import Navbar from './Navbar';
function Garden() {
  return (
    <div>
  <header class="header">
  {/* <img src={bg003} width={70}></img> */}
    <a href="home" class="logo">Plant-Me</a>
    <nav class="nav-items">
    <a href="home">Home</a>
    {/* <a href="season">Season</a> */}
    <a href="remainder">Remainder</a>
      {/* <a href="#">Garden Journal</a>   */}
      <a href="about">About</a>
      <a href="contact">Contact</a> 
      <a href="login">Login</a>
      <a href="createac">Register</a>
    </nav>
  </header>

  <main>
    <center>
      <h2> Common House Plants for Indian Homes</h2></center>
  <div className="plant-image">
    <center>
    <img src={green} width={1000} height={600}></img>
        </center>
 <center>
      <h2>Introduction to Garden Flowers</h2></center>
      <center><h3>Garden flowers are cultivated plants renowned for their aesthetic appeal and ornamental value. These vibrant botanical wonders are nurtured in diverse outdoor spaces, including gardens, parks, and public areas, as well as indoors in homes and offices. With an extensive range of types and varieties, garden flowers contribute to the beauty and ambiance of any landscape.</h3></center>
      
 <center>
 <img src={flower} width={1000} height={600}></img>
 </center>
 <center>
      <h2>Introduction to Plants</h2></center>
      <center><h3>Garden plants encompass a wide variety of cultivated flora that add beauty, greenery, and vitality to outdoor spaces. They are carefully chosen and nurtured to enhance gardens, parks, and other landscaped areas. From towering trees to delicate shrubs and colorful flowering plants, garden plants contribute to the overall aesthetics and ecological balance of the environment.</h3></center>
      <center>
 <img src={plants} width={1000} height={600}></img>
 </center>
 <center>
      <h2>Introduction of Garden Fruits </h2></center>
      <center><h3>Garden fruits and vegetables refer to the edible plants that are specifically grown in gardens for their fruits or edible parts. They are cultivated by gardeners and home growers to provide a fresh and nutritious food source. Here are some common garden fruits and vegetables.</h3></center>
      <center>
 <img src={Fruits} width={900} height={600}></img>
 </center>
 <center>
      <h2>Introduction of Garden vegetables </h2></center>
      <center><h3>Garden vegetables refer to the edible plants that are specifically grown in gardens for their fruits or edible parts. They are cultivated by gardeners and home growers to provide a fresh and nutritious food source. Here are some common garden fruits and vegetables.</h3></center>
      <center>
 <img src={Veg} width={900} height={600}></img>
 </center>
 </div>
</main>
  </div>
  
  )
  }

export default Garden