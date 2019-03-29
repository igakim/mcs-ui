import React from 'react';
import { render } from 'react-dom';
import './prism.css';
import './prism';

import '../../src/assets/scss/index.scss';
import ButtonSection from './components/button';
import Navbar from './components/Menu';
import Layout from './components/Layout';

const App = () => (
    <div className="container">
      <Navbar />
      <div>
        <h1>Components</h1>
      </div>
      <ButtonSection />
      <Layout />
    </div>
);

render(<App />, document.getElementById('root'));
