import React from "react"
import {NavLink} from "react-router-dom"



function Option(){
  return(
    <div className="column">
        <h2 className="option-text">Choose your option!</h2>
        <div className="row">
            <NavLink to="/city" exact className="option-button" activeClassName="option-button-active">Search By City</NavLink>
            <NavLink to="/country" className="option-button" activeClassName="option-button-active">Search By Country</NavLink>
        </div>
    </div>
  )
}

export default Option