import fetch from 'isomorphic-fetch';

export default async function fetchRequest(url, method, data) {
  const fetchOptions = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  let options = { ...fetchOptions, body: data };

  let response = await fetch(url, options);
  if (response.status >= 200 && response.status < 300) {
    let json = await response.json();
    return json;
  } else {
    throw response.statusText;
  }
}
