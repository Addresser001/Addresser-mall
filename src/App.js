import{BrowserRouter as Router, Route, Switch}from 'react-router-dom'
import About from './Pages/About';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import NavBar from "./Components/NavBar";
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';
import Footer from './Components/Footer';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      
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

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <Footer/>
      
    </Router>
  );
}

export default App;
