import { useEffect, useId, useRef, useState } from 'react';

export function useButtonMenuHelper(isOpen?: boolean) {
  const id = useId();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setAnchorEl(btnRef.current);
    } else {
      setAnchorEl(null);
    }
  }, [isOpen]);

  return { id, open, btnRef, anchorEl };
}
