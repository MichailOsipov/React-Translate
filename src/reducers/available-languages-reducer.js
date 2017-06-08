const availableLanguagesReducer = (state = {
  isFetching: false,
  langs: {},
  locale: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_AVAILABLE_LANGUAGES':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_AVAILABLE_LANGUAGES':
      return Object.assign({}, state, {
        isFetching: false,
        langs: action.langs,
        locale: action.locale,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default availableLanguagesReducer;
