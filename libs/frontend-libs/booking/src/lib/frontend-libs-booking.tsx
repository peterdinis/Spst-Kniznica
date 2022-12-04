import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendLibsBookingProps {}

const StyledFrontendLibsBooking = styled.div`
  color: pink;
`;

export function FrontendLibsBooking(props: FrontendLibsBookingProps) {
  return (
    <StyledFrontendLibsBooking>
      <h1>Welcome to FrontendLibsBooking!</h1>
    </StyledFrontendLibsBooking>
  );
}

export default FrontendLibsBooking;
