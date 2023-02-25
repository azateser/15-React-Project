const searchReducer = (state = { getSearch: [] }, action) => {
    switch (action.type) {
      case 'GET_SEARCH':
        return {
          getSearch: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchReducer;
  