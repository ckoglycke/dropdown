import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const buttonStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    margin: '0.25rem',
    border: 'none',
    borderRadius: '50%',
    background: '#ae538b',
    fontSize: '1.25rem',
    lineHeight: 1.5,
    transition: 'all .2s ease-in-out',

    '&:hover': {
      background: '#8a416e',
    },

    '&:focus': {
      boxShadow: '0px 0px 0px 2px #000 inset, 0px 0px 0px 4px #fff inset',
      outline: 'none',
    },
  },
})

export const Button = ({ ariaLabel = 'Toggle menu', children, ...props }) => {
  const classes = buttonStyles()
  return (
    <button {...props} aria-label={ariaLabel} className={classes.root}>
      {children}
    </button>
  )
}
