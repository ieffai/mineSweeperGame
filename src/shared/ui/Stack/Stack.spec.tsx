import { render } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Stack />);
    expect(asFragment()).toMatchSnapshot();
  });
});
