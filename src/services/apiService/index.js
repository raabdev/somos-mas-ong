import { getHttpService } from "./getHttpService";
import { postHttpService } from "./postHttpService";
import { deleteHttpService } from "./deleteHttpService";
import { patchHttpService } from "./patchHttpService";
import { putHttpService } from "./putHttpService";
import { METHODS } from "./const";

export function apiService({ apiURL, method, body }) {
  switch (method.toUpperCase()) {
    case METHODS.GET:
      console.log(apiURL);
      return getHttpService(apiURL);
    case METHODS.POST:
      return postHttpService(apiURL, body);
    case METHODS.PATCH:
      return patchHttpService(apiURL, body);
    case METHODS.PUT:
      return putHttpService(apiURL, body);
    case METHODS.DELETE:
      return deleteHttpService(apiURL);
    default:
      return new Promise((resolve, reject) =>
        reject("You must define the method")
      );
  }
}
