import React, { Component } from "react";
import "./App.css"
import Reader from "./Component/QRReader";

class App extends Component {
  state = {
    QRCodeResults: [],
  }

  addResult = (result) => {
    const userWantsResultStored = window.confirm("Would you like to save " + result + "?")

    if (userWantsResultStored) {
      const updatedResultsArray = [...this.state.QRCodeResults, result];
      this.setState({ QRCodeResults: updatedResultsArray });
    }
    else {
      //debounce function 
    }

  };

  render() {
    return (
      <React.Fragment>

        <Reader
          addResult={this.addResult}
          results={this.state.QRCodeResults}
        />

      </React.Fragment>
    );
  }
}

export default App;
