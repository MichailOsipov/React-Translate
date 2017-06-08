import { connect } from 'react-redux';

import TranslatedText from 'translated-text';

const mapStateToProps = state => ({
  text: state.translatedText.text
});

const TranslatedTextContainer = connect(
  mapStateToProps
)(TranslatedText);

export default TranslatedTextContainer;
