'use client';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient();

const Provider = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>  //It will store the result once when you click and prevent from hitting the endpoint again and again
  )
}

export default Provider