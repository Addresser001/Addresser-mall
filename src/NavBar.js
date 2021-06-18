import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { LengthContext } from "./Context/LengthContext";
import './NavBar.css';

const NavBar = () => {
    // const[products, setProducts]=  useState([]);
    // useEffect(()=>{
        
    //         fetch("http://localhost:8000/cart")
    //         .then(response=>{
    //             return response.json()
    //         })
    //         .then(data=>{
    //             setProducts(data)
    //         })
        
    // });

    const {theLength}=useContext(LengthContext)

    const[productLength, setProductLength]= useState(null)
    const[storedProducts, setStoredProducts] = useState([])
    
    
    useEffect(()=>{
       let products = JSON.parse(localStorage.getItem('products'));
         setStoredProducts(products)
    },[]);
    useEffect(()=>{
       
        setProductLength(storedProducts.length) 
    },[theLength]);

    return ( 
            
            <div className="navBar">
                <div className="content-Container">
                    {/* Header & Links section */}
                    <h2 className='Title'>Addresser<span>Mall</span></h2>
                    <section className="navButtons">
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Products'>Products</Link>
                    </section>
                    
                    {/* Cart & Login section */}
                    <section className="Cart-and-Login">
                        <Link to="/Cart"><div className="cartContainer">
                            <h2>Cart</h2>
                            <span class="material-icons">shopping_cart</span><sup className="cart-figure">{storedProducts &&<p>{productLength}</p>}</sup>
                        </div></Link>

                        <Link to="/Cart"><div className="loginContainer">
                            <h2>Login</h2>
                            <span class="material-icons">person_add_alt_1</span>
                        </div></Link>
                    </section>
                </div>
            </div>
            
            
     );
}
 
export default NavBar;