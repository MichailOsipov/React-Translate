import { combineReducers } from 'redux';

import availableLanguagesReducer from 'available-languages-reducer';
import fromTextReducer from 'from-text-reducer';
import translatedTextReucer from 'translated-text-reducer';
import languageSettingsReducer from 'language-settings-reducer';
import probableTextLanguageReducer from 'probable-text-language-reducer';

const translateCombineReducer = combineReducers({
  languages: availableLanguagesReducer,
  fromText: fromTextReducer,
  translatedText: translatedTextReucer,
  languageSettings: languageSettingsReducer,
  probableTextLanguage: probableTextLanguageReducer
});

export default translateCombineReducer;
