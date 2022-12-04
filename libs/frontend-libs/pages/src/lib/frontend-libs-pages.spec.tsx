import { render } from '@testing-library/react';

import FrontendLibsPages from './frontend-libs-pages';

describe('FrontendLibsPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsPages />);
    expect(baseElement).toBeTruthy();
  });
});
