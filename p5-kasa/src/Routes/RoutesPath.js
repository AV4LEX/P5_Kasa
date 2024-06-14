import { BrowserRouter as Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Layout from "../components/layout";
import Home from './Home';
import About from "../pages/About";
import Lodging from './Lodging';
import NotFound from './NotFound';

function RoutesPath() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to={"/Home"} />} path="/"/>
                    <Route path="/home" element={<Home />} />
                    <Route path="/lodging" element={<Lodging />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/notfound" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;