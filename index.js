import Welcome from './src/components/App/App.jsx';
import React from 'react';
import {render} from 'react-dom';

render(
  < Welcome name = 'Oleg'/>,
  document.getElementById('root')
);

