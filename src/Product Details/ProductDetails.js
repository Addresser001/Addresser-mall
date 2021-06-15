import { useParams } from "react-router";
import './ProductDetails.css';
import { Link } from "react-router-dom";
import useFetch from "../Products page/useFetch";
import { useContext } from "react";
import { LengthContext } from "../Context/LengthContext";





const ProductDetails = () => {
    const { id } = useParams();
    const{items, Loading} = useFetch("http://localhost:8000/items/"+id);

    

   
    const addToCart=(product)=>{

        let products;
        if(localStorage.getItem('products')== null){
            products = [];
        }else{
            products = JSON.parse(localStorage.getItem('products'));
        }
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        // fetch("http://localhost:8000/cart", {
        //     method:"POST",
        //     headers:{"Content-Type": "application/json"},
        //     body:JSON.stringify(items)
        // }).then(()=>{
        //     console.log("product Added!")
        // })

        
    }

    const{toggleLength}=useContext(LengthContext)


    
    return ( 
            <div className="Details-wrapper">
            {Loading && <div><h1>Loading</h1></div>}
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
                            <img src={items.image} alt={items.name}/>
                            <div className="imageDetails">
                                <h2>{items.name}</h2>
                                <div className="StarsContainer">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <span>(11 customer reviews)</span>
                                </div>
                                <h3>${items.price}</h3>
                                <p className="ImageDesc">{items.desc}</p>
                                <div className="subDescContainer">
                                    <div>
                                        <p className="subDesc">Available :</p> 
                                        <p className="subDesc">SKU : </p>
                                        <p className="subDesc">Brand :</p> 
                                    </div>
                                    <div>
                                        <p className="subDesc-Value">{items.Available}</p>
                                        <p className="subDesc-Value">{items.SKU}</p>
                                        <p className="subDesc-Value">{items.Brand}</p>
                                    </div>
                                </div>
                                <div className="Line"></div>

                                <div className="numberOfItems">
                                    <i class="fa fa-minus minors-plus"></i>
                                    <span className="number">1</span>
                                    <i class="fa fa-plus minors-plus"></i>
                                </div>
                                <Link to="/Cart" onClick={()=>toggleLength()} ><button onClick={()=>addToCart(items)} className="addToCart">ADD TO CART</button></Link>
                            </div>
                            
                        </article>
                        
                    </div>
                    
                </div>
            )}
        </div>
     );
}
 
export default ProductDetails;