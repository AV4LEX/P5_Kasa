import React from "react";
import "./styles/App.css"; 
import RoutesPath from "./routes/RoutesPath"; 

/**
 * The App component serves as the root component of the application.
 * It renders the RoutesPath component, which manages the routing of the application.
 * 
 * @returns {JSX.Element} The JSX code for the App component
 */
function App() {
    return (
        <div className="App">
            <RoutesPath /> 
        </div>
    );
}

export default App;
