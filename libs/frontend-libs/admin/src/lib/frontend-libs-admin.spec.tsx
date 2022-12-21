import { render } from '@testing-library/react';

import FrontendLibsAdmin from './frontend-libs-admin';

describe('FrontendLibsAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
