import { render } from '@testing-library/react';

import Box from './Box';

describe('Box', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});
