import { useEffect, useState } from "react";
import "./Cart.css";
const Cart = () => {
    let products;
    products = JSON.parse(localStorage.getItem('products'));

    // const[remove, setRemove]=useState(null)

    console.log(products)

    const removeCartProducts=(name)=>{
    
        let products  = JSON.parse(localStorage.getItem("products"))
        products.splice(products.indexOf(name), 1)
        localStorage.setItem("products", JSON.stringify(products));
    }

    // useEffect(()=>{
    //     setRemove(removeCartProducts())
    // },[])

    

    
    return ( 
        <div className="Wrapper">
            
           { products &&
                <div className="product-wrapper">
                    {
                        products.map(product=>{
                            const { image, name, price, id}=product;
                            return(
                                <section className="product-and-details">
                                    <div className="image-and-name">
                                        <img src={image} alt={name}/>
                                        <h3 className="details">{name}</h3>
                                    </div>
                                    <p className="details">${price}</p>
                                    <p className="details">2</p>

                                    <p className="details" onClick={()=>removeCartProducts(name)}>{id}<span class="material-icons">delete</span></p>
                                </section>
                            )
                        })
                    }
                </div>
            }
            
        </div>  
    );
}
 
export default Cart;