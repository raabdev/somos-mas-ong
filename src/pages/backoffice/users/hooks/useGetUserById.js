import { useState, useEffect } from "react";
import { userService } from "services";

export function useGetUserById({ user_id }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    userService
      .getUserByIdService({ user_id })
      .then(user => {
        setUser(user.data);
        setIsLoading(false);
      })
      .catch(err => setUser({}));
  }, [user_id]);

  return { user, isLoading };
}
