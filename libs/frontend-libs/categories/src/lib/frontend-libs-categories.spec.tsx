import { render } from '@testing-library/react';

import FrontendLibsCategories from './frontend-libs-categories';

describe('FrontendLibsCategories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsCategories />);
    expect(baseElement).toBeTruthy();
  });
});
