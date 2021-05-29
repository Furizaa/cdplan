import { Button } from "@chakra-ui/button";
import { Box, Container, Grid, Heading, HStack, Spacer, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React, { PropsWithChildren } from "react";
import GameIcon from "./GameIcon";

export interface LayoutProps {
  heading: string;
  gameIcon?: string;
}

export default function Layout({ heading, gameIcon, children }: PropsWithChildren<LayoutProps>) {
  const router = useRouter();

  return (
    <Grid templateColumns="2fr 8fr" gap={2} height="100vh" bgColor="gray.1000">
      <VStack align="end" p={4}>
        <Box>
          <VStack width="200px" align="start">
            <Heading size="xs" color="gray.400" textTransform="uppercase">
              Settings
            </Heading>

            <Button
              size="sm"
              isFullWidth
              variant="ghost"
              justifyContent="start"
              isActive={router.pathname === "/roster"}
              onClick={() => router.push("/roster", "/roster")}
            >
              Guild Roster
            </Button>
          </VStack>
        </Box>
        <Box>
          <Spacer height={4} />
          <VStack width="200px" align="start">
            <Heading size="xs" color="gray.400" textTransform="uppercase">
              Castle Nathria
            </Heading>
            <Button
              size="sm"
              isFullWidth
              variant="ghost"
              justifyContent="start"
              isActive={router.pathname === "/bosses/t26/sire-denathrius"}
              onClick={() => router.push("/bosses/t26/sire-denathrius", "/bosses/t26/sire-denathrius")}
            >
              Sire Denathrius
            </Button>
          </VStack>
        </Box>
      </VStack>

      <Box bgColor="gray.900" borderLeftColor="gray.700" borderLeftWidth="1px" p={4} overflowY="auto">
        <Container maxW="container.lg" sx={{ marginInlineStart: "0" }} mt={4}>
          <HStack alignItems="end">
            {gameIcon && <GameIcon name={gameIcon} size="2xl" />}
            <Heading as="h1" color="gray.50">
              {heading}
            </Heading>
          </HStack>
          <Box mb={8} mt={4} borderBottomColor="gray.700" borderBottomWidth="1px" />
          {children}
        </Container>
      </Box>
    </Grid>
  );
}
