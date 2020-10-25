import React, {Component} from "react"
import "../../css/search.css"
import {searchCountry} from "../../service/DataHandler.js"
import CityTile from "../CityTile.js"

// import for enter-animations
import {TweenMax, Power3} from "gsap"


// class based component that handles everything that has to do with country-searching
class CountrySearch extends Component{

  constructor(){
    super()
    this.searchBar = null

    this.state = {
      loading: false,
      result: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  //lifecycle method that will be called when the component succesfully mounts
  componentDidMount(){
    TweenMax.to(this.searchBar, 1.2,{opacity:1,y: -20,ease: Power3.easeOut})
  }

  async handleSearch(event){
    this.setState({
      loading: true
    })
    if(event.target.value.length > 0){
      this.setState({
        result: await searchCountry(event.target.value),
        loading: false
      })

      //console.log(this.state.result)
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
    } else if (result.hasOwnProperty("cities")){
      let resultHeadline = <h2 style={{color:"#e62e6b"}}>{result.cities[0].countryName +"'s top populated cities are:"}</h2>
      
      let resultList = result.cities.map((city) => {
        return <CityTile cityName={city.toponymName} population={city.population} key={city.geonameId}/>
      })

      resultDisplay = <div>
        {resultHeadline}
        {resultList}
      </div>
    } else {
      resultDisplay = <h2> </h2>
    }

    return(
      <div className="column">
        <div ref={element=> {this.searchBar=element}} className="finder">
            <div className="finder__outer">
              <div className="finder__inner">
                <div className="finder__icon" ref="icon"></div>
                <input onChange={this.handleSearch} className="finder__input" type="text" name="q" placeholder="e.g. Sweden" />
              </div>
            </div>
          </div>
          {this.state.loading ? <h2>loading..</h2> : resultDisplay}
      </div>
    )
  }
}

export default CountrySearch