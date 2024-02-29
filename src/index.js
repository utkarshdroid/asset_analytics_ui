import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure the path to your CSS file is correct
import App from './App'; // Verify this path matches the location of your App component
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter  as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);