import { Box, Button, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
      <Box
        w={"80px"}
        h={"80px"}
        bgColor={{ base: "red.400", sm: "blue.400", md: "green.400", fold: "yellow.400", lg: "red.400", xl: "gray.400" }}
      ></Box>
    </HStack>
  );
}
