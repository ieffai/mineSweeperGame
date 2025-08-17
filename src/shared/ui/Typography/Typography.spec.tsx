import { render } from '@testing-library/react';

import Typography from './Typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Typography />);
    expect(asFragment()).toMatchSnapshot();
  });
});
