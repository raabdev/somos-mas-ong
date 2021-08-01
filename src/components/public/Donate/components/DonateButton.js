import {Box} from "@chakra-ui/layout";

export default function DonateButton() {
  return (
    <Box>
      <a
        className="mercadopago"
        src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
        href="https://mpago.la/1i6gQ5D"
        target="_blank"
        data-preference-id="246106018-07921cf3-d407-49c9-a559-c04ca709c974"
        data-source="button"
        rel="noreferrer">
        Donar
      </a>
    </Box>
  );
}
