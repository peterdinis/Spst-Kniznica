import { render } from '@testing-library/react';

import FrontendLibsShared from './frontend-libs-shared';

describe('FrontendLibsShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsShared />);
    expect(baseElement).toBeTruthy();
  });
});
