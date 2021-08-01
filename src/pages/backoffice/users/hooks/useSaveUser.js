import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userService } from "services";
import { showSuccess } from "services/Alert/alerts";

export function useSaveUser() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const history = useHistory();

  const saveUser = ({ user }) => {
    setIsSubmiting(true);
    userService
      .saveUserService({ body: user })
      .then(res => res.json())
      .then(user => {
        setIsSubmiting(false);
        history.push("/backoffice/users");
        console.log("User saved", user);
        showSuccess("Usuario creado", "");
      });
  };

  return {
    isSubmiting,
    saveUser,
  };
}
