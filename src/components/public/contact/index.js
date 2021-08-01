import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import FormContact from "./FormContact/FormContact";
// import { GoogleMapsContainer } from "./GoogleMaps";
import { contactService } from "../../../services/contactService/";
import Loading from "components/Loading";

export const ContactIndex = () => {
  // const [center, setCenter] = useState(initialCenter);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [serviceResponse, setResponse] = useState(null);

  useEffect(() => {
    setLoading(true);
    contactService().then(r => setResponse(r), setLoading(false));
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Box w="100%">
      <FormContact />
    </Box>
  );
};
