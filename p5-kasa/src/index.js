import React from 'react'; // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM library
import './styles/index.css'; // Import index.css for global styles
import App from './components/App.js'; // Import the main App component

// Render the App component into the root element of the HTML document
ReactDOM.render(
  <React.StrictMode> {/* Enables additional checks and warnings for components */}
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // The root element in public/index.html where the app will be rendered
);