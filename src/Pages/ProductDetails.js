import { useParams } from "react-router";
import '../styles/ProductDetails.css';
import { Link, useHistory } from "react-router-dom";
import "../styles/Loading.css";
import { useState, useEffect, useContext } from "react";
import { GeneralContext } from "../Context/generalContext";
import Items from "../Data/db.json";






const ProductDetails = () => {
    const { id } = useParams();
    
    const { allProduct, setAllProduct} =useContext(GeneralContext);

    

    const [ Loading, setLoading] = useState(true);
    const [ hideContentWhileLoading, setHideContentWhileLoading] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
            setHideContentWhileLoading(true);
        },1000)
    }, [ ])
    
    


    const [ProductAddedNotification, setProductAddedNotification ] =useState(false);

    const [ InvalidQty, setInvalidQty] = useState( false );

    
    
    let products;
    if(localStorage.getItem('products')=== null){
        window.localStorage.setItem("products", JSON.stringify([ ]));
    }else{
        products = JSON.parse(localStorage.getItem('products'));
        
    }
    const addToCart=(product)=>{

        if(Qty < 1){
            setInvalidQty(true);
            
        }else{
            setProductAddedNotification(true)
           
        
            products.forEach(e => {
                if(e.id === product.id){
                    if(Qty > 1){
                        e.Qty = e.Qty + Qty;
                    }else{
                        e.Qty = e.Qty + 1;
                    }
                    
                    e.ItemSubtotal = e.Qty * e.Price;
                }
                window.localStorage.setItem("products", JSON.stringify(products));
                
            });

            if (!(products.filter(e => e.id === product.id).length > 0)) {

               
                products.push(product);
                window.localStorage.setItem("products", JSON.stringify(products));
                   
            }
        }  
        setAllProduct( JSON.parse(localStorage.getItem("products")));
    }

    const [ Name, setName] = useState(null);
    const [ Image, setImage] = useState(null);
    const [ Price, setPrice] = useState(null);
    const [ Desc, setDesc] = useState(null);
    const [ Avail, setAvail] = useState(null);
    const [ sku, setSku] = useState(null);
    const [ brand, setBrand] = useState(null);
    const [ ItemSubtotal, setItemSubtotal] = useState(null);

    let [ Qty, setQty] = useState( 1 );

    const settingInvalidQty =()=>{
        setInvalidQty(false);
        setQty(1)
    }
    
    
    
    useEffect(()=>{

        
        Items.forEach(item => {           
            if(item.id == id){
                const { name, image, price, desc, Available, SKU, Brand} =item;
                setName( name);
                setImage(image);
                setPrice( price );
                setDesc( desc);
                setAvail( Available );
                setSku( SKU );
                setBrand( Brand)
                let itemSubtotal = price * Qty;


                
                setItemSubtotal( itemSubtotal)
                
                
            }
            
        });
    
        
        
    }, [Qty ])
    
   
    


    
    
    return(
         
        <div className="Details-wrapper">
            {Loading && <div className="LoadingOverlay"><div className="loadingBox"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>}
            
            <div className={ProductAddedNotification ? "Notification-show" : "Notification-hide"}>
                <div className={ProductAddedNotification ?"Notification-container" : " "}>
                    <h2><span>&#128077;</span>Product added!</h2>
                    <div>
                        <Link to="/Products"><button>Continue shopping</button></Link>
                        <Link to="/Cart" ><button>Go to cart</button></Link>
                    </div>
                </div>
            </div>


            <div className={InvalidQty ? "InvalidQty-show" : "InvalidQty-hide"}>
                <div className={InvalidQty ?"InvalidQty-container" : " "}>
                    <h2><span>&#128078;</span>Invalid Quantity!</h2>
                    <div>
                        <button onClick={ ()=> settingInvalidQty() }>Ok</button>
                    </div>
                </div>
            </div>
                
            { hideContentWhileLoading &&
                <div>
                    <section className="sub-NavBar-Container">
                        <div className="sub-NavBar">
                            <h1><Link to="/" style={{color:"#795744", textDecoration:"none"}}>Home</Link> / <Link to="/Products" style={{color:"#795744", textDecoration:"none"}}>Products</Link> <span style={{color:"#453227"}}>/{Name}</span></h1>
                        </div>
                    </section>
                    <div >
                        <div className="backToProductsButtonContainer"><Link to="/Products"><button  className="backToProductsButton">BACK TO PRODUCTS</button></Link></div>
                        <article className="DetailsTemplate">
                            
                            <img src={Image} alt={Name}/>
                            <div className="imageDetails">
                                <h2 >{Name}</h2>
                                <div className="StarsContainer">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <span>(11 customer reviews)</span>
                                </div>
                                <h3>${Price}</h3>
                                <p className="ImageDesc">{Desc}</p>
                                <div className="subDescContainer">
                                    <div>
                                        <p className="subDesc">Available :</p> 
                                        <p className="subDesc">SKU : </p>
                                        <p className="subDesc">Brand :</p> 
                                    </div>
                                    <div>
                                        <p className="subDesc-Value">{Avail}</p>
                                        <p className="subDesc-Value">{sku}</p>
                                        <p className="subDesc-Value">{brand}</p>
                                    </div>
                                </div>
                                <div className="Line"></div>

                                <div className="numberOfItems">
                                    <i class="fa fa-minus minors-plus" onClick={ ()=> setQty(Qty - 1)}></i>
                                    <span > <input onChange={ (e) => setQty(Number(e.target.value))}  className="number"  type="Number" value={ Qty } /> </span>
                                    <i class="fa fa-plus minors-plus" onClick={ ()=> setQty(Qty + 1)} ></i>
                                </div>
                            <button onClick={()=>addToCart({id, Name, Image, ItemSubtotal, Price, Desc, Avail, sku, brand, Qty })} className="addToCart" >ADD TO CART</button>
                            </div>
                            
                        </article>
                        
                    </div>
                    
                </div>
            }
        </div>
    );
}
 
export default ProductDetails;