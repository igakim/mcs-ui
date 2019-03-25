import React from 'react';
import { render } from 'react-dom';
import './prism.css';
import './prism';

import '../../src/assets/scss/index.scss';
import ButtonSection from './components/button';


const App = () => (
    <div className="container">
      <div>
        <h1>Components</h1>
      </div>
      <ButtonSection />
    </div>
);

render(<App />, document.getElementById('root'));
