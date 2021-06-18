import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { LengthContext } from "../Context/LengthContext";
import "./Cart.css";
const Cart = () => {

    
    
    
    const [allProduct, setAllProduct] = useState([]);

    function removeCartProducts(id){
        setAllProduct(allProduct.filter(product =>product.id !== id)); 
    };
    
    useEffect(()=>{
        let products =JSON.parse(localStorage.getItem("products"));
        setAllProduct(products);
    }, []);

    useEffect(()=>{
        window.localStorage.setItem("products", JSON.stringify(allProduct));
    }, [allProduct]);

    const pathname=window.location.pathname;


    const {toggleLength}=useContext(LengthContext);

    

    
    return( 
        <div className="Wrapper">
            
            <section className="sub-NavBar-Container">
                <div className="sub-NavBar">
                    <h1><Link to="/" style={{color:"#795744", textDecoration:"none"}}>Home</Link>  <span style={{color:"#453227"}}>{pathname}</span></h1>
                </div>
            </section>
            
           { allProduct &&
                <div className="product-wrapper">
                    <section className="product-headers" >
                        <p className="product-name-Header" style={{textAlign:"center"}}>Items</p>
                        <p >Price</p>
                        <p>Quantity</p>
                        <p >Subtotal</p>
                        <p style={{opacity:0}}><span class="material-icons">delete</span></p>
                                    
                    </section>
                   
                    {
                        allProduct.map(product=>{
                            const { image, name, price, id}=product;
                            return(
                                
                                
                                
                                <section className="product-and-details" key={id}>
                                    <div className="image-and-name">
                                        <img src={image} alt={name}/>
                                        <h4 className="productName">{name}</h4>
                                    </div>
                                    <h5 className="product-price">${price}</h5>
                                    <p className="product-quantity">2</p>

                                    <h5 className="sub-total" style={{marginLeft:"20px"}}>${price}</h5>

                                    <p className="Trash-can" onClick={()=>removeCartProducts(id)}><span onClick={()=>toggleLength()} class="material-icons delete-button">delete</span></p>
                                </section>
                                
                            )
                        })
                    }
                </div>
            }
            
        </div>  
    )
}
 
export default Cart;