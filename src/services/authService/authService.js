import { showError } from "services/Alert/alerts";
import { postHttpService } from "services/apiService/postHttpService";


export const authService = async ( data ) => {

    const url = 'testurl'

    let resp = await postHttpService(url, data);
    console.log(resp)

    if (!resp.ok) {
        showError('Error', resp.statusText)
        return resp.ok
    } else {
        return resp.ok;
    }
};