import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsBooksProps {}

const StyledFrontendLibsBooks = styled.div`
  color: pink;
`;

export function FrontendLibsBooks(props: FrontendLibsBooksProps) {
  return (
    <StyledFrontendLibsBooks>
      <h1>Welcome to FrontendLibsBooks!</h1>
    </StyledFrontendLibsBooks>
  );
}

export default FrontendLibsBooks;
