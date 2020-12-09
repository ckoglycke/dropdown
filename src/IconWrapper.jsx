import React from 'react'
import { makeStyles } from '@material-ui/core'

const size = {
  width: '1.5rem',
  height: '1.5rem',
}

const iconStyles = makeStyles({
  root: {
    ...size,

    '& > svg': {
      ...size,
      fontSize: '1.5rem',
      fill: ({ color }) => color,
    },
  },
})

export const IconWrapper = ({ children, color = '#000', ...props }) => {
  const classes = iconStyles({ color })
  return (
    <div {...props} className={classes.root} aria-hidden='true'>
      {children}
    </div>
  )
}
