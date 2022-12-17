import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AdminLibsWrapperProps {}

const StyledAdminLibsWrapper = styled.div`
  color: pink;
`;

export function AdminLibsWrapper(props: AdminLibsWrapperProps) {
  return (
    <StyledAdminLibsWrapper>
      <h1>Welcome to AdminLibsWrapper!</h1>
    </StyledAdminLibsWrapper>
  );
}

export default AdminLibsWrapper;
