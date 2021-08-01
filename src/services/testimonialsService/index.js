export const testimonialsService=async()=>{
    try {
        const respuesta = await fetch('https://reqres.in/api/users');
        const resultado = await respuesta.json();
      console.log(resultado)
      return resultado;
    } catch (error) {
      return error.message
    }  
  }