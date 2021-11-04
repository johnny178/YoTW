import React from 'react';

import { NavigationBar } from '..';
import { Container } from './styles';

const Layout = (props) => {
  return (
    <>
      <NavigationBar />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;