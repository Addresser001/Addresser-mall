import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { GeneralContext } from "../Context/generalContext";
import '../styles/NavBar.css';

const NavBar = () => {
    const { allProduct }= useContext(GeneralContext)

    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive);
    };

    return ( 
            
            <div className="navBar">
               
               <div className="mobile-Nav">
                    <h2 className='Title'>Addresser<span>Mall</span></h2>

                    <span class="material-icons mobile-menu-Icon" onClick={handleToggle}>menu</span>
                </div>

                <div className={isActive ? "NavBar-mobileShow" : "content-Container"}>
                    {/* Header & Links section */}
                    <div className="Title-Container">
                        <h2 className='Title'>Addresser<span>Mall</span></h2>
                        <span class="material-icons close-Mobile-Menu-Btn" onClick={handleToggle}>close</span>
                    </div>
                    <section className="navButtons">
                        <Link onClick={handleToggle} to='/'>Home</Link>
                        <Link onClick={handleToggle} to='/About'>About</Link>
                        <Link onClick={handleToggle} to='/Products'>Products</Link>
                    </section>
                    
                    {/* Cart & Login section */}
                    <section className="Cart-and-Login">
                        <Link onClick={handleToggle} to="/Cart"><div className="cartContainer">
                            <h2>Cart</h2>
    <span class="material-icons">shopping_cart</span><sup className="cart-figure">{allProduct &&<p>{allProduct.length}</p>}</sup>
                        </div></Link>

                        <Link onClick={handleToggle} to="/Cart"><div className="loginContainer">
                            <h2>Login</h2>
                            <span class="material-icons">person_add_alt_1</span>
                        </div></Link>
                    </section>
                </div>


                
            </div>
            
            
     );
}
 
export default NavBar;