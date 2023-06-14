"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Links = ["Dashboard", "Projects", "Team"];

export function Nav({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"white"} p={4} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              src="/logo.png"
              width={200}
              height={100}
              alt="Picture of the author"
            />
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              color="white"
              bg="primary"
              variant={"solid"}
              size={"sm"}
              mr={4}
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
