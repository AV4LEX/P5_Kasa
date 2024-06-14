// src/routes/RoutesPath.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout'; // Import du composant Layout
import Home from '../pages/Home'; // Chemin mis à jour vers Home
import About from '../pages/About'; // Chemin mis à jour vers About
import Lodging from '../pages/Lodging'; // Chemin mis à jour vers Lodging
import NotFound from '../pages/NotFound'; // Chemin mis à jour vers NotFound

function RoutesPath() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/lodging" element={<Lodging />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default RoutesPath;

