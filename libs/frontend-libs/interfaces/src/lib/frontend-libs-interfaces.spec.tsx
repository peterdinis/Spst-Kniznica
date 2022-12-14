import { render } from '@testing-library/react';

import FrontendLibsInterfaces from './frontend-libs-interfaces';

describe('FrontendLibsInterfaces', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsInterfaces />);
    expect(baseElement).toBeTruthy();
  });
});
