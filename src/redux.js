import { createStore } from 'redux';

export const search = payload => ({
  type: 'SEARCH',
  payload,
});

export const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        searchTerms: state.searchTerms.concat(action.payload),
      };

    default:
      return state;
  }
};

export const store = createStore(
  reducer, { searchTerms: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
