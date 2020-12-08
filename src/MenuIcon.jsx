import React from 'react'
import { makeStyles } from '@material-ui/core'

const iconStyles = makeStyles({
  root: {
    width: '1.5rem',
    height: '1.5rem',
    fontSize: '1.5rem',
    fill: '#fff',
  },
})

export const MenuIcon = () => {
  const classes = iconStyles()
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={classes.root}
      aria-hidden='true'
    >
      <path fill='none' d='M0,0H24V24H0Z' />
      <path d='M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z' />
    </svg>
  )
}
