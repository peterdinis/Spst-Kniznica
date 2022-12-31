import { render } from '@testing-library/react';

import FrontendLibsSocial from './frontend-libs-social';

describe('FrontendLibsSocial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsSocial />);
    expect(baseElement).toBeTruthy();
  });
});
