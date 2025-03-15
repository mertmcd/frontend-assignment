import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';

import { TabRoutes } from './routes/router';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <div className={`App app ${styles.container}`}>
        <TabRoutes />
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
