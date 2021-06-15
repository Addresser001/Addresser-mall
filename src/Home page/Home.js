import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return ( 
        <div className="homeContainer">
            {/* Design Your Comfort Zone section */}
            <section className="Design-section">
                <div className="Design-text">
                    <h1>Design Your<br/>Comfort Zone</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <Link to="/Products"><button className="Shop-now">SHOP NOW</button></Link>
                </div>
                <img src="./images/design-image.jpg"/>
            </section>


            {/* Featured Products section */}
            <section className="Featured-products">
                <div className="Featured-sub-container">
                    <div className="Featured-text">
                        <h1>Featured Products</h1>
                        <div className="underLine"></div>
                    </div>

                    <div className="Featured-images-container">
                        <div className="image-container">
                            <div className="search"><Link to='/Products'><span class="material-icons">search</span></Link></div>
                            <img src="./images/featured-1.jpg" className="image" />
                            <p className="product-price">$599.99</p>
                            <p className="product-name">Entertainment Center</p>
                        </div>

                        <div className="image-container">
                            <div className="search"><Link to='/Products'><span class="material-icons">search</span></Link></div>
                            <img src="./images/featured-2.jpg" className="image"/>
                            <p className="product-price">$399.99</p>
                            <p className="product-name">High-Back Bench</p>
                        </div>

                        <div className="image-container">
                            <div className="search"><Link to='/Products'><span class="material-icons">search</span></Link></div>
                            <img src="./images/featured-3.jpg" className="image"/>
                            <p className="product-price">$319.99</p>
                            <p className="product-name">Modern Bookshelf</p>
                        </div>
                    </div>
                    <Link to='/Products'><button className="All-Products-Button">ALL PRODUCTS</button></Link>
                </div>
            </section>






            {/* Custom Forniture section */}
            <section className="Custom-Furniture">
                <div className="Custom-furniture-text">
                    <h1>Custom Furniture<br/>Built Only For You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis<br/>consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                </div>


                <div className="Mission-Vision-History-Container">
                    <div className="subContainers">
                        <span class="material-icons">precision_manufacturing</span>
                        <h1>Mission</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>

                    <div className="subContainers ">
                        <span class="material-icons">psychology</span>
                        <h1>Vision</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>

                    <div className="subContainers">
                        <span class="material-icons">auto_stories</span>
                        <h1>Hitory</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </div>
                </div>
            </section>



            {/* Join Newletter section */}
            <section className="Newsletter">
                <div className="newsText">
                    <h1>Join our newsletter and get 20% off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                </div>

                <div className="Subscribe">
                    <form>
                        <input type="email" placeholder="Enter Email"/>
                        <button>Subscribe</button>
                    </form>
                </div>
            </section>
            
        </div>
    );
}
 
export default Home;