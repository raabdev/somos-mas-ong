import { apiService } from "../apiService";
import { USERS_API_URL } from "./settings";

export function updateUserService({ user_id, body }) {
  return apiService({
    apiURL: `${USERS_API_URL}/${user_id}`,
    method: "PUT",
    body,
  });
}
