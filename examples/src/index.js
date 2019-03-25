import React from 'react';
import { render } from 'react-dom';

import '../../src/assets/scss/index.scss';
import { Button } from '../../src';

const App = () => (
  <>
    <div className="buttons">
      <h1>Buttons</h1>
      <Button type="warning" htmlType="button" size="small"> small Warning </Button>
      <Button type="primary" htmlType="button" size="medium"> Medium primary </Button>
      <Button type="success" htmlType="button" size="big"> Success </Button>
      <Button type="danger" htmlType="button" size="big"> Danger </Button>
      <Button type="secondary" htmlType="button" size="big"> Secondary </Button>
      <Button type="info" htmlType="button" size="big"> Info </Button>
      <Button type="info" htmlType="button" size="big" disabled> Disabled </Button>
      <div style={{ margin: '15px 0' }}>
        <Button type="primary" stretched>Stretched</Button>
      </div>
    </div>
  </>
);

render(<App />, document.getElementById('root'));
