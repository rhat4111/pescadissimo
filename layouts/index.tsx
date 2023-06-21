import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import SubscribeNewsLetter from './SubscribeNewsLetter';

interface Props {
  children: React.ReactNode,
  title?: string
}

export const Layout: React.FC<Props> = ({
  children,
  title
}) => {
  return (
    <>
      <main>{children}</main>

      <SubscribeNewsLetter />
      <Footer />
    </>
  )
}