import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './styles/index.css'; 
import App from './App'; 


ReactDOM.render(
  <React.StrictMode> {/* Enables additional checks and warnings for components */}
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // The root element in public/index.html where the app will be rendered
);