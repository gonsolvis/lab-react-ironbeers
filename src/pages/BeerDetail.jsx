import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const navBar = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";



function BeerDetail({beers}) {
 
    
    const { beerId } = useParams(); 

    console.log("countries ", beers);
    console.log("countryId ", beerId);

    const currentBeer = beers.find(beer => beer._id === beerId)

    return(
        <div>   
        <Link to="/">
            <img src={navBar} alt="the office gif" className="page-img w-100" />
        </Link>

        <div d-flex className="d-flex justify-content-center">
          <img src={currentBeer.image_url} alt="the office gif" className="m-5" width={400}  height={700} />
          <div d-flex className="d-flex flex-column justify-content-center align-items-center bd-highlight mb-3">
              <h1>{currentBeer.name}</h1>
            <h3> {currentBeer.tagline}</h3>
            <p className=" font-weight-bold"> {currentBeer.first_brewed}</p>
            <p> {currentBeer.attenuation_level}</p>
            <p className=" w-50 h-10"> {currentBeer.description}</p>
            <p  > contributed_by: <span className=" font-weight-bold"> "{currentBeer.contributed_by}"</span></p>
            </div>  
        </div> 
        </div>          
    );
}
export default BeerDetail;