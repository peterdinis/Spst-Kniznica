import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsSharedProps {}

const StyledFrontendLibsShared = styled.div`
  color: pink;
`;

export function FrontendLibsShared(props: FrontendLibsSharedProps) {
  return (
    <StyledFrontendLibsShared>
      <h1>Welcome to FrontendLibsShared!</h1>
    </StyledFrontendLibsShared>
  );
}

export default FrontendLibsShared;
