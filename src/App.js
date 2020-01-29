import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import SelectInput from "./components/SelectInput/SelectInput";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import WrapperButtons from "./components/Button/WrapperButtons";
import WrapperInputText from "./components/InputText/WrapperInputText";
import WrapperInputNumber from "./components/InputNumber/WapperInputNumber";


class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/button" component={WrapperButtons} />
          <Route path="/input-number" component={WrapperInputNumber} />
          <Route path="/input-text" component={WrapperInputText} />
          <Route path="/select-input" component={SelectInput} />
          <Route path="/autocomplete" render={(props) => <Autocomplete {...props} suggestions={["Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"]} />} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
