import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsQuestionsProps {}

const StyledFrontendLibsQuestions = styled.div`
  color: pink;
`;

export function FrontendLibsQuestions(props: FrontendLibsQuestionsProps) {
  return (
    <StyledFrontendLibsQuestions>
      <h1>Welcome to FrontendLibsQuestions!</h1>
    </StyledFrontendLibsQuestions>
  );
}

export default FrontendLibsQuestions;
