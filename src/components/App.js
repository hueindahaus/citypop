import React from "react"
import Header from "./Header.js"
import MainContent from "./MainContent.js"

//This is a functional component that returns the necessary macro-sections of the webbapplication.
function App(){
  return(
    <div>
      <Header />
      <MainContent />
    </div>
  )
}


export default App