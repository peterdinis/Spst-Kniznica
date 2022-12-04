import { render } from '@testing-library/react';

import FrontendLibsBooks from './frontend-libs-books';

describe('FrontendLibsBooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsBooks />);
    expect(baseElement).toBeTruthy();
  });
});
