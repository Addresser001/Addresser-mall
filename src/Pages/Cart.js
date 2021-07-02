import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { GeneralContext } from "../Context/generalContext";
import "../styles/Cart.css";
const Cart = () => {

    const { allProduct, setAllProduct} =useContext(GeneralContext);
    
    
    

    const removeCartProducts = id => {
        setAllProduct(allProduct.filter(product =>product.id !== id)); 
    };
    
    useEffect(()=>{
        let products =JSON.parse(localStorage.getItem("products"));
        setAllProduct(products);
    }, []);

    useEffect(()=>{
        window.localStorage.setItem("products", JSON.stringify(allProduct));
    }, [ allProduct ]);

    const pathname=window.location.pathname;



    // To display cart items when an item is added and to display "Your Cart is Empty" when nothing is added
    const [ displayCart, setDisplayCart ] = useState(false);

    useEffect(()=>{
        if(allProduct.length >= 1){
            setDisplayCart(true)
        }else{
            setDisplayCart(false)
        }
    },[ allProduct ]);


    
    // Clear Cart Button Function
    const clearCart = () =>{
        setAllProduct([])
    };



    const [ subTotal, setSubTotal ] = useState(0);

    const shippingFee = 5.34

    const [orderTotal, setOrderTotal ] = useState(0)
    useEffect(() =>{
       setSubTotal( allProduct.reduce((total, currentValue) => total = total + currentValue.price, 0));
    }, [ allProduct ]);

    useEffect(()=>{
        setOrderTotal(subTotal + shippingFee)
    },[subTotal])



    console.log(subTotal)

    

    
    return displayCart ? ( 
        <div className="Wrapper">
            
            <section className="sub-NavBar-Container">
                <div className="sub-NavBar">
                    <h1><Link to="/" style={{color:"#795744", textDecoration:"none"}}>Home</Link>  <span style={{color:"#453227"}}>{pathname}</span></h1>
                </div>
            </section>
            
           
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
                        const { image, name, price, id, qty}=product;
                        return(
                            
                            
                            
                            <section className="product-and-details" key={id}>
                                <div className="image-and-name">
                                    <img src={image} alt={name}/>
                                    <h4 className="productName"><span class="mobile-description">Name : </span>{name}</h4>
                                </div>
                                <h5 className="productPrice"><span class="mobile-description">Price : </span>${price}</h5>
                                <p className="product-quantity"><span class="mobile-description">Quantity : </span>{ qty }</p>

                                <h5 className="sub-total"><span class="mobile-description">Subtotal : </span>${price}</h5>

                                <p className="Trash-can" onClick={()=>removeCartProducts(id)}><span  class="material-icons delete-button">delete</span></p>
                            </section>
                            
                        )
                    })
                }

                
            </div>


            <div className="continueShopping-and-ClearShoppingCart">
                <Link className="Product-page-Links" to="./Products">Continue Shopping</Link>

                <button onClick={()=> clearCart() } >Clear Shopping Cart</button>
            </div>


            <div className="bills-Wrapper">
                <div className="bills-Container">
                    <div className="bills-SubContainer">
                        <h5 className="bills">Subtotal : <span>${ subTotal.toFixed(2) }</span></h5>
                        <p className="bills">Shipping Fee : <span>${ shippingFee }</span></p>
                    </div>

                    <div className="Order-total">
                        <h4 className="bills">Order Total : <span>${ orderTotal.toFixed(2) } </span></h4>
                    </div>
                </div>

                <div className="Login-Container">
                    <Link  to="/"><button className="Login">Login</button></Link>
                </div>
            </div>
            
        </div>  
    ) :

    (
        <div className="your-cart-is-empty">
            <h2>Your cart is empty</h2>
            <Link className="Product-page-Links" to="/Products">FILL IT</Link>
        </div>
    )
}
 
export default Cart;