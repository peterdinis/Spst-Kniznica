import { render } from '@testing-library/react';

import FrontendLibsHooks from './frontend-libs-hooks';

describe('FrontendLibsHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsHooks />);
    expect(baseElement).toBeTruthy();
  });
});
