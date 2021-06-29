import { Link } from "react-router-dom";
import "../styles/About.css";
const About = () => {
    const pathname = window.location.pathname;
    return ( 
        <div className="About-Container">
            <section className="sub-NavBar-Container">
                <div className="sub-NavBar1">
                    <h1><Link to="./" style={{color:"#795744", textDecoration:"none"}}>Home</Link> <span style={{color:"#453227"}}>{pathname}</span></h1>
                </div>
            </section>



            <section className="OurStory-container">
                <img src="./images/OurStory.jpg" className="OurStory-image"/>
                <div className="OurStory-text">
                    <h1>Our Story</h1>
                    <div className="OurStory-underLine"></div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </section>
        </div>
     );
}
 
export default About;