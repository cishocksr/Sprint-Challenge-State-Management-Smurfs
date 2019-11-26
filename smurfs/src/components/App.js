import React, { useEffect } from "react";
import { connect } from "react-redux";
import { smurfData, smurfSubmit } from "../actions";
import SmurfForm from "./SmurfForm";
import "./App.css";
import SmurfsList from "./SmurfsList";

const App = props => {
  useEffect(() => {
    props.smurfData();
  }, []);
  console.log(props);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfsList data={props.data} />
      <SmurfForm smurfSubmit={props.smurfSubmit} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { smurfData, smurfSubmit })(App);
