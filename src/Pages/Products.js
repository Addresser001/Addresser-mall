import { Link } from "react-router-dom";
import ProductTemplate from "../Components/Product-Template";
import "../styles/Products.css";
import useFetch from "../Components/Product-useFetch";
import "../styles/Loading.css";
const Products = () => {
  
    const{items, Loading} = useFetch("http://localhost:8000/items");

    
    const pathname=window.location.pathname;
    
    return ( 
        <div className="Product-Container">
            <section className="sub-NavBar-Container">
                <div className="sub-NavBar">
                    <h1><Link to="./" style={{color:"#795744", textDecoration:"none"}}>Home</Link> <span style={{color:"#453227"}}>{pathname}</span></h1>
                </div>
            </section>
            {Loading && <div className="LoadingOverlay"><div className="loadingBox"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>}
            {items &&<ProductTemplate items={items}/>}
        </div>
     );
}
 

 
export default Products