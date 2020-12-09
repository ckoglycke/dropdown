import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DropdownWrapper from './DropdownWrapper'
import Popper from './Popper'
import DropdownItem from './DropdownItem'
import { StarIcon } from './StarIcon'
import { IconWrapper } from './IconWrapper'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    padding: '40px',
  },
  heading: {
    textAlign: 'center',
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '700px',
    margin: '60px auto',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Dropdown examples</h1>
      <div className={classes.flexContainer}>
        <Popper
          dropdownId='dropdown1'
          anchorOriginVertical='center'
          anchorOriginHorizontal='right'
          transformOriginVertical='top'
          transformOriginHorizontal='left'
        >
          <DropdownWrapper>
            <DropdownItem
              onClick={() => alert('You clicked item 1 dropdown 1')}
            >
              Item 1
            </DropdownItem>
            <DropdownItem
              onClick={() => alert('You clicked item 2 dropdown 1')}
            >
              Item 2
            </DropdownItem>
            <DropdownItem
              onClick={() => alert('You clicked item 3 dropdown 1')}
            >
              Item 3
            </DropdownItem>
          </DropdownWrapper>
        </Popper>
        <Popper
          dropdownId='dropdown2'
          anchorOriginVertical='center'
          anchorOriginHorizontal='left'
          transformOriginVertical='top'
          transformOriginHorizontal='right'
        >
          <DropdownWrapper width='200px'>
            <DropdownItem
              onClick={() => alert('You clicked item 1 in dropdown 2')}
            >
              <IconWrapper style={{ marginRight: '0.5rem' }}>
                <StarIcon />
              </IconWrapper>
              Item 1
            </DropdownItem>
            <DropdownItem
              onClick={() => alert('You clicked item 2 in dropdown 2')}
            >
              <IconWrapper style={{ marginRight: '0.5rem' }}>
                <StarIcon />
              </IconWrapper>
              Item 2
            </DropdownItem>
            <DropdownItem
              onClick={() => alert('You clicked item 3 in dropdown 2')}
            >
              <IconWrapper style={{ marginRight: '0.5rem' }}>
                <StarIcon />
              </IconWrapper>
              Item 3 with an extra long label
            </DropdownItem>
            <DropdownItem
              onClick={() => alert('You clicked item 3 in dropdown 2')}
            >
              <IconWrapper style={{ marginRight: '0.5rem' }}>
                <StarIcon />
              </IconWrapper>
              Item 4
            </DropdownItem>
            <DropdownItem
              onClick={() => alert('You clicked item 5 in dropdown 2')}
            >
              <IconWrapper style={{ marginRight: '0.5rem' }}>
                <StarIcon />
              </IconWrapper>
              Item 5
            </DropdownItem>
          </DropdownWrapper>
        </Popper>
      </div>
    </div>
  )
}

export default App
