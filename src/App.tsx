import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AnimatedRoutes } from './routes/router';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App app">
        <AnimatedRoutes />
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
