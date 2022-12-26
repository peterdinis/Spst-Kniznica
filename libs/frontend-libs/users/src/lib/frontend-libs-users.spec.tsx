import { render } from '@testing-library/react';

import FrontendLibsUsers from './frontend-libs-users';

describe('FrontendLibsUsers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsUsers />);
    expect(baseElement).toBeTruthy();
  });
});
