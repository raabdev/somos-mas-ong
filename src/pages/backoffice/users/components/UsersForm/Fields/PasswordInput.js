import React, { useState } from "react";
import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export default function PasswordInput({ validatePassword }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Field name="password" validate={validatePassword}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors.password && form.touched.password}
          isRequired
        >
          <FormLabel htmlFor="password" mt={2}>
            Password
          </FormLabel>

          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              placeholder="Enter password"
              id="password"
              bg="white"
              autoComplete="off"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
