import { TOKEN_KEY_NAME } from "../const";

export function createOptionsHttp(method, hasToken, body) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (hasToken) {
    options.headers.Authorization = localStorage.getItem(TOKEN_KEY_NAME);
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  return options;
}
