import { Center, Heading, Image } from "@chakra-ui/react";

const Media = () => {
  return (
    <>
      <Center mt={10} px={15}>
        <Heading size="2xl">Isertamos elementos multimedia</Heading>
      </Center>
      <Center p={5} mx={"30%"}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </Center>
    </>
  );
};

export default Media;
