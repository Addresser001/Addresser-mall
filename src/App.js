import{BrowserRouter as Router, Route, Switch}from 'react-router-dom'
import About from './About page/About';
import Cart from './Cart page/Cart';
import LengthContextProvider from './Context/LengthContext';
import Home from './Home page/Home';
import NavBar from "./NavBar";
import ProductDetails from './Product Details/ProductDetails';
import Products from './Products page/Products';

function App() {
  return (
    <Router>
      <LengthContextProvider>
      <div className="App">
        <NavBar/>
      </div>
      <div className="Content">
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/About'>
            <About/>
          </Route>

          <Route path='/Products'>
            <Products/>
          </Route>

          <Route path='/Data/:id'>
            <ProductDetails/>
          </Route>

          <Route path='/Cart'>
            <Cart/>
          </Route>
        </Switch>
      </div>
      <div className="Footer" style={{backgroundColor:"#222", width:"100%", padding:"30px 0px", textAlign:"center"}}>
        <h5 style={{color:"white", fontWeight:"lighter", fontSize:"16px", wordSpacing:"2px", letterSpacing:"1.5px"}}>© 2021 <span style={{color:"#ab7a5f"}}>AddresserMall</span> All rights reserved</h5>
      </div>
      </LengthContextProvider>
    </Router>
  );
}

export default App;
