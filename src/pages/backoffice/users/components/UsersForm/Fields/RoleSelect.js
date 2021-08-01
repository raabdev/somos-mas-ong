import React, { useState, useEffect } from "react";
import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";

export default function RoleSelect() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch("http://ongapi.alkemy.org/api/roles")
      .then(response => response.json())
      .then(res => setRoles(res.data));
  }, []);

  return (
    <Field name="role">
      {({ field, form }) => (
        <FormControl isRequired>
          <FormLabel htmlFor="role" mt={2}>
            Rol
          </FormLabel>
          <Select
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            id="role"
            bg="white"
            placeholder="Selecciona un rol"
            size="md"
          >
            {roles.map(rol => (
              <option value={rol.id} key={rol.id}>{rol.name}</option>
            ))}
          </Select>

          <FormErrorMessage>{form.errors.role}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
