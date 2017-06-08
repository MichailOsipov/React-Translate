const translatedTextReucer = (state = {
  isFetching: false,
  text: ''
}, action) => {
  switch (action.type) {
    case 'REQUEST_TEXT_TRANSLATE':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_TEXT_TRANSLATE':
      return Object.assign({}, state, {
        isFetching: false,
        text: action.text,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default translatedTextReucer;
