import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Layout.css";

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

