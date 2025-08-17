import { Popover } from '@mui/material';
import type { PopoverProps } from '@mui/material';
import type { PopoverOrigin } from '@mui/material';
import type { TransitionProps } from '@mui/material/transitions';
import { useButtonMenuHelper } from './useButtonMenuHelper';
import type { ButtonProps } from '../Button';
import type { ReactNode } from 'react';
import { IconButton } from '../IconButton';

export interface IconButtonMenuProps {
  isOpen: boolean;
  onClick: ButtonProps['onClick'];
  onClose: PopoverProps['onClose'];
  icon?: ReactNode;
  buttonProps?: Omit<ButtonProps, 'onClick, children'>;
  popoverProps?: {
    anchorOrigin?: PopoverOrigin;
    transformOrigin?: PopoverOrigin;
    TransitionProps?: TransitionProps;
  };
  children: ReactNode;
}

export const IconButtonMenu = ({
  isOpen,
  onClick,
  onClose,
  icon,
  buttonProps,
  popoverProps,
  children,
}: IconButtonMenuProps) => {
  const { anchorEl, btnRef, id, open } = useButtonMenuHelper(isOpen);

  return (
    <>
      <IconButton
        ref={btnRef}
        size="medium"
        {...buttonProps}
        onClick={onClick}
        aria-haspopup="true"
        aria-controls={id}
        aria-expanded={open ? 'true' : undefined}
        sx={{
          ...buttonProps?.sx,
        }}
      >
        {icon}
      </IconButton>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        {...popoverProps}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
      >
        {children}
      </Popover>
    </>
  );
};
