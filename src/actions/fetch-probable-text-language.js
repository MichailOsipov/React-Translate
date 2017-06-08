function requestProbableTextLanguage() {
  return {
    type: 'REQUEST_PROBABLE_TEXT_LANGUAGE'
  };
}

function receiveProbableTextLanguage(json) {
  return {
    type: 'RECEIVE_PROBABLE_TEXT_LANGUAGE',
    language: json.lang
  };
}

export default function fetchProbableTextLanguage() {
  return function (dispatch, getState) {
    const text = getState().fromText;
    dispatch(requestProbableTextLanguage());

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

    fetch(`https://translate.yandex.net/api/v1.5/tr.json/detect?text=${text}&key=${key}`, fetchParams)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveProbableTextLanguage(json));
      });
  };
}
