import React from "react"; 
import Header from "./Header"; 
import Footer from "./Footer"; 
import "../styles/Layout.scss"; 

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
        <div className="Layout"> 
            <Header /> 
            <main>{children}</main> 
            <Footer /> 
        </div>
    );
}

export default Layout; 


