import React from "react";
import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export default function ProfilePhotoInput({ setProfilePhoto }) {
  return (
    <Field name="profilePhoto" type="file">
      {({ field, form }) => (
        <FormControl isRequired>
          <FormLabel htmlFor="profilePhoto" mt={2}>
            Foto de perfil
          </FormLabel>
          <Input
            value={field.value || []}
            onChange={event => {
              field.onChange(event);
              setProfilePhoto(event.currentTarget.files[0]);
            }}
            onBlur={field.onBlur}
            name={field.name}
            id="profilePhoto"
            placeholder="Selecciona una foto de perfil"
            bg="white"
            type="file"
            accept="image/x-png,image/jpeg,image/jpg"
            size="6000"
          />

          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
