import { render } from '@testing-library/react';

import AdminLibsWrapper from './admin-libs-wrapper';

describe('AdminLibsWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminLibsWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
