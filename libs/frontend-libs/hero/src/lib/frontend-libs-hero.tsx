import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsHeroProps {}

const StyledFrontendLibsHero = styled.div`
  color: pink;
`;

export function FrontendLibsHero(props: FrontendLibsHeroProps) {
  return (
    <StyledFrontendLibsHero>
      <h1>Welcome to FrontendLibsHero!</h1>
    </StyledFrontendLibsHero>
  );
}

export default FrontendLibsHero;
