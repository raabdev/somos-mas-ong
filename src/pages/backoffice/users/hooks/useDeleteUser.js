import { useState } from "react";
import { userService } from "services";
import { showSuccess } from "services/Alert/alerts";

export function useDeleteUser() {
  const [isSubmiting, setIsSubmiting] = useState(false);

  const deleteUser = ({ user_id }) => {
    setIsSubmiting(true);
    userService.deleteUserService({ user_id }).then(user => {
      setIsSubmiting(false);
      showSuccess("Usuario eliminado", "");
      console.log("User deleted", user);
    });
  };

  return {
    isSubmiting,
    deleteUser,
  };
}
