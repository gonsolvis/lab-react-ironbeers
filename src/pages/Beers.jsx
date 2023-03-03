import { Link } from "react-router-dom";
const navBar = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

function Beers({ beers }) {
    return (
        <div className="App">
            <Link to="/">
                <img src={navBar} alt="the office gif" className="page-img w-100" />
            </Link>

            {beers.map(beer => {
                return (
                    
<div className="border border-dark rounded m-3 d-flex justify-content-center"  style={{ backgroundColor: 'rgb(240, 234, 214)' }}>
                    <div key={beer._id} className="border border-dark rounded m-3 d-flex flex-row w-50" >
                    
                    <div className="m-5 d-flex flex-row w-50 ">
                    <Link  to={"/beers/"+beer._id}>
                    <img src={beer.image_url} alt={beer.name} width={100} height={250} />
                    </Link>
                  
                    </div>
                    <div>
                        <h3 className="mt-5">{beer.name}</h3>
                        <p> {beer.tagline}  </p>  
                        <p> {beer.contributed_by}  </p> 
                    </div>
                       
                    </div>
                    </div>                    
                );
            })}
       
        </div>
    );
}

export default Beers;
