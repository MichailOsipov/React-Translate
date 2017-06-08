const languageSettingsReducer = (state = {
  fromLanguage: 'none',
  outLanguage: 'none'
}, action) => {
  switch (action.type) {
    case 'SET_FROM_LANGUAGE':
      return Object.assign({}, state, {
        fromLanguage: action.language
      });
    case 'SET_OUT_LANGUAGE':
      return Object.assign({}, state, {
        outLanguage: action.language
      });
    default:
      return state;
  }
};

export default languageSettingsReducer;
