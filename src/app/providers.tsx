// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export function Providers({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: any;
}) {
  const apptheme = extendTheme(theme);

  return (
    <CacheProvider>
      <ChakraProvider theme={apptheme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
