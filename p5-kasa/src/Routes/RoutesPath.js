import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import Layout from '../components/Layout'; // Import Layout component
import Home from '../pages/Home'; // Import Home page component
import About from '../pages/About'; // Import About page component
import Lodging from '../pages/Lodging'; // Import Lodging page component
import NotFound from '../pages/NotFound'; // Import NotFound page component
import '../styles/App.css'; // Import styles

/**
 * Component that defines the routing structure of the application using React Router.
 * Renders Layout component which wraps different pages based on the current route.
 * 
 * @returns {JSX.Element} JSX code for the RoutesPath component
 */
function RoutesPath() {
    return (
        <Router> {/* Router component from react-router-dom to handle navigation */}
            <Layout> {/* Wrap the content in Layout component */}
                <Routes> {/* Container for defining routes */}
                    <Route path="/" element={<Home />} /> {/* Route for Home page */}
                    <Route path="/home" element={<Home />} /> {/* Alias route for Home page */}
                    <Route path="/about" element={<About />} /> {/* Route for About page */}
                    <Route path="/lodging/:id" element={<Lodging />} /> {/* Route for Lodging page with dynamic id */}
                    <Route path="*" element={<NotFound />} /> {/* Catch-all route for handling 404 errors */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default RoutesPath;
