import { Link } from "react-router-dom";
import "../styles/NotFound.css";
const NotFound = () => {
    return ( 
        <div className="NotFound-wrapper">
            <div className="NotFound-container">
                <h2>Sorry;</h2>
                <p>This Page cannot be found...</p>
                <Link to="/">Back to Home page</Link>
            </div>
        </div>
     );
}
 
export default NotFound;