import { Link } from "react-router-dom";
import DataTemplate from "./DataTemplate";
import "./Products.css";
import useFetch from "./useFetch";
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
            {Loading && <div><h1>Loading...</h1></div>}
            {items &&<DataTemplate items={items}/>}
        </div>
     );
}
 

 
export default Products