import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './view/Home';

export default (store) => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
