const detailReducer = (state = { getVideo: {} }, action) => {
  switch (action.type) {
    case 'GET_VIDEO':
      return {
        ...state,
        getVideo: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
