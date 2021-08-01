import { isTokenInLocalStorage, createOptionsHttp } from "./helpers";

export function getHttpService(url) {
  if (url !== undefined) {
    const hasToken = isTokenInLocalStorage();
    const options = createOptionsHttp("GET", hasToken);

    return fetch(url, options)
      .then(response => response.json())
      .then(res => res)
      .catch(err => {
        console.error(err);
        return [];
      });
  } else {
    return new Promise((resolve, reject) => reject("You must define the url"));
  }
}
