import { useParams } from "react-router";
import '../styles/ProductDetails.css';
import { Link, useHistory } from "react-router-dom";
import useFetch from "../Components/Product-useFetch";
import "../styles/Loading.css";
import { useState } from "react";







const ProductDetails = () => {
    const { id } = useParams();
    const{items, Loading} = useFetch("http://localhost:8000/items/"+id);

    const { name, image, price, desc, Available, SKU, Brand} =items;

    
    
    

    const history = useHistory();
    

    
    
 
    const addToCart=(product)=>{

        let products;
        if(localStorage.getItem('products')== null){
            products = [];
        }else{
            products = JSON.parse(localStorage.getItem('products'));
        }
            
        if (!(products.filter(e => e.id === product.id).length > 0)) {
            if(Qty < 1){
                alert("Invalid Quantity");
                history.go(-1)
            }else{
                products.push(product);
                localStorage.setItem("products", JSON.stringify(products));
            }
            
        }
    }

    


    const [ Qty, setQty] = useState( 1 );

    
   
    const itemSubtotal =price * Qty;
    console.log(itemSubtotal);

    
    
    return( 
            <div className="Details-wrapper">
            {Loading && <div className="LoadingOverlay"><div className="loadingBox"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>}
            {items && ( 
                <div>
                    <section className="sub-NavBar-Container">
                        <div className="sub-NavBar">
                            <h1><Link to="/" style={{color:"#795744", textDecoration:"none"}}>Home</Link> / <Link to="/Products" style={{color:"#795744", textDecoration:"none"}}>Products</Link> <span style={{color:"#453227"}}>/{items.name}</span></h1>
                        </div>
                    </section>
                    <div >
                        <div className="backToProductsButtonContainer"><Link to="/Products"><button  className="backToProductsButton">BACK TO PRODUCTS</button></Link></div>
                        <article className="DetailsTemplate">
                            
                            <img src={image} alt={name}/>
                            <div className="imageDetails">
                                <h2 >{name}</h2>
                                <div className="StarsContainer">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <span>(11 customer reviews)</span>
                                </div>
                                <h3>${price}</h3>
                                <p className="ImageDesc">{desc}</p>
                                <div className="subDescContainer">
                                    <div>
                                        <p className="subDesc">Available :</p> 
                                        <p className="subDesc">SKU : </p>
                                        <p className="subDesc">Brand :</p> 
                                    </div>
                                    <div>
                                        <p className="subDesc-Value">{Available}</p>
                                        <p className="subDesc-Value">{SKU}</p>
                                        <p className="subDesc-Value">{Brand}</p>
                                    </div>
                                </div>
                                <div className="Line"></div>

                                <div className="numberOfItems">
                                    <i class="fa fa-minus minors-plus" onClick={ ()=> setQty(Qty - 1)}></i>
                                    <span > <input onChange={ (e) => setQty(Number(e.target.value))}  className="number"  type="Number" value={ Qty } /> </span>
                                    <i class="fa fa-plus minors-plus" onClick={ ()=> setQty(Qty + 1)} ></i>
                                </div>
                                <Link to="/Cart" ><button onClick={()=>addToCart({id, name, image, itemSubtotal, price, desc, Available, SKU, Brand, Qty })} className="addToCart" >ADD TO CART</button></Link>
                            </div>
                            
                        </article>
                        
                    </div>
                    
                </div>
            )}
        </div>
     );
}
 
export default ProductDetails;