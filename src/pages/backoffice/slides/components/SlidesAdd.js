import React from "react";
import {Formik, Field, Form} from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  Textarea,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import slidesService from "../../../../services/slidesService/slidesService";

// If editing, should receive Object slideToEdit, otherwise with no props defaults to create mode.
function SlidesAdd({slideToEdit, handleCancelEdit}) {
  //TODO: Check if user isAdmin (pending authentication)
  const isAdminMock = true;

  const initialValues = {
    title: "",
    description: "",
    image: "",
    order: "",
  };


  function validateTitle(value) {
    let error;
    if (value.length < 3) {
      error = "Por favor ingrese un título más extenso";
    }
    return error;
  }

  function validateDescription(value) {
    let error;
    if (value.length < 10) {
      error = "Por favor ingrese una descripción más extensa";
    }
    return error;
  }

  function validateImageURL(value) {
    let error;
    if (
      value.match(
        // eslint-disable-next-line
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      ) === null
    ) {
      error = "Por favor ingrese una URL válida";
    }
    return error;
  }

  const values = slideToEdit ? slideToEdit : initialValues;
  const editing = slideToEdit ? true : false;

  const submitHandler = values => {
    console.log(values);
    if (editing) {
      console.log("Mock edit");
      const mockID = 1;
      slidesService
        .update(mockID, values)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    } else {
      console.log("Mock create");
      slidesService
        .create(values)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  };

  return (
    isAdminMock && (
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <Heading>{editing ? "Editar " : "Crear "}Slide</Heading>
        <Box w="80vw">
          <Formik initialValues={values} onSubmit={submitHandler}>
            {props => (
              <Form>
                <Field name="title" validate={validateTitle}>
                  {({field, form}) => (
                    <FormControl
                      isInvalid={form.errors.title && form.touched.title}
                      isRequired>
                      <FormLabel htmlFor="title">Título</FormLabel>
                      <Input
                        {...field}
                        id="title"
                        placeholder="La mejor Slide"
                      />
                      <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="description" validate={validateDescription}>
                  {({field, form}) => (
                    <FormControl
                      isInvalid={
                        form.errors.description && form.touched.description
                      }
                      isRequired>
                      <FormLabel htmlFor="description">Descripcion</FormLabel>
                      <Textarea
                        {...field}
                        id="description"
                        placeholder="Una descripción de esta slide, que es una excelente slide por sus contenidos"
                      />
                      <FormErrorMessage>
                        {form.errors.description}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* Text Field as "image" is expected to be a URL*/}
                <Field name="image" validate={validateImageURL}>
                  {({field, form}) => (
                    <FormControl
                      isInvalid={form.errors.image && form.touched.image}
                      isRequired>
                      <FormLabel htmlFor="image">Url de la Imagen</FormLabel>
                      <Input
                        {...field}
                        id="image"
                        placeholder="https://www.google.com/images/about/slides-icon.svg"
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="order" validate={null}>
                  {({field}) => (
                    <FormControl isRequired>
                      <FormLabel htmlFor="order">Número de orden</FormLabel>
                      <Input
                        {...field}
                        id="order"
                        type="number"
                        min="0"
                        placeholder="3"
                      />
                    </FormControl>
                  )}
                </Field>
                <Box textAlign="center">
                  <Button mt={5} type="submit" colorScheme="blue">
                    {editing ? "Editar " : "Crear "} Slide
                  </Button>
                </Box>

                {editing && (
                  <Box textAlign="center">
                    <Button
                      mt={5}
                      type="secondary"
                      colorScheme="red"
                      onClick={handleCancelEdit}>
                      {" "}
                      Cancelar y Volver
                    </Button>{" "}
                  </Box>
                )}
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    )
  );
}

export default SlidesAdd;
