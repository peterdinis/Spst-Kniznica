import { render } from '@testing-library/react';

import AdminLibsPages from './admin-libs-pages';

describe('AdminLibsPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminLibsPages />);
    expect(baseElement).toBeTruthy();
  });
});
