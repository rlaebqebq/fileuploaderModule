import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 99999;
`;

const NotInteraction = () => {
  return <Wrapper />;
};

export default NotInteraction;
