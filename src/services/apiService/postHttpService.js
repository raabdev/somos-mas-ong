import { isTokenInLocalStorage, createOptionsHttp } from "./helpers";

export function postHttpService(url, body) {
  if (url !== undefined && body !== undefined) {
    const hasToken = isTokenInLocalStorage();
    const options = createOptionsHttp("POST", hasToken, body);

    return fetch(url, options)
      .then(response => response)
      .catch(err => {
        console.error(err);
        return {};
      });
  } else {
    return new Promise((resolve, reject) =>
      reject("You must define the url and the body of the request")
    );
  }
}
