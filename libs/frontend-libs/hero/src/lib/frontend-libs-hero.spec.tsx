import { render } from '@testing-library/react';

import FrontendLibsHero from './frontend-libs-hero';

describe('FrontendLibsHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontendLibsHero />);
    expect(baseElement).toBeTruthy();
  });
});
