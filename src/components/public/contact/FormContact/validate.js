export const validate = values =>{
  const errors ={}
  if (!values.userName  ){
    errors.userName='Por favor ingrese un nombre'        
  }
  if(!values.lastName){
    errors.lastName='Por favor ingrese un apellido'    
  }
  if (!values.email){
    errors.email='Por Favor ingrese un e-mail'
  }
  if(!values.phone){
    errors.phone='Por favor ingrese un telefono'
  }
  if(!values.textArea){
    errors.textArea='Por favor ingrese un texto'
  }

  return errors
}