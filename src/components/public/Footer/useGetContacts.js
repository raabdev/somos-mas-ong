/* Falta hacer este servicio 
   fetch(`${API_URL}/organization`)
   import { getContacts } from "services"; 
*/
import { useState, useEffect } from "react";

export function useGetContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => setContacts(getContacts()), []);

  return { contacts };
}

/* Simulo el servicio que aun no existe */
function getContacts() {
  return [
    {
      id: 1,
      name: "Facebook",
      url: "https//facebook.com",
      className: "fab fa-facebook-f",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https//instagram.com",
      className: "fab fa-instagram",
    },
    {
      id: 3,
      name: "Youtube",
      url: "https//youtube.com",
      className: "fab fa-youtube",
    },
    {
      id: 4,
      name: "Twitter",
      url: "https//twitter.com",
      className: "fab fa-twitter",
    },
  ];
}
