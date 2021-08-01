/* Para el get utilizo un endpoint diferente porque la 
api de alkemy no tiene miembros agregados y 
no puedo mostrar nada */

export const getUrl = (method, id) => {
  switch (method.toUpperCase()) {
    case "GET":
      return "https://reqres.in/api/users";
    case "CURRENT_MEMBER":
      return `https://reqres.in/api/users/${id}`;
    case "POST":
      return "http://ongapi.alkemy.org/api/members";
    case "PATCH":
      return `http://ongapi.alkemy.org/api/members/${id}`;
    case "DELETE":
      return `http://ongapi.alkemy.org/api/members/${id}`;
    default:
      return "https://reqres.in/api/users";
  }
};
