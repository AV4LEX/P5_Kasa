import React from "react"; // Import the React library
import "../styles/App.css"; // Import the CSS file for styling
import RoutesPath from "../routes/RoutesPath"; // Import the RoutesPath component for handling routes

/**
 * The App component serves as the root component of the application.
 * It renders the RoutesPath component, which manages the routing of the application.
 * 
 * @returns {JSX.Element} The JSX code for the App component
 */
function App() {
    return (
        <div className="App"> {/* Main container for the App component */}
            <RoutesPath /> {/* Renders the RoutesPath component */}
        </div>
    );
}

export default App; // Export the App component as the default export
