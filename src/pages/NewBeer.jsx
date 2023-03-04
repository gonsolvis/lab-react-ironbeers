import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const navBar = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

export default function NewBeer() {
    
    const [form, setForm] = useState({ name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" })
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name: form.name, tagline: form.tagline, description: form.description, first_brewed: form.first_brewed, brewers_tips: form.brewers_tips, attenuation_level: form.attenuation_level, contributed_by: form.contributed_by })
        .then(response => {
            navigate("/beers")
        })
        .catch(err => console.log(err));
    };



    return (
<div>   
<Link to="/">
    <img src={navBar} alt="the office gif" className="page-img w-100" />
</Link>



<form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
                <input value={form.name}  className="form-control" id="floatingInput" placeholder="name"  type="text" onChange={(e) => setForm({...form, name:e.target.value})} />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input value={form.tagline} className="form-control" id="floatingTitle" placeholder="tagline" type="text"  onChange={(e)=>setForm({...form, tagline: e.target.value})}/>
                <label htmlFor="floatingTitle">tagline</label>
            </div>
            <div className="form-floating mb-3">
                <input value={form.description} className="form-control" id="floatingTitle" placeholder="tagline" type="text"  onChange={(e)=>setForm({...form, description: e.target.value})}/>
                <label htmlFor="floatingTitle">description</label>
            </div>
            <div className="form-floating mb-3">
                <input value={form.first_brewed} className="form-control" id="floatingTitle" placeholder="first_brewed"  type="text"  onChange={(e)=>setForm({...form, first_brewed: e.target.value})}/>
                <label htmlFor="floatingTitle">first_brewed</label>
            </div>
            <div className="form-floating mb-3">
                <input value={form.brewers_tips}   className="form-control" id="floatingTitle" placeholder="brewers_tips" type="text" onChange={(e)=>setForm({...form, brewers_tips: e.target.value})}/>
                <label htmlFor="floatingTitle">brewers_tips</label>
            </div>
            <div className="form-floating mb-3">
                <input value={form.attenuation_level}  className="form-control" id="floatingPrice" placeholder="attenuation_level" type="number" onChange={(e)=>setForm({...form, attenuation_level: e.target.value})} />
                <label htmlFor="floatingPrice">attenuation_level</label>
            </div>
            <div className="form-floating mb-3">
                <input value={form.contributed_by} className="form-control" id="contributed_by" placeholder="contributed_by" type="text"  onChange={(e)=>setForm({...form, contributed_by: e.target.value})}/>
                <label htmlFor="floatingTitle">contributed_by</label>
            </div>
            <button type="submit" className="btn btn-primary">Create Beer</button>
            </form>
</div>          
    );
}

