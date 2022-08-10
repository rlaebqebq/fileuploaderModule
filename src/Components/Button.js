import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 150px;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme = 'default' }) => {
    if (theme === 'default') return '#034EA2';
    if (theme === 'active') return '#4181FF';
    if (theme === 'disable') return '#AAAAAA';
    if (theme === 'skyBlue') return 'rgba(3, 78, 162, 0.5)';
    return '#034EA2';
  }};
  cursor: pointer;
  border: none;
  box-shadow: none;
  border-radius: 25px;
`;

// eslint-disable-next-line react/prop-types
const Button = ({ children, theme = 'default', ...props }) => {
  return (
    <StyledButton type='button' theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
