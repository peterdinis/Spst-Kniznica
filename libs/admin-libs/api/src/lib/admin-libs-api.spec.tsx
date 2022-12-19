import { render } from '@testing-library/react';

import AdminLibsApi from './admin-libs-api';

describe('AdminLibsApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminLibsApi />);
    expect(baseElement).toBeTruthy();
  });
});
