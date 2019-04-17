import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function counter(
  state = {
    oleg: 'First date',
    inna: 'Second date',
  },
  action,
) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)));

export default store;
