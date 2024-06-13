import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import Footer from './Footer';
import Lodging from './Lodging';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/home" element={<Home />} />
                <Route path="/lodging" element={<Lodging />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
