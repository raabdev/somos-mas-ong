import { getUrl } from './const'
import { getMembers, addMember, updateMember, deleteMember, currentMember,  memberError} from '../../reducers/membersReducer'
import { apiService } from '../apiService'


export const membersService = ({ method, member, id }) => async dispatch => {
  
    let methodAPI = method;

    if(member) {
      console.log(member.get("name"));
      console.log(member.get("logoFile"));
    }

    const apiURL = getUrl(method, id);
    console.log(apiURL)
 
    if(method === 'CURRENT_MEMBER') {
      methodAPI = 'GET';
    }

    try {
      const request = await apiService({
        apiURL,
        method: methodAPI,
        body: member
      })    
      const memberReducer = {
        'GET': getMembers(request.data),
        'POST':addMember(member),
        'PATCH':updateMember(member),
        'DELETE':deleteMember(id),
        'CURRENT_MEMBER': currentMember(id)
      }

      dispatch(memberReducer[method.toUpperCase()])      
    
    } catch (error) {
        dispatch(memberError(error.message))
    }
}
