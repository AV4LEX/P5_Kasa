import React from "react"; // Import React Library
import Header from "./Header"; // Import Header from composant
import Footer from "./Footer"; // Import Footer from composant
import "../styles/Layout.scss"; // Import SCSS files

/**
 * Layout component represents the overall layout structure of the application.
 * It includes the Header, main content area (children), and Footer.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {React.ReactNode} props.children - The content to be rendered inside the main section
 * 
 * @returns {JSX.Element} The JSX code for the Layout component
 */
function Layout({ children }) {
    return (
        <div className="Layout"> {/* Container for the entire layout */}
            <Header /> {/* Render the Header component */}
            <main>{children}</main> {/* Render the main content passed as children */}
            <Footer /> {/* Render the Footer component */}
        </div>
    );
}

export default Layout; // Export the Layout component as the default export


