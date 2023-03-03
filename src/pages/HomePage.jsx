import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function HomePage() {
    return (
        <div className="App">

            HELLLO
            <div  style={{ backgroundColor: "white" }} className="m-3">
                <Link to="/beers">Beers</Link>
                <img src={beers} alt="beers"  style={{ width: "10", height: "10"  }} className="m-3"/>
            </div>

            <div  style={{ backgroundColor: "white" }} className="m-3">
                <Link to="/new-beers">New Beer</Link>
                <img src={newBeer} alt="beers" className="m-3" />


            </div>

            <div  style={{ backgroundColor: "white" }} className="m-3">
                <Link to="/random-beer">Random Beer</Link>
                <img src={randomBeer} alt="beers" className="m-3" />

            </div>
        </div >
    );
}

export default HomePage;
