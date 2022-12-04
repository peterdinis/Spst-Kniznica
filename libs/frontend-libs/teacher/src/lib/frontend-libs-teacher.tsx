import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsTeacherProps {}

const StyledFrontendLibsTeacher = styled.div`
  color: pink;
`;

export function FrontendLibsTeacher(props: FrontendLibsTeacherProps) {
  return (
    <StyledFrontendLibsTeacher>
      <h1>Welcome to FrontendLibsTeacher!</h1>
    </StyledFrontendLibsTeacher>
  );
}

export default FrontendLibsTeacher;
