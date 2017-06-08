import { connect } from 'react-redux';

import AvailableLanguages from 'available-languages';
import fetchTextTranlsate from 'fetch-text-translate';

const mapStateToProps = state => ({
  langs: Object.keys(state.languages.langs),
  locale: state.languages.locale
});

const mapDispatchToProps = dispatch => ({
  onChange: language => {
    dispatch({
      type: 'SET_FROM_LANGUAGE',
      language
    });
    dispatch(fetchTextTranlsate());
  }
});

const AvailableFromLanguagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
 )(AvailableLanguages);

export default AvailableFromLanguagesContainer;
