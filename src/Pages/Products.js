import { Link } from "react-router-dom";
import ProductTemplate from "../Components/Product-Template";
import "../styles/Products.css";
import "../styles/Loading.css";

const Products = () => {
    
    
  
    

    
    const pathname=window.location.pathname;
    
    return ( 
        <div className="Product-Container">
            <section className="sub-NavBar-Container" >
                <div className="sub-NavBar">
                    <h1><Link to="./" style={{color:"#795744", textDecoration:"none"}}>Home</Link> <span style={{color:"#453227"}}>{pathname}</span></h1>
                </div>
            </section>
            
           <ProductTemplate  />
        </div>
     );
}
 

 
export default Products