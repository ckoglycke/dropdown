import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: '0',
    width: ({ width }) => width,
  },
})

function DropdownWrapper({ children, width, ...props }) {
  const classes = useStyles({ width })
  return (
    <ul {...props} className={classes.root}>
      {children}
    </ul>
  )
}

export default DropdownWrapper
