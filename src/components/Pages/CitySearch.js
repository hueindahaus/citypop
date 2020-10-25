import React, {Component} from "react"
import "../../css/search.css"
import {searchCity} from "../../service/DataHandler.js"

// import for enter-animations
import {TweenMax, Power3} from "gsap"



// class based component that handles everything that has to do with city-searching
class CitySearch extends Component{

  constructor(){
    super()
    this.searchBar = null

    this.state = {
      result: "",
      loading: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }


  // lifecycle method that is called when the component succesfully mounts
  componentDidMount(){
    TweenMax.to(this.searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }

  // method that queries a result from DataHandler.js, also handles when it is loading data
  async handleSearch(event){
    this.setState({
      loading: true
    })
    if(event.target.value.length > 0){
      this.setState({
        result: await searchCity(event.target.value),
        loading: false
      })

      console.log(this.state.result)
    } else {
      this.setState({
        result: "",
        loading: false
      })
    }
    
  }

  render(){

    let resultDisplay = ""
    let result = this.state.result
    if(result.hasOwnProperty("error")){
      resultDisplay = <h2 style={{color: "#e66b2e"}}>{result.error}</h2>
    } else if (result.hasOwnProperty("toponymName") && result.hasOwnProperty("population")){
    resultDisplay = <h2 style={{color:"#e62e6b"}}>{result.toponymName + " has a population of:  " + result.population}</h2>
    } else {
      resultDisplay = <h2> </h2>
    }

    let loadingIndicator = <h2>loading...</h2>

    return(
      <div className="column">
        <div ref={element => {this.searchBar = element}} className="finder">
          <div className="finder__outer">
            <div className="finder__inner">
              <div className="finder__icon" ref="icon"></div>
              <input onChange={this.handleSearch} className="finder__input" type="text" name="q" placeholder="e.g. Gothenburg" />
            </div>        
          </div>
        </div>
        <div>
          {!this.state.loading ? resultDisplay : loadingIndicator}
        </div>
      </div>
    )
  }
}

export default CitySearch