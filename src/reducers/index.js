import { combineReducers } from 'redux';

import search from './search';
import TrailerId from './TrailerId';
import headerData from './headerData';

export default combineReducers({
  search,
  TrailerId,
  headerData,
});
