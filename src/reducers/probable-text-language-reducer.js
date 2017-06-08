const probableTextLanguageReducer = (state = {
  isFetching: false,
  language: 'none'
}, action) => {
  switch (action.type) {
    case 'REQUEST_PROBABLE_TEXT_LANGUAGE':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_PROBABLE_TEXT_LANGUAGE':
      return Object.assign({}, state, {
        isFetching: false,
        language: action.language
      });
    default:
      return state;
  }
};

export default probableTextLanguageReducer;
