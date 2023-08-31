import { Heading, Highlight } from "@chakra-ui/react";
const Hero = () => {
  return (
    <Heading lineHeight="tall" align="center" mt="10" px="10">
      <Highlight
        query={["Chakra", "Highlight", "concretas"]}
        styles={{ px: "4", py: "2", rounded: "full", bg: "red.600" }}
      >
        Con Chakra podemos destacar palabras concretas con el componente
        Highlight
      </Highlight>
    </Heading>
  );
};
export default Hero;
