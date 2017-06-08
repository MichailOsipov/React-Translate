const fromTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NEW_TEXT':
      return action.text;
    default:
      return state;
  }
};

export default fromTextReducer;
