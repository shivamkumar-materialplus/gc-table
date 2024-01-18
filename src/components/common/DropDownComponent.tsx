import React, { ReactNode } from 'react';

import { ClickAwayListener, Popper } from '@mui/material';

type Props = {
  id?: string,
  anchorEl: HTMLElement | null,
  open: boolean,
  handleClose: () => void,
  children: ReactNode
}

function DropDownComponent({ id, anchorEl, open, handleClose, children }: Props) {
  return (
    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [23, 0],
          },
        },
      ]}
    >
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          {children}
        </div>
      </ClickAwayListener>
    </Popper>
  )
}

export default DropDownComponent