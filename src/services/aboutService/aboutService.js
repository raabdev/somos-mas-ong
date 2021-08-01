import { getHttpService } from "services/apiService/getHttpService";


export const aboutService = async () => {
  
    const data = await getHttpService('https://jsonplaceholder.typicode.com/posts/1');
    return data;
};