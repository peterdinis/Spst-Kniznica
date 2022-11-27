import { render } from '@testing-library/react';

import FrontendLibsCategory from './frontend-libs-category';

describe('FrontendLibsCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsCategory />);
    expect(baseElement).toBeTruthy();
  });
});
