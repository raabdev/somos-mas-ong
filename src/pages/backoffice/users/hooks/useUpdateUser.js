import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userService } from "services";
import { showSuccess } from "services/Alert/alerts";

export function useUpdateUser() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const history = useHistory();

  const updateUser = ({ user_id, user }) => {
    setIsSubmiting(true);
    userService.updateUserService({ user_id, body: user }).then(user => {
      setIsSubmiting(false);
      showSuccess("Usuario actualizado", "");
      history.push("/backoffice/users");
      console.log("User updated", user);
    });
  };

  return {
    isSubmiting,
    updateUser,
  };
}
