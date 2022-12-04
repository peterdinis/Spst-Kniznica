import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsStudentProps {}

const StyledFrontendLibsStudent = styled.div`
  color: pink;
`;

export function FrontendLibsStudent(props: FrontendLibsStudentProps) {
  return (
    <StyledFrontendLibsStudent>
      <h1>Welcome to FrontendLibsStudent!</h1>
    </StyledFrontendLibsStudent>
  );
}

export default FrontendLibsStudent;
