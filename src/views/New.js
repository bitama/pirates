import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, navigate } from "@reach/router"
import axios from "axios"


const New = (props) => {
    const[errors,setErrors]=useState({})
    const [form, setForm] = useState({
        name:"",
        imgUrl:"",
        treasure: "",
        phrase:"",
        crewPosition: "",
        eyePath: true,
        pegLeg: true,
        hookHand:true
    })
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.type=="checkbox" ? event.target.checked:event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:8000/api/pirates/create", form)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors)
                } else {
                    navigate("/")
                }
                
            })
            .catch(err =>console.log(err))
                
            
    }
    
    

    return(
        <div className="container mt-3">
            <div className="justify-content-end"><Link to="/"><h4> Go to main page</h4></Link></div>
            <form onSubmit={onSubmitHandler}>
            <div>
                <label  htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name"  onChange={onChangeHandler}  />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
            </div>
            <div className="form group">
                <label htmlFor="name">ImageUrl</label>
                    <input type="text" className="form-control" name="imageUrl" onChange={onChangeHandler}  />
                    <span className="alert-danger">{errors.imageUrl && errors.imageUrl.message}</span>
            </div>
            <div className="form group">
                <label  htmlFor="name">Treasure</label>
                    <input type="number" className="form-control" name="treasure"  onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.treasure && errors.treasure.message}</span>
            </div>
            <div className="form-group">
                <label  htmlFor="name">Phrase</label>
                    <input type="text" className="form-control" name="phrase"  onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.phrase && errors.phrase.message}</span>
            </div>
            <div className="form-group mt-3">
            <label for="crewPosition" >Crew Position</label>
                <select name="crewPosition"onChange={onChangeHandler} >
                    <option value="Captain">Captain</option> 
                    <option value="First Mate">FirstMate</option>      
                    <option value="quartet master">quartet master</option>       
                    <option value="Boat wain">Boat wain</option>
                    <option value="Powder monkey">Powder monkey</option>
                    </select>
                    <span className="alert-danger">{errors.crewPosition && errors.crewPosition.message}</span>
            </div>
            <div className="form group mt-4 ">
                <label for="name">Peg Leg</label>
                    <input type="checkbox" name="pegLeg" onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.pegLeg && errors.pegLeg.message}</span> 
                <label for="name">Eye patch</label>
                    <input type="checkbox" name="eyePath"  onChange={onChangeHandler} />
                    <span className="alert-danger">{errors.eyePath && errors.eyePath.message}</span>
                <label for="name">Hook hand</label>
                    <input type="checkbox" name="hookHand" onChange={onChangeHandler}  />
                    <span className="alert-danger">{errors.hookHand && errors.hookHand.message}</span>
            </div>
                <input type="submit" className="btn btn-primary mt-3"/>
        </form>
        </div>
    )
}
export default New;
