import { Link } from "react-router-dom";
const navBar = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

function RandomBeer() {
    return (
        <div className="App">

            <Link to="/">
                <img src={navBar} alt="the office gif" className="page-img w-100" />
            </Link>

        </div>

    );
}


export default RandomBeer;