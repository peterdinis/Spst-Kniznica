import { render } from '@testing-library/react';

import FrontendLibsTeacher from './frontend-libs-teacher';

describe('FrontendLibsTeacher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsTeacher />);
    expect(baseElement).toBeTruthy();
  });
});
