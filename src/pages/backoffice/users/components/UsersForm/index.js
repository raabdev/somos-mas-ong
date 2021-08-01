import React from "react";
import { Formik, Form } from "formik";
import { Flex, Box, Heading, Button, Center } from "@chakra-ui/react";

import Loading from "components/Loading";

import NameInput from "./Fields/NameInput";
import EmailInput from "./Fields/EmailInput";
// import ProfilePhotoInput from "./Fields/ProfilePhotoInput";
import RoleSelect from "./Fields/RoleSelect";
import PasswordInput from "./Fields/PasswordInput";

import { validateNames, validateEmail, validatePassword } from "./validations";

// Stored input values
let initialValues = {
  name: "",
  email: "",
  // profilePhoto: "",
  role: "",
  password: "",
};

function UsersForms({
  formTitle,
  buttonText,
  user,
  handleSubmit,
  isSubmiting,
}) {
  // const [profilePhoto, setProfilePhoto] = useState("");

  // Store values in an object on submit
  const onSubmit = values => {
    // let storedInputs = values;
    // const fd = new FormData();
    // fd.append("name", storedInputs.name);
    // fd.append("email", storedInputs.email);
    // fd.append("profilePhoto", profilePhoto);
    // fd.append("role", storedInputs.role);
    handleSubmit(values);
  };

  if (user) {
    initialValues.name = user.name;
    initialValues.email = user.email;
    // initialValues.profilePhoto = user.profilePhoto;
    initialValues.role = user.role;
    // initialValues.password = user.password;
  } else {
    initialValues.name = "";
    initialValues.email = "";
    // initialValues.profilePhoto = "";
    initialValues.role = "";
  }

  return (
    // Flex Container
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      {/* Form Container */}
      <Box p={10} bg="gray.100">
        {/* Heading Box */}
        <Box mb={10} textAlign="center">
          <Heading>{formTitle}</Heading>
        </Box>
        {/* Formik settings */}
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {/* Formik+ChakraUI Form */}
          {props => (
            <Form encType="multipart/form-data">
              <NameInput validateNames={validateNames} />
              <EmailInput validateEmail={validateEmail} />
              {/* <ProfilePhotoInput
                profilePhoto={profilePhoto}
                setProfilePhoto={setProfilePhoto}
              /> */}
              <RoleSelect />
              <PasswordInput validatePassword={validatePassword} />

              {/* Submit button */}
              <Button
                width="full"
                mt={10}
                colorScheme="blue"
                type="submit"
                disabled={isSubmiting}
              >
                {buttonText}
              </Button>
            </Form>
          )}
        </Formik>

        {isSubmiting ? (
          <Center mt={"2rem"}>
            <Loading />
          </Center>
        ) : null}
      </Box>
    </Flex>
  );
}

export default UsersForms;
