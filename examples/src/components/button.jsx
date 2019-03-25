import React from 'react';

import { Button } from '../../../src';
import buttonCode from '../codes/button';


const ButtonSection = () => (
  <div className="section buttons">
    <h2>Buttons</h2>
    <div className="examples">
      <h3>Example:</h3>
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
    <div className="code">
      <pre className="language-jsx" style={{ margin: 0 }}>
        <code>
          {buttonCode}
        </code>
      </pre>
    </div>
    <div className="props">
      <h3>Props:</h3>
      <table>
        <tr>
          <th>Prop</th>
          <th>Default</th>
          <th>Variant</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><span className="inline-code">type</span></td>
          <td><span className="inline-code-comment">none</span></td>
          <td>primary, success, warning, danger, secondary, info</td>
          <td>Button style</td>
        </tr>
        <tr>
          <td><span className="inline-code">htmlType</span></td>
          <td><span className="inline-code-comment">none</span></td>
          <td>Any type of html button</td>
          <td>HTML type of button</td>
        </tr>
        <tr>
          <td><span className="inline-code">size</span></td>
          <td><span className="inline-code">big</span></td>
          <td>small, medium, big</td>
          <td>Define a size of button</td>
        </tr>
        <tr>
          <td><span className="inline-code">disabled</span></td>
          <td><span className="inline-code">false</span></td>
          <td>true, false</td>
          <td>Define whether the button is disable</td>
        </tr>
        <tr>
          <td><span className="inline-code">stretched</span></td>
          <td><span className="inline-code">false</span></td>
          <td>true, false</td>
          <td>stretch the button to 100% parent width</td>
        </tr>
      </table>
    </div>
  </div>
);

export default ButtonSection;
