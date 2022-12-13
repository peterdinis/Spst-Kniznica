import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsChatProps {}

const StyledFrontendLibsChat = styled.div`
  color: pink;
`;

export function FrontendLibsChat(props: FrontendLibsChatProps) {
  return (
    <StyledFrontendLibsChat>
      <h1>Welcome to FrontendLibsChat!</h1>
    </StyledFrontendLibsChat>
  );
}

export default FrontendLibsChat;
