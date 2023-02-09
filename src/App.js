import React from 'react';
import './App.modules.scss';
import { Home } from './Components/Home';
import { Layout } from './Components/layout/Layout';

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
