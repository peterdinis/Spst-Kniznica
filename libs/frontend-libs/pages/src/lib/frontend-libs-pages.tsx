import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsPagesProps {}

const StyledFrontendLibsPages = styled.div`
  color: pink;
`;

export function FrontendLibsPages(props: FrontendLibsPagesProps) {
  return (
    <StyledFrontendLibsPages>
      <h1>Welcome to FrontendLibsPages!</h1>
    </StyledFrontendLibsPages>
  );
}

export default FrontendLibsPages;
