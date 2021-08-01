import { TOKEN_KEY_NAME, HAS_TOKEN, DOESNT_HAS_TOKEN } from "../const";

export function isTokenInLocalStorage() {
  const token = localStorage.getItem(TOKEN_KEY_NAME);
  return token ? HAS_TOKEN : DOESNT_HAS_TOKEN;
}
