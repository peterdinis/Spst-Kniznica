import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsAboutProps {}

const StyledFrontendLibsAbout = styled.div`
  color: pink;
`;

export function FrontendLibsAbout(props: FrontendLibsAboutProps) {
  return (
    <StyledFrontendLibsAbout>
      <h1>Welcome to FrontendLibsAbout!</h1>
    </StyledFrontendLibsAbout>
  );
}

export default FrontendLibsAbout;
