export const logOut=(dispatch)=>{
  localStorage.clear()
  dispatch({type:'logout'})
}