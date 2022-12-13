import { render } from '@testing-library/react';

import FrontendLibsChat from './frontend-libs-chat';

describe('FrontendLibsChat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsChat />);
    expect(baseElement).toBeTruthy();
  });
});
