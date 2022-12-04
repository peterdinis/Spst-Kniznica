import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsCategoriesProps {}

const StyledFrontendLibsCategories = styled.div`
  color: pink;
`;

export function FrontendLibsCategories(props: FrontendLibsCategoriesProps) {
  return (
    <StyledFrontendLibsCategories>
      <h1>Welcome to FrontendLibsCategories!</h1>
    </StyledFrontendLibsCategories>
  );
}

export default FrontendLibsCategories;
