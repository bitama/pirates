import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "@reach/router"
import axios from "axios"


const Detail = (props) => {
    const [pirates, setPirates] = useState({})
        useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${props.id}/find`)
            .then(res => setPirates(res.data.pirate))
            .catch(err =>console.log(err))
    
        }, [])

    
        return(
            <div className="container">
                <div className="d-flex justify-content-end"><h5><Link to="/">go back</Link></h5></div>
                <h1>Details about: {pirates.name}</h1>
                
                    <img src={pirates.imageUrl} />
                    <h3>{pirates.treasure}</h3>
                    <h3>{pirates.phrase}</h3>
                    <h3>{pirates.crewPosition}</h3>
                    <h3 className="text-primary">pegLeg {pirates.pegLeg ? "true" : "false"}</h3>
                    <h3 className="text-primary">eyePath {pirates.eyePath ? "true" : "false"}</h3>
                    <h3 className="text-primary">hookHand {pirates.hookHand ? "true" : "false"}</h3>
                
                    
            </div>
                        
    )
}
export default Detail;;
