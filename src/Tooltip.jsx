import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',

    '&:hover': {
      '& $text': {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },

  text: {
    position: 'absolute',
    visibility: 'hidden',
    top: '105%',
    padding: '0.15rem 0.25rem',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#4d4149',
    textAlign: 'center',
    zIndex: 1,
    opacity: 0,
    transitionDelay: '0.6s',
    transition: 'opacity 0.3s',
    fontSize: '0.75rem',

    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      marginLeft: '-5px',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent #4d4149 transparent',
    },
  },
})

export const Tooltip = ({ children, tooltipText }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {children}
      <span className={classes.text}>{tooltipText}</span>
    </div>
  )
}
