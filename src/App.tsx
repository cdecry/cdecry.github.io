import React from 'react';
import '@mantine/core/styles.css';
import './App.css';

import Profile from './components/Profile';
import Container from './components/Container';

const App = () => {
  return (
    <div className="App">
        <Profile />
        <Container/>
    </div>
  );
}

export default App;
