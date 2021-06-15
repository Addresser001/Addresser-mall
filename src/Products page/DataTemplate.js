import "./Products.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const DataTemplate = ({items}) => {
    const [Data, setData]= useState(items)
    const numberOfItems=items.length;

    const[display, setDisplay]=useState(false);
    const displayList=()=>{
       setDisplay(true)
    }
    const displayGrid=()=>{
        setDisplay(false)
    }


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY >= 200)
        })
    }, [])
    
    return ( 
        <div>
           
            <section className="displayTemplate">
                <div className="product-select-section">
                    <div className={scroll? "product-select-Scroll-none":"product-select-Scroll"}>
                        <form ><input style={{backgroundColor:"#f1f5f8", border:"0", padding:"10px 7px", borderRadius:"5px"}} type="text" placeholder="Search"/></form>
                        <div className="category">
                            <h4>Category</h4>
                            <p>All</p>
                            <p>Office</p>
                            <p>Living Room</p>
                            <p>Kitchen</p>
                            <p>Bed Room</p>
                            <p>Dining</p>
                            <p>Kids</p>

                        </div>
                        <h4>Company</h4>
                        <select>
                            <option value="All">All</option>
                            <option value="All">Macros</option>
                            <option value="All">Liddy</option>
                            <option value="All">Ikea</option>
                            <option value="All">Caressa</option>
                        </select>

                        <div className="Help-container">
                            <div className="Help-sub-container">
                                <span class="material-icons">help</span>
                                <div>
                                    <h6>Help Center</h6>
                                </div>
                            </div>
                            <div className="Help-sub-container">
                                <span class="material-icons">restore</span>
                                <div>
                                    <h6>Easy Return</h6>
                                </div>
                            </div>
                            <div className="Help-sub-container">
                                <span class="material-icons">lens_blur</span>
                                <div>
                                    <h6>Sell on<br/>AddresserMall</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-image-section">
                    <div className="product-found-container">
                        <div>
                            <span onClick={displayGrid} id={display?" ":"grid-and-list-Icons-Focus"} class="material-icons">grid_view</span>
                            <span onClick={displayList} id={display?"grid-and-list-Icons-Focus":" "} class="material-icons" >list_alt</span>
                        </div>
                        <p style={{color:"#324d67"}}>{numberOfItems} Products Found</p>
                        <div className="line"></div>
                        <div style={{display:"flex", }}>
                            <p>Sort By</p>
                            <select style={{fontSize:"18px", position:"relative", bottom:"5px", marginLeft:"3px", border:"0px"}}>
                                <option value="PriceLower">Price(Lowest)</option>
                                <option value="PriceLower">Price(Highest)</option>
                                <option value="PriceLower">Name(A - Z)</option>
                                <option value="PriceLower">Name(Z - A)</option>
                            </select>
                        </div>
                    </div>
                    <div className={display?"product-image-wrapper-List":"product-image-wrapper-Grid"}>
                        {
                            Data.map((datum)=>{
                                const {image, name, price, desc, Available, SKU, brand, id} = datum;
                                return(
                                    <div className={display?"image-container-List":"image-container-Grid"} key={id}>
                                        <div className={display?"search-Display-none":"search-Grid"}><Link to={`/Data/${id}`}><span class="material-icons">search</span></Link></div>
                                        <img src={image} className="image"/>
                                        <div className={display?"image-details-List":"image-details-Grid"}>
                                            <p className="name">{name}</p>
                                            <p className="price">${price}</p>
                                            <p className={display?"image-Description-List":"image-Description-Grid-Display-none"}>{desc.slice(0, 170)}</p>
                                            <Link to={`/Data/${id}`}><button className={display?"Details-Button-List":"image-Description-Grid-Display-none"}>DETAILS</button></Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default DataTemplate;