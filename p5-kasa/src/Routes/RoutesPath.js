
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Lodging from '../pages/Lodging';
import NotFound from '../pages/NotFound';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/App.css'; 

function RoutesPath() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="page"
                timeout={300}
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/lodging/:id" element={<Lodging />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function AppWrapper() {
    return (
        <Router>
            <Layout>
                <RoutesPath />
            </Layout>
        </Router>
    );
}

export default AppWrapper;
