import { render } from '@testing-library/react';

import FrontendLibsAbout from './frontend-libs-about';

describe('FrontendLibsAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsAbout />);
    expect(baseElement).toBeTruthy();
  });
});
