import {AppProps} from 'next/app';
import {QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import {ChakraProvider} from '@chakra-ui/react';

import { makeServer } from '../services/mirage';
import {queryClient} from '../services/queryClient'

import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';


if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp
