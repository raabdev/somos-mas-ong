import {Link} from "react-router-dom";
import {Text} from "@chakra-ui/react";

export default function DonateButton() {
  return (
    <Link to="/contact">
      <Text className="mercadopago"> Contactanos</Text>
    </Link>
  );
}
