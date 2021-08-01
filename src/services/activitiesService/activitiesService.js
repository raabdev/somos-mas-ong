import { getHttpService } from '../apiService/getHttpService'

export const getActivities = () => {
    return getHttpService('http://ongapi.alkemy.org/api/activities')
}