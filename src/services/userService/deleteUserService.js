import { apiService } from "../apiService";
import { USERS_API_URL } from "./settings";

export function deleteUserService({ user_id }) {
  return apiService({
    apiURL: `${USERS_API_URL}/${user_id}`,
    method: "DELETE",
  });
}
