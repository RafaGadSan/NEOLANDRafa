import { Heading, Center, Wrap, WrapItem, Avatar } from "@chakra-ui/react";

const Avatars = () => {
  return (
    <Center mt={10}>
      <Heading size="md" mb={4} pt={3}>
        Creamos un Avatar
      </Heading>
      <Wrap>
        <WrapItem>
          <Avatar
            name="Spiderman"
            src="https://sm.ign.com/t/ign_es/screenshot/default/spiderman_16eh.h720.jpg"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Iron Man"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv7bL0uY1-zX_zbADPYgrxaEL7tkJkraWcw&usqp=CAU"
          />
        </WrapItem>
      </Wrap>
    </Center>
  );
};

export default Avatars;
