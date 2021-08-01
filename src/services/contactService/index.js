
export const contactService=async()=>{
  try {
    const response = await fetch('apiUrl')
    return response.json()
  } catch (error) {
    return error.message
  }  
}