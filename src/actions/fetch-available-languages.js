function requestAvailableLanguages() {
  return {
    type: 'REQUEST_AVAILABLE_LANGUAGES'
  };
}

function receiveAvailableLanguages(json) {
  const languages = {};
  for (let i = 0; i < json.dirs.length; i++) {
    const fromAndAfter = json.dirs[i].split('-');
    if (!languages[fromAndAfter[0]]) {
      languages[fromAndAfter[0]] = {};
    }

    languages[fromAndAfter[0]][fromAndAfter[1]] = true;
  }

  return {
    type: 'RECEIVE_AVAILABLE_LANGUAGES',
    langs: languages,
    locale: json.langs,
    receivedAt: Date.now()
  };
}

export default function fetchAvailableLanguages() {
  return function (dispatch) {
    dispatch(requestAvailableLanguages());

    const language = 'ru';
    const key = 'trnsl.1.1.20170527T103722Z.e029d2e911e534e8.4ac60c7700c1be3c525e6d80829748ba4783715f';
    const myHeaders = new Headers();
    myHeaders.append('Host', 'translate.yandex.net');
    myHeaders.append('Accept', '*/*');
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const fetchParams = {
      method: 'POST',
      headers: myHeaders
    };

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=${language}&key=${key}`, fetchParams)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveAvailableLanguages(json));
      });
  };
}
