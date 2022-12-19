import { render } from '@testing-library/react';

import AdminLibsAuth from './admin-libs-auth';

describe('AdminLibsAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminLibsAuth />);
    expect(baseElement).toBeTruthy();
  });
});
