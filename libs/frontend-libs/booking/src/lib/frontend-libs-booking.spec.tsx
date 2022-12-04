import { render } from '@testing-library/react';

import FrontendLibsBooking from './frontend-libs-booking';

describe('FrontendLibsBooking', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsBooking />);
    expect(baseElement).toBeTruthy();
  });
});
