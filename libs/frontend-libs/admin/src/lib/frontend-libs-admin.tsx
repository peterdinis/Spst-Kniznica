import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsAdminProps {}

const StyledFrontendLibsAdmin = styled.div`
  color: pink;
`;

export function FrontendLibsAdmin(props: FrontendLibsAdminProps) {
  return (
    <StyledFrontendLibsAdmin>
      <h1>Welcome to FrontendLibsAdmin!</h1>
    </StyledFrontendLibsAdmin>
  );
}

export default FrontendLibsAdmin;
