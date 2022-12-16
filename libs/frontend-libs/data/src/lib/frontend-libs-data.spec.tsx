import { render } from '@testing-library/react';

import FrontendLibsData from './frontend-libs-data';

describe('FrontendLibsData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsData />);
    expect(baseElement).toBeTruthy();
  });
});
