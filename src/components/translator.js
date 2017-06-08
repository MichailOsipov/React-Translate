import React from 'react';

import AvailableFromLanguagesContainer from 'available-from-languages-container';
import AvailableOutLanguagesContainer from 'available-out-languages-container';
import FromTextContainer from 'from-text-container';
import TranslatedTextContainer from 'translated-text-container';
import ProbableTextLanguageContainer from 'probable-text-language-container';

export default class Translator extends React.Component {
  render() {
    return (
      <div className="translator">
        <AvailableFromLanguagesContainer />
        <ProbableTextLanguageContainer />
        <AvailableOutLanguagesContainer />
        <FromTextContainer />
        <TranslatedTextContainer />
      </div>
    );
  }
}
