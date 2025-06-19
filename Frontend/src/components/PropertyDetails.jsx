import axios from "axios"
import React from "react"
import { useParams } from "react-router-dom"

export default function PropertyDetails(){
    const [ property, setProperty ] = React.useState({})
    const params = useParams()

    React.useEffect(()=>{
        axios.get(`/api/v1/listings/${params.id}`)
        .then(res=>setProperty(res.data.propertyFound))
        .catch(err=> console.log("Error getting this property", err))
    },[params.id])


    return (
        <div className="details-container">
            <h1>{property.propertyName}</h1>
        </div>
    )
}