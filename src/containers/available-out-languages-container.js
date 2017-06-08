import { connect } from 'react-redux';

import AvailableLanguages from 'available-languages';
import fetchTextTranlsate from 'fetch-text-translate';

const mapStateToProps = state => ({
  langs: Object.keys(state.languages.langs[state.languageSettings.fromLanguage]
    || state.languages.langs[Object.keys(state.languages.langs)[0]]
    || {}),
  locale: state.languages.locale
});

const mapDispatchToProps = dispatch => ({
  onChange: language => {
    dispatch({
      type: 'SET_OUT_LANGUAGE',
      language
    });
    dispatch(fetchTextTranlsate());
  }
});

const AvailableOutLanguagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableLanguages);

export default AvailableOutLanguagesContainer;
