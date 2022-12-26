import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsUsersProps {}

const StyledFrontendLibsUsers = styled.div`
  color: pink;
`;

export function FrontendLibsUsers(props: FrontendLibsUsersProps) {
  return (
    <StyledFrontendLibsUsers>
      <h1>Welcome to FrontendLibsUsers!</h1>
    </StyledFrontendLibsUsers>
  );
}

export default FrontendLibsUsers;
