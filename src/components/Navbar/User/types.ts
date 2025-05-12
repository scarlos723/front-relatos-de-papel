import type { RefObject } from 'react';

export interface UserProps {
  ref: RefObject<HTMLDivElement | null>;
  handleLogout: () => void;
  handleClose: () => void;
}