import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Image,
  Box,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  agregarMembersApi,
  actualizarMemberApi,
} from "reducers/membersReducer";
import { showSuccess } from "services/Alert/alerts";

const FormCreateEdit = props => {
  const { mode, membersData } = props;

  /* ---------------- hooks ---------------- */
  const dispatch = useDispatch();
  const history = useHistory();
  /* --------------------------------------------- */

  /* ---------------- states ---------------- */
  const [members, setMembers] = useState({
    id: "",
    name: "",
    description:"",
    image: "",
  });
  const [selectetdFile, setSelectedFile] = useState([]);
  const [imagenes, setImage] = useState();
  const [preview, setPreview] = useState();
  /* --------------------------------------------- */

  /* ---------------- useEffect ---------------- */
  useEffect(() => {
    if (membersData) {
      setMembers({
        id: membersData.idMember,
        name: membersData.nameMember,
      });
    }

    encodeFileBase64(selectetdFile[0]);

    if (imagenes) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(imagenes);
    } else if (membersData) {
      setPreview(membersData.imageMember);
    } else {
      setPreview("/images/profileFace.svg");
    }
            // eslint-disable-next-line
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

        setMembers({
          ...members,
          image: Base64,
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
    setMembers({ ...members, name: newName });
  };
  /* --------------------------------------------- */
  /* ---------------- handleDescription ---------------- */
  const handleDescription = e => {
    const newDescription = e.target.value;
    setMembers({ ...members, description: newDescription });
  };
  /* --------------------------------------------- */

  /* ---------------- handleSubmit ---------------- */
  const handleSubmit = e => {
    e.preventDefault();

    if (history.location.state === undefined) {
      dispatch(agregarMembersApi(members));
      showSuccess("Miembro creado", "");
    } else {
      dispatch(actualizarMemberApi(members));
      showSuccess("Datos del miembro actualizados", "");
    }
    history.push("/backoffice/members");
  };
  /* --------------------------------------------- */

  /* ---------------- methodForm ---------------- */
  const methodForm = () => {
    if (!mode) {
      return "GET";
    } else {
      if (
        members.idMembers === "" ||
        members.nameMembers === "" ||
        members.imgMembers === "" 
      ) {
        return "POST";
      } else {
        return "PATCH";
      }
    }
  };
  /* --------------------------------------------- */

  /* ---------------- actionForm ---------------- */
  const actionForm = () => {
    if (!mode) {
      return "";
    } else {
      if (
        members.idMembers === "" ||
        members.nameMembers === "" ||
        members.imgMembers === ""
      ) {
        return "/members/create";
      } else {
        return `/members/${members.idMembers}`;
      }
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
      <form method={methodForm()} action={actionForm()} onSubmit={handleSubmit}>
        <FormControl id="nombre">
          <FormLabel>Nombre</FormLabel>
          <Input type="text" value={members.name} onChange={handleName} />
        </FormControl>

        <FormControl id="description">
          <FormLabel>Descripción</FormLabel>
          <Input type="text" value={members.description} onChange={handleDescription} />
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
