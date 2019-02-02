import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const HComponent = props => {
  let HCOMP = `h${props.number}`;
  return <HCOMP>{props.children}</HCOMP>;
};

function App() {
  return (
    <div>
      <HComponent number="1">Hello</HComponent>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
