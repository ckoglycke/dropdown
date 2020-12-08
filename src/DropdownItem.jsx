import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    borderBottom: '1px solid #e5dae1',

    '&:last-child': {
      borderBottom: 'none',
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0.5rem 1rem',
    border: 'none',
    background: 'transparent',
    textAlign: 'left',

    '&:hover': {
      background: '#f0e0ea',
    },

    '&:focus': {
      background: '#e3c5d8',
      outline: 'none',
    },

    '&:active': {
      background: '#cc94b8',
      transition: 'all .1s ease-in-out',
    },
  },
})

function DropdownItem({ children, onClick, ...props }) {
  const classes = useStyles()
  return (
    <li {...props} className={classes.root}>
      <button onClick={onClick} className={classes.button}>
        {children}
      </button>
    </li>
  )
}

export default DropdownItem
