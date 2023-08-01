
// // import logo from './logo.svg';
import './App.css';
import Reg from './Reg';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import Gardenplanning from './Gardenplanning';
import ContactPage from './ContactPage';
import Remainder from './Remainder';
import About from './About';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Reg/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      <Route exact path="/Reg" element={<Reg/>}></Route>
      <Route exact path="/Navbar" element={<Navbar/>}></Route>
      <Route exact path="/Home" element={<Home/>}></Route>
      <Route exact path="/Gardenplanning" element={<Gardenplanning/>}></Route>
      <Route exact path="/ContactPage" element={<ContactPage/>}></Route>
      <Route exact path="/Remainder" element={<Remainder/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;


// // import logo from './logo.svg';
// import './App.css';
// import Reg from './Reg';
// import Login from './Login';
// import Home from './Home';
// import { BrowserRouter, Route , Routes } from 'react-router-dom';

// function App() {
//   return (
//     // <div className="App">
//     //  <Home/>
//     <BrowserRouter>
//     <Routes>

// <Route exact path="/" element={<Reg/>}></Route>
// <Route  path="/Login" element={<Login/>}></Route>
// <Route exact path="/Reg" element={<Reg/>}></Route>
// {/* <Route exact path="/Navbar" element={<Navbar/>}></Route> */}
// <Route exact path="/Home" element={<Home/>}></Route>
// </Routes>
//     </BrowserRouter>

     
//     // </div>
//   );
// }

// export default App;