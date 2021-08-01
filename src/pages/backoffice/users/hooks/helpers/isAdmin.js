import { IS_AN_ADMIN, ISNT_AN_ADMIN, ROLES } from "../../const";

export function isAdmin({ user }) {
  const isUserAdmin =
    user.role.toLowerCase() === ROLES.ADMIN ? IS_AN_ADMIN : ISNT_AN_ADMIN;

  return isUserAdmin;
}
