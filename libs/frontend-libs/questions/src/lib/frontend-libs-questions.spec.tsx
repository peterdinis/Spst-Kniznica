import { render } from '@testing-library/react';

import FrontendLibsQuestions from './frontend-libs-questions';

describe('FrontendLibsQuestions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsQuestions />);
    expect(baseElement).toBeTruthy();
  });
});
