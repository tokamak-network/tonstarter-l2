// app/layout.tsx
'use client'
import { Providers } from "./providers";
import { ColorModeScript } from "@chakra-ui/react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { WagmiProviders } from "@/providers/wagmiProvider";
import { RecoilRoot } from "recoil";
import { Flex } from "@chakra-ui/react";
import Modals from "@/components/modals";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/client/queryClient";

// import './globals.css'
export const HeadMeta = () => {
  return (
    <head>
      <title>Tokamak Bridge</title>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bridge.tokamak.network" />
      <meta property="og:title" content="Tokamak Bridge" />
      <meta
        name="viewport"
        content="width=device-width,user-scalable=no,initial-scale=1,shrink-to-fit=n"
      />
      <meta
        name="description"
        content="Tokamak Bridge offers a unified bridge and swap experience between Ethereum and Titan Network."
      ></meta>
      <meta
        property="og:description"
        content="Tokamak Bridge offers a unified bridge and swap experience between Ethereum and Titan Network."
      ></meta>
      <meta name="keywords" content="tokamak bridge titan swap pool" />
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <html lang="en">
      <HeadMeta/>
      <body style={{minHeight: '100vh'}}>
      <RecoilRoot>
        <QueryClientProvider  client={queryClient}>
                  <Providers>
        <WagmiProviders>
          <Flex flexDir={'column'} minH={'100vh'}>
          <Header />
          {children}
          <Footer />
          <Modals/>
          </Flex>
        
          </WagmiProviders>
        </Providers>
        </QueryClientProvider>

        </RecoilRoot>
      </body>
    </html>
  );
}
