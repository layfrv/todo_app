import React from 'react';
import './App.scss';
import { Home } from './Components/Home';
import { Layout } from './Components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
