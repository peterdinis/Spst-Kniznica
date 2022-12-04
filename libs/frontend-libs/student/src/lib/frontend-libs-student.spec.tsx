import { render } from '@testing-library/react';

import FrontendLibsStudent from './frontend-libs-student';

describe('FrontendLibsStudent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsStudent />);
    expect(baseElement).toBeTruthy();
  });
});
