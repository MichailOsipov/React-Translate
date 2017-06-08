import { connect } from 'react-redux';

import ProbableTextLanguage from 'probable-text-language';
import fetchTextTranlsate from 'fetch-text-translate';

const mapStateToProps = state => ({
  probableTextLanguage: state.probableTextLanguage.language,
  isLanguageCorrect: state.probableTextLanguage.language === state.languageSettings.fromLanguage || state.fromText === '',
  locale: state.languages.locale[state.probableTextLanguage.language]
});

const mapDispatchToProps = dispatch => ({
  onClick: probableTextLanguage => {
    dispatch({
      type: 'SET_FROM_LANGUAGE',
      language: probableTextLanguage
    });
    dispatch(fetchTextTranlsate());
  }
});

const ProbableTextLanguageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProbableTextLanguage);

export default ProbableTextLanguageContainer;
