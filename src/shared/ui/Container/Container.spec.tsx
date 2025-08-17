import { render } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('should render successfully', () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
});
