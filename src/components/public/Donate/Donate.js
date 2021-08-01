import React from "react";
import {Title} from "../../public/SectionTitle/Title";
import {Box} from "@chakra-ui/layout";
import {DonateCard} from "./components/DonateCard";
import Foto6 from "../../../assets/Foto 6.jpg";
import Foto11 from "../../../assets/Foto 11.jpg";
import Manos10 from "../../../assets/Manos 10.jpg";
import "./donate.css";

export const Donate = () => {
  return (
    <>
      <div className="div-background-donate">
        <div>
          <h2>Donar</h2>

          <div>
            <p>
              Apoyanos en nuestra labor presentándote como voluntario, a través
              de la entrega de materiales escolares o mediante una contribución
              monetaria.
            </p>
          </div>
        </div>
      </div>

      <Box mt="3" minH="100vh" mb='80px'>
        <Title title={"Contribuí"} />

        <Box
          w={{base: "90vw", lg: "80vw"}}
          mx="auto"
          mt="5"
          textAlign="center"
          d="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center">
          <DonateCard
            title="Unirte como voluntario"
            image={Foto6}
            imageAlt="Voluntarios participando"
            description="¿Querés sumarte como voluntario? Escribinos y contanos a qué actividad te interesa sumarte. No es indispensable tener formación docente."></DonateCard>

          <DonateCard
            title="Entregar Materiales"
            image={Manos10}
            imageAlt="Usando materiales educativos"
            description="En caso de que puedas colaborar con materiales educativos, por favor contactanos para coordinar."></DonateCard>

          <DonateCard
            title="Contribución monetaria"
            image={Foto11}
            imageAlt="Niños jugando"
            button="donate"
            description="Para tu contribución monetaria, te invitamos a utilizar el siguiente enlace de Mercado Pago. En caso de necesitar recibo, por favor contactanos."></DonateCard>
        </Box>
      </Box>
    </>
  );
};
