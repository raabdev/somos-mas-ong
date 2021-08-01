import { apiService } from "../apiService";
import { USERS_API_URL } from "./settings";

export function saveUserService({ body }) {
  return apiService({ apiURL: USERS_API_URL, method: "POST", body });
}
