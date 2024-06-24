import { Container, Text, VStack, Heading, Box, Button, Image, HStack } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Explore the World with Us
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Book flights, hotels, and car rentals at the best prices.
        </Text>
        <HStack spacing={8} justifyContent="center" width="100%">
          <Box textAlign="center">
            <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">
              Book Flights
            </Button>
          </Box>
          <Box textAlign="center">
            <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">
              Book Hotels
            </Button>
          </Box>
          <Box textAlign="center">
            <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">
              Rent Cars
            </Button>
          </Box>
        </HStack>
        <Box width="100%" textAlign="center">
          <Image src="/images/travel.jpg" alt="Travel" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;