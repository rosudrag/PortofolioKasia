import React, { PropTypes } from 'react';

import Container from './components/Container';
import DefaultHeadMeta from './components/DefaultHeadMeta';
import Content from './components/Content';

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Content>
      { props.children }
    </Content>
  </Container>
);

AppContainer.propTypes = {
    children: PropTypes.node
};

export default AppContainer;
