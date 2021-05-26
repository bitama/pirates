import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "@reach/router"
import axios from "axios"


const Main = (props) => {
    const [pirates, setPirates] = useState([])
    const[deleted,setDeleted]=useState(false)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                setPirates(res.data.pirates)
                setDeleted(true)
            })
            .catch(err => console.log(err))
    }, [deleted])
    const onDeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}/delete`)
            .then(res => {
                console.log(res)
                setDeleted(false)
            })
            .catch(err =>console.log(err))
    }
    return(
        <div className="container d-flex">
            <div className="d-flex justify-content-end"><Link to="/new"><h4>Add Pirate</h4></Link></div>
            {
                pirates.map((item, i) => {
                    return <div key={i}>
                        <div>
                            <img src={item.imageUrl} />
                            <h3>{item.name}</h3>
                            <p><button className="btn btn-danger"><Link to=""onClick={() => onDeleteHandler(item._id)}>delete pirate</Link></button> <button className="btn btn-primary"><Link className="text-dark" to={`/pirate/${item._id}`}>view pirate</Link></button> </p>
                        </div>
                        
                    </div>
                })
            }
        </div>)
}
export default Main;
