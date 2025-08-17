import { render } from '@testing-library/react';
import Paper from './Paper';

describe('Paper', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Paper />);
    expect(asFragment()).toMatchSnapshot();
  });
});
