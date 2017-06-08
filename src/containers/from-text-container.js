import { connect } from 'react-redux';

import FromText from 'from-text';
import fetchTextTranlsate from 'fetch-text-translate';
import fetchProbableTextLanguage from 'fetch-probable-text-language';

const mapStateToProps = state => ({
  text: state.fromText
});

const mapDispatchToProps = dispatch => ({
  onChange: text => {
    dispatch({
      type: 'SET_NEW_TEXT',
      text
    });
    dispatch(fetchTextTranlsate());
    dispatch(fetchProbableTextLanguage());
  }
});

const FromTextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FromText);

export default FromTextContainer;
