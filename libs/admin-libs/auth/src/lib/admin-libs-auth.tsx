import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AdminLibsAuthProps {}

const StyledAdminLibsAuth = styled.div`
  color: pink;
`;

export function AdminLibsAuth(props: AdminLibsAuthProps) {
  return (
    <StyledAdminLibsAuth>
      <h1>Welcome to AdminLibsAuth!</h1>
    </StyledAdminLibsAuth>
  );
}

export default AdminLibsAuth;
