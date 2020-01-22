import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
// import Button from "./components/Button/Button";
import InputNumber from "./components/InputNumber/InputNumber";
import InputText from "./components/InputText/InputText";
import SelectInput from "./components/SelectInput/SelectInput";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import WrapperButtons from "./components/Button/WrapperButtons";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/button" component={Button} /> */}
          <Route path="/button" component={WrapperButtons} />
          <Route path="/input-number" component={InputNumber} />
          <Route path="/input-text" component={InputText} />
          <Route path="/select-input" component={SelectInput} />
          <Route path="/autocomplete" component={Autocomplete} />
        </Switch>
      </div>
    );
  }
}

export default App;
