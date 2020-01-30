import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import WrapperSelect from "./components/SelectInput/WrapperSelect";
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
          <Route path="/select-input" component={WrapperSelect} />
          <Route path="/autocomplete" render={(props) => <Autocomplete {...props} suggestions={["Audi",
            "Mazda",
            "Nissan",
            "Ferrari",
            "Volvo",
            "Toyota",
            "Hyundai",
            "Chevrolet",
            "Renault",
            "Honda",
            "Volskwagen",
            "Kia",
            "Peugeot",
            "Land Rover",
            "Suzuki",
            "Bmw",
            "Porsche",
          ]} />} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
