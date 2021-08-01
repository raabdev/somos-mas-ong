import { apiService } from "../apiService";
import { USERS_API_URL } from "./settings";

export function getUsersService() {
  return apiService({ apiURL: USERS_API_URL, method: "GET" });
}
