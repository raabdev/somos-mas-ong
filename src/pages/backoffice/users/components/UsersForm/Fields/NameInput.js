import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export default function NameInput({ validateNames }) {
  return (
    <Field name="name" validate={validateNames}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors.name && form.touched.name}
          isRequired
        >
          <FormLabel htmlFor="name" mt={2}>
            Nombre y apellido
          </FormLabel>
          <Input
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            id="name"
            placeholder="Ingresa el nombre completo"
            bg="white"
            autoComplete="off"
          />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
