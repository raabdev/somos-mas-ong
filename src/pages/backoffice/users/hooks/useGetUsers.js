import { useEffect, useState } from "react";
import { userService } from "services";

export function useGetUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    userService
      .getUsersService()
      .then(users => {
        setUsers(users.data);
        setIsLoading(false);
      })
      .catch(err => {
        setUsers([]);
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  return { users, setUsers, isLoading };
}
