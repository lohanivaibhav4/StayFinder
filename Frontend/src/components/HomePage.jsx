import axios from 'axios'
import React from 'react'
import mainImage from '../assets/main-hero.png'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";


export default function HomePage(){
    //const [ login,setLogin ] = React.useState()
    const [ properties, setProperties ] = React.useState([])

    React.useEffect(()=>{
        axios.get('/api/v1/listings')
        .then(res=>setProperties(res.data.allListings))
        .catch(err=> console.log("Error fetching properties listed",err))
    },[])

    const listedProperties = properties.map((property)=>{
        return (
        <Link to={`listings/${property._id}`} key={property._id}>
            <div className='property-tile'>
                <img src={property.imageUrl} alt="property image" />
                <div className='tile-text'>
                    <h2>{property.propertyName}</h2>
                    <div>
                        <p><FaLocationDot/>{property.propertyLocation}</p>
                        <p className='tile-price'><RiMoneyRupeeCircleLine />{property.price}/day</p>
                    </div>
                </div>
            </div>
        </Link>
        )
    }) 

    return(
        <>
            <section className="intro">
                <div>
                    <h2>Comfort that feels like home</h2>
                    <p>We have 1000+ Reviews and our customers trust on our quality services. </p>
                    <button>Explore</button>
                </div>
                <img src={mainImage} alt="" />
            </section>
            <section className="blank"> 

            </section>

            <div className='property-container'>
                <div className='filters-div'>
                    <h1>Filters</h1>
                </div>
                <div className='properties-div'>
                    {listedProperties}
                </div>
            </div>
        </>
    )
}