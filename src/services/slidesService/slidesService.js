import {apiService} from "../apiService/index";

const SLIDESURL = "https://jsonplaceholder.typicode.com/posts";

class SlidesService {
  getAll() {
    return apiService({apiURL: SLIDESURL, method: "GET"});
  }
  create(slide) {
    return apiService({apiURL: SLIDESURL, method: "POST", body: slide});
  }
  //TODO: PUT METHOD in apiService pending
  update(id, slide) {
    return apiService({apiURL: SLIDESURL + id, method: "PUT", body: slide});
  }
  //TODO: DELETE METHOD in apiService pending
  delete(id) {
    return apiService({apiURL: SLIDESURL + id, method: "DELETE"});
  }
}

export default new SlidesService();
