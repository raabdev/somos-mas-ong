import React from "react";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { validate } from "./validate";
import Loading from "components/Loading";
import useFetch from "hooks/useFetch";
import { Title } from "components/public/SectionTitle/Title";
import styles from "./FormContact.module.css";

const FormContact = () => {
  const url = "api url";
  const { error, loading, fetchData, response } = useFetch();
  const formik = useFormik({
    initialValues: {
      userName: "",
      lastName: "",
      email: "",
      phone: "",
      textArea: "",
    },
    validate,
    onSubmit: async values => {
      fetchData(url, {
        method: "post",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
    },
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className={styles.div_background_contact}>
        <div style={{width:"100%"}}>
          <h2>Contactanos</h2>
          <div>
            <p>
            Si tienes alguna duda o para conocer como colaborar con Somos Más puedes escribirnos.
            </p>
          </div>
        </div>
      </div>

      <Title title="Contacto" />

      <Box
        w={["320px", "460px", "520px", "600px", "600px"]}
        m="auto"
        mt="2"
        mb="4rem"
      >
        {error && <Text>{error}</Text>}
        {response && <Text>Envió realizado con exito</Text>}

        <form onSubmit={formik.handleSubmit}>
          <Flex flexDir={["column", "column", "column", "row", "row"]}>
            <FormControl
              isInvalid={formik.touched.userName && formik.errors.userName}
              mb="10px"
            >
              <Input
                h="45px"
                w={["100%", "100%", "100%", "90%", "90%"]}
                mt={4}
                name="userName"
                id="userName"
                placeholder="Nombre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
              />
              <FormErrorMessage>
                {formik.touched.userName &&
                  formik.errors.userName &&
                  formik.errors.userName}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.lastName && formik.errors.lastName}
            >
              <Input
                w={["100%", "100%", "100%", "100%", "100%"]}
                mt={4}
                h="45px"
                name="lastName"
                id="lastName"
                placeholder="Apellido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              <FormErrorMessage>
                {formik.touched.lastName &&
                  formik.errors.lastName &&
                  formik.errors.lastName}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex flexDir={["column", "column", "column", "row", "row"]}>
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
              mb="10px"
            >
              <Input
                w={["100%", "100%", "100%", "90%", "90%"]}
                mt={4}
                h="45px"
                name="email"
                id="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormErrorMessage>
                {formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={formik.touched.phone && formik.errors.phone}
            >
              <Input
                w={["100%", "100%", "100%", "100%", "100%"]}
                h="45px"
                mt={4}
                name="phone"
                id="phone"
                placeholder="Teléfono"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <FormErrorMessage>
                {formik.touched.phone &&
                  formik.errors.phone &&
                  formik.errors.phone}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl
            isInvalid={formik.touched.textArea && formik.errors.textArea}
          >
            <Textarea
              w={"100%"}
              h="150px"
              mt={4}
              name="textArea"
              placeholder="Escribe tu consulta"
              onChange={formik.handleChange}
            />
            <FormErrorMessage>
              {formik.touched.textArea &&
                formik.errors.textArea &&
                formik.errors.textArea}
            </FormErrorMessage>
          </FormControl>

          <Button
            w={"100%"}
            type="submit"
            isFullWidth
            h="50px"
            mt="10px"
            bg="#DB5752"
            color="#ffff"
            isLoading={loading || formik.isSubmitting}
          >
            Enviar
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormContact;
