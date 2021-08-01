// Validation functions
export function validateNames(value) {
  let error;
  if (!value) {
    error = "El nombre es requerido";
  } else if (!/^[a-z]/gi.test(value)) {
    error = "El nombre es invalido";
  }
  return error;
}

export function validateEmail(value) {
  let error;
  if (!value) {
    error = "El email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "El email es invalido";
  }
  return error;
}

export function validatePassword(values) {
  let error = "";
  const passwordRegex = /(?=.*[0-9])/;
  if (!values) {
    error = "El password es requerido";
  } else if (values.length < 8) {
    error = "El password debe tener al menos 8 caracteres";
  } else if (!passwordRegex.test(values)) {
    error = "Password invalido. Debe contener un numero";
  }
  return error;
}
