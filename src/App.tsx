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
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
}

export default App;
