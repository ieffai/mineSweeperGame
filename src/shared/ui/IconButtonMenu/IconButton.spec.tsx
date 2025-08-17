import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { IconButtonMenu } from './IconButtonMenu';

describe('IconButtonMenu', () => {
  it('should render successfully', () => {
    const mockOnClick = vi.fn();
    const mockOnClose = vi.fn();

    const { asFragment } = render(
      <IconButtonMenu isOpen={false} onClick={mockOnClick} onClose={mockOnClose} icon={<span>🔧</span>}>
        <div>Menu content</div>
      </IconButtonMenu>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render when open', () => {
    const mockOnClick = vi.fn();
    const mockOnClose = vi.fn();

    const { asFragment } = render(
      <IconButtonMenu isOpen={true} onClick={mockOnClick} onClose={mockOnClose} icon={<span>🔧</span>}>
        <div>Menu content</div>
      </IconButtonMenu>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
