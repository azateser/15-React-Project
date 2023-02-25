import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import detailReducer from './reducers/DetailData';
import homeReducer from './reducers/HomeData';
import searchReducer from './reducers/SearchData';

let initialSatate = {};

let reducers = combineReducers({
  getVideos: homeReducer,
  getVideo: detailReducer,
  getSearch: searchReducer
});

const store = createStore(reducers, initialSatate, composeWithDevTools(applyMiddleware(thunk)));

export default store;
