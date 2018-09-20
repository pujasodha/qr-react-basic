import React, { Component } from "react";
import "./App.css"
import Reader from "./Component/Reader/reader";

class App extends Component {
  state = {
    QRCodeResults: [];
  }

  addResult = (result) => {
    const userWantsResultStored = window.confirm("Would you like to save " + result + "?")


    if (userWantsResultsStored) {
      const updatedResultsArray = [...this.state.QRCodeResults, result];
      this.setState({ QRCodeResults: updatedResultsArray });
    } else {
      return
    }
  }

  render() {
    return (
      <React.fragment>
        
        <Reader addResult = {this.addResult} results = {this.state.QRCodeResults}/>

      </React.fragment>

    );
  }
}
export default App;