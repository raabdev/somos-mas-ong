import { getUsersService } from "./getUsersService";
import { getUserByIdService } from "./getUserByIdService";
import { saveUserService } from "./saveUserService";
import { updateUserService } from "./updateUserService";
import { deleteUserService } from "./deleteUserService";

export const userService = {
  getUsersService,
  getUserByIdService,
  saveUserService,
  updateUserService,
  deleteUserService,
};
