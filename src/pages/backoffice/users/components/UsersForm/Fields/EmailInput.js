import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export default function EmailInput({ validateEmail }) {
  return (
    <Field name="email" validate={validateEmail}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors.email && form.touched.email}
          isRequired
        >
          <FormLabel htmlFor="email" mt={2}>
            Email
          </FormLabel>
          <Input
            value={field.value || ""}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            id="email"
            placeholder="Ingresa el email"
            bg="white"
            autoComplete="off"
          />
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
