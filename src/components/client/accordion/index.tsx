"use client";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  Button,
  Text,
  Breadcrumb,
  Box,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { IoIosAirplane, IoIosArrowForward } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";

export function Accordion() {
  return (
    <>
      <Box w="100%" p={4} m={4}>
        <HStack spacing="15px">
          <Breadcrumb separator={""}>
            <BreadcrumbItem>
              <HStack spacing="15px">
                <IoIosAirplane />
                <BreadcrumbLink href="#">
                  Outbound flight: TP 533 BER - LIS 14.03.2023
                </BreadcrumbLink>
              </HStack>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <HStack spacing="15px">
                <IoIosAirplane />

                <BreadcrumbLink href="#">
                  Outbound flight: TP 533 LIS - FNC 14.03.2023
                </BreadcrumbLink>
              </HStack>
            </BreadcrumbItem>

            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="More"
              icon={<IoIosArrowForward />}
            />
          </Breadcrumb>

          <Stack p={4} m={4} direction="row" spacing={4} align="center">
            <Button w={200} colorScheme="teal" variant="outline">
              <AiOutlineShoppingCart /> Your cart: 153.40 €
            </Button>
            <Button color="white" bg="primary" variant="solid">
              Book now
            </Button>
          </Stack>
        </HStack>
      </Box>

      <Box w="100%">
        <Stack p={4} m={4} direction="row" spacing={4} align="center">
          <Button
            variant={"solid"}
            color="white"
            bg="primary"
            w={200}
            leftIcon={<MdOutlineAirlineSeatReclineNormal />}
          >
            Seat selection
          </Button>

          <Button
            colorScheme="teal"
            variant="outline"
            leftIcon={<FaLuggageCart />}
          >
            Luggage, meals, services
          </Button>
        </Stack>
      </Box>
    </>
  );
}
