import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
// import Button from "./components/Button/Button";
import InputNumber from "./components/InputNumber/InputNumber";
// import InputText from "./components/InputText/InputText";
import SelectInput from "./components/SelectInput/SelectInput";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import WrapperButtons from "./components/Button/WrapperButtons";
import WrapperInputText from "./components/InputText/WrapperInputText";
import WrapperInputNumber from "./components/InputNumber/WapperInputNumber";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/button" component={Button} /> */}
          <Route path="/button" component={WrapperButtons} />
          {/* <Route path="/input-number" component={InputNumber} /> */}
          <Route path="/input-number" component={WrapperInputNumber} />
          {/* <Route path="/input-text" component={InputText} /> */}
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
        </Switch>
      </div>
    );
  }
}

export default App;
