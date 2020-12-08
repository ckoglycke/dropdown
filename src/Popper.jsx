import React from 'react'
import Popover from '@material-ui/core/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { Button } from './Button'
import { MenuIcon } from './MenuIcon'
import { Tooltip } from './Tooltip'

function Popper({
  children,
  dropdownId,
  anchorOriginVertical = 'top',
  anchorOriginHorizontal = 'right',
  transformOriginVertical = 'top',
  transformOriginHorizontal = 'left',
  ...props
}) {
  return (
    <PopupState {...props} variant='popover' popupId={dropdownId}>
      {(popupState) => (
        <div>
          <Tooltip tooltipText='Menu'>
            <Button
              {...bindTrigger(popupState)}
              aria-controls={dropdownId}
              ariaLabel='Toggle menu'
            >
              <MenuIcon />
            </Button>
          </Tooltip>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: anchorOriginVertical,
              horizontal: anchorOriginHorizontal,
            }}
            transformOrigin={{
              vertical: transformOriginVertical,
              horizontal: transformOriginHorizontal,
            }}
          >
            {children}
          </Popover>
        </div>
      )}
    </PopupState>
  )
}

export default Popper
