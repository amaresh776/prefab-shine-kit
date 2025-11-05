import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";

console.log("main.tsx loaded");
console.log("App component:", App);
console.log("Root element:", document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

console.log("ReactDOM.render called");
