import { useEffect } from "react";
import { isAdmin } from "./helpers/isAdmin";
import { useHistory } from "react-router-dom";

export function useUserAdmin({ user }) {
  const history = useHistory();
  const isUserAdmin = isAdmin({ user });

  useEffect(
    () => {
      if (!isUserAdmin) {
        history.push("/backoffice");
      }
    },
    // eslint-disable-next-line
    [isUserAdmin]
  );
}
