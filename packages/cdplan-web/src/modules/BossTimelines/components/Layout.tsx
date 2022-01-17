import useProfileStore from "@Core/store/useProfileStore";
import { VERSION, VERSION_STORAGE } from "@Core/util/version";
import { Button } from "@chakra-ui/button";
import { Box, Container, Grid, Heading, HStack, Spacer, Text, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import React, { PropsWithChildren, useCallback } from "react";
import GameIcon from "@Core/components/GameIcon";
import ProfileSelection from "@Core/components/ProfileSelection";

export interface LayoutProps {
  heading: string;
  gameIcon?: string;
  menu?: React.ReactChild;
}

export default function Layout({ heading, gameIcon, menu, children }: PropsWithChildren<LayoutProps>) {
  const router = useRouter();
  const activeProfile = useProfileStore(useCallback((store) => store.activeProfile, []));

  return (
    <Grid templateColumns="2fr 8fr" gap={2} height="100vh" bgColor="gray.1000">
      <VStack align="end" p={4}>
        <Box>
          <VStack width="200px" align="start">
            <Heading size="xs" color="gray.400" textTransform="uppercase">
              Profile
            </Heading>
            <ProfileSelection />
          </VStack>
        </Box>
        <Box>
          <Spacer height={4} />
          <VStack width="200px" align="start">
            <Heading size="xs" color="gray.400" textTransform="uppercase">
              Sanctum of Domination
            </Heading>
            <Button
              size="sm"
              isFullWidth
              variant="ghost"
              justifyContent="start"
              isActive={router.pathname.includes("t27/sylvanas-windrunner")}
              onClick={() =>
                router.push({
                  pathname: `/profile/[profile]/bosses/t27/sylvanas-windrunner`,
                  query: { profile: activeProfile },
                })
              }
            >
              Sylvanas Windrunner
            </Button>
          </VStack>
        </Box>
        <Spacer />
        <VStack pt={4} align="end" spacing={0}>
          <Text fontSize="xs" color="gray.700">
            {VERSION}
          </Text>
          <Text fontSize="xs" color="gray.800">
            Storage ID {VERSION_STORAGE}
          </Text>
        </VStack>
      </VStack>

      <Box bgColor="gray.900" borderLeftColor="gray.700" borderLeftWidth="1px" p={4} overflowY="auto">
        <Container maxW="container.lg" sx={{ marginInlineStart: "0" }} mt={4}>
          <HStack justifyContent="space-between">
            <HStack alignItems="end">
              {gameIcon && <GameIcon name={gameIcon} size="2xl" />}
              <Heading as="h1" color="gray.50">
                {heading}
              </Heading>
            </HStack>
            {menu && menu}
          </HStack>
          <Box mb={8} mt={4} borderBottomColor="gray.700" borderBottomWidth="1px" />
          {children}
        </Container>
      </Box>
    </Grid>
  );
}
