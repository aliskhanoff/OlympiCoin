import styled from 'tailwind';

const StyledWidgets = styled.div`
  color: pink;
`;

export function Widgets() {
  return (
    <StyledWidgets>
      <h1>Welcome to Widgets!</h1>
    </StyledWidgets>
  );
}

export default Widgets;
