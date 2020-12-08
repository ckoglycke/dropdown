import React from 'react'
import { makeStyles } from '@material-ui/core'

const iconStyles = makeStyles({
  root: {
    '& > svg': {
      width: '1.5rem',
      height: '1.5rem',
      marginRight: '0.5rem',
      fontSize: '1.5rem',
      fill: ({ color }) => color,
    },
  },
})

export const DropdownItemIcon = ({ children, color = '#000', ...props }) => {
  const classes = iconStyles({ color })
  return (
    <div {...props} className={classes.root} aria-hidden='true'>
      {children}
    </div>
  )
}
