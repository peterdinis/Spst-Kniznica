import { render } from '@testing-library/react';

import FrontendLibsApi from './frontend-libs-api';

describe('FrontendLibsApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsApi />);
    expect(baseElement).toBeTruthy();
  });
});
