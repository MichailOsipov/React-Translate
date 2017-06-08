function requestTextTranslate() {
  return {
    type: 'REQUEST_TEXT_TRANSLATE'
  };
}

function receiveTextTranslate(json) {
  return {
    type: 'RECEIVE_TEXT_TRANSLATE',
    text: json.text,
    receivedAt: Date.now()
  };
}

export default function fetchTextTranslate() {
  return function (dispatch, getState) {
    const langOptions = getState().languageSettings;
    const text = getState().fromText;
    dispatch(requestTextTranslate());

    const lang = `${langOptions.fromLanguage}-${langOptions.outLanguage}`;
    const key = 'trnsl.1.1.20170527T103722Z.e029d2e911e534e8.4ac60c7700c1be3c525e6d80829748ba4783715f';
    const myHeaders = new Headers();
    myHeaders.append('Host', 'translate.yandex.net');
    myHeaders.append('Accept', '*/*');
    myHeaders.append('Content-Length', '17');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const fetchParams = {
      method: 'POST',
      headers: myHeaders
    };

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?text=${text}&lang=${lang}&key=${key}`, fetchParams)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveTextTranslate(json));
      });
  };
}
