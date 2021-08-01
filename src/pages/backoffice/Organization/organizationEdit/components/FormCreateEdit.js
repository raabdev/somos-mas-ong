import { Box, Button, Container, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateOrganizationApiData } from "reducers/organizationReducer";
import { showSuccess } from "services/Alert/alerts";

const FormCreateEdit = props => {
  const { mode, organizationData } = props;

  /* ---------------- hooks ---------------- */
  const dispatch = useDispatch();
  const history = useHistory();
  /* --------------------------------------------- */

  /* ---------------- states ---------------- */
  const [organization, setOrganization] = useState({
    id: "",
    name: "",
    short_description: "",
    long_description: "",
    logo: "",
    address: "",
    phone: "",
    cellphone: "",
  });
  const [selectetdFile, setSelectedFile] = useState([]);
  const [imagenes, setImage] = useState();
  const [preview, setPreview] = useState();
  /* --------------------------------------------- */

  /* ---------------- useEffect ---------------- */
  useEffect(() => {
    if (organizationData) {
      setOrganization({
        id: organizationData.idMember,
        name: organizationData.nameMember,
      });
    }

    encodeFileBase64(selectetdFile[0]);

    if (imagenes) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(imagenes);
    } else if (organizationData) {
      setPreview(organizationData.imageMember);
    } else {
      setPreview("/images/profileFace.svg");
    }
  }, [selectetdFile, imagenes]);
  /* --------------------------------------------- */

  /* ---------------- onFileChange ---------------- */
  const onFileChange = e => {
    setSelectedFile(e.target.files);
    setImage(e.target.files[0]);
  };
  /* --------------------------------------------- */

  /* ---------------- encodeFileBase64 ---------------- */
  const encodeFileBase64 = file => {
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        var Base64 = reader.result;

        setOrganization({
          ...organization,
          logo: Base64,
        });
      };

      reader.onerror = error => {
        console.log("error: ", error);
      };
    }
  };
  /* --------------------------------------------- */

  /* ---------------- handleName ---------------- */
  const handleName = e => {
    const newName = e.target.value;
    setOrganization({ ...organization, name: newName });
  };
  /* --------------------------------------------- */

  /* ---------------- handleShortDescription ---------------- */
  const handleShortDescription = e => {
    const newShortDescription = e.target.value;
    setOrganization({ ...organization, short_description: newShortDescription });
  };
  /* --------------------------------------------- */

  /* ---------------- handleLongDescription ---------------- */
  const handleLongDescription = e => {
    const newLongDescription = e.target.value;
    setOrganization({ ...organization, long_description: newLongDescription });
  };
  /* --------------------------------------------- */

  /* ---------------- handlePhoneNumber ---------------- */
  const handlePhoneNumber = e => {
    const newPhone = e.target.value;
    setOrganization({ ...organization, phone: newPhone });
  };
  /* --------------------------------------------- */

  /* ---------------- handlePhoneNumber ---------------- */
  const handleCellphoneNumber = e => {
    const newCellphone = e.target.value;
    setOrganization({ ...organization, cellphone: newCellphone });
  };
  /* --------------------------------------------- */

  /* ---------------- handleAddress ---------------- */
  const handleAddress = e => {
    const newAddress = e.target.value;
    setOrganization({ ...organization, address: newAddress });
  };
  /* --------------------------------------------- */

  /* ---------------- handleSubmit ---------------- */
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateOrganizationApiData(organization));
    showSuccess("Datos de la organización actualizados!", "");
    history.push("/backoffice/organization");
  };
  /* --------------------------------------------- */

  /* ---------------- methodForm ---------------- */
  const methodForm = () => {
    if (!mode) {
      return "POST";
    }
  };
  /* --------------------------------------------- */

  return (
    <Container
      maxW="container.sm"
      mt="3rem"
      border="1px"
      borderRadius="2xl"
      p="1rem"
      borderColor="#e2e8f0"
      width="95%"
    >
      <form method={methodForm()} onSubmit={handleSubmit}>
        <FormControl id="nombre">
          <FormLabel>Nombre</FormLabel>
          <Input type="text" value={organization.name} onChange={handleName} />
        </FormControl>

        <FormControl id="short_description">
          <FormLabel>Descripción corta</FormLabel>
          <Input type="text" value={organization.short_description} onChange={handleShortDescription} />
        </FormControl>

        <FormControl id="long_description">
          <FormLabel>Descripción larga</FormLabel>
          <Input type="text" value={organization.long_description} onChange={handleLongDescription} />
        </FormControl>

        <FormControl id="phone_number">
          <FormLabel>Telefono fijo</FormLabel>
          <Input type="text" value={organization.phone} onChange={handlePhoneNumber} />
        </FormControl>

        <FormControl id="cellphone_number">
          <FormLabel>Telefono celular</FormLabel>
          <Input type="text" value={organization.cellphone} onChange={handleCellphoneNumber} />
        </FormControl>

        <FormControl id="address">
          <FormLabel>Dirección</FormLabel>
          <Input type="text" value={organization.address} onChange={handleAddress} />
        </FormControl>

        <Box display="flex" justifyContent="space-between" padding="1rem">
          <Box>
            <FormControl id="imagen">
              <FormLabel>Imagen</FormLabel>
              <input type="file" onChange={onFileChange} />
            </FormControl>
          </Box>
          <Box>
            <Image
              src={preview}
              alt="imagen"
              width="100px"
              borderRadius="10%"
              m="auto"
            />
          </Box>
        </Box>

        <Button
          mt={4}
          backgroundColor="#9AC9FB"
          color="#FFF"
          type="submit"
          w="100%"
        >
          {" "}
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormCreateEdit;
