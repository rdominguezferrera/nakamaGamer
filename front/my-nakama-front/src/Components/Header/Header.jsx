import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../services/category.services'
import { getAllUsers } from '../../services/user.services'
import { useState, useEffect } from 'react'
import { InputAdornment, Menu, MenuItem, TextField } from '@mui/material'
import Icon from '@mui/material/Icon'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import SportsEsportsSharpIcon from '@mui/icons-material/SportsEsportsSharp'
import { AccountCircle } from '@mui/icons-material'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }


  
 const handleClose = () => {
  localStorage.removeItem('token')
   setAnchorEl(null)
 }


  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const result = await getAllCategories()
    setCategories(result)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#404040',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100vw',
          height: '10vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <Link to={'/dashboard'}>
            <Button
              style={{
                padding: '0 10px',
                marginRight: '200px',
              }}
              endIcon={
                <IconButton
                  sx={{
                    marginRight: '100px',
                  }}
                >
                  <SportsEsportsSharpIcon color="primary" />
                </IconButton>
              }
              sx={{
                marginLeft: '30px',
                color: 'white',
                width: '20%',
                height: '30px',
                padding: '0,15px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}
            >
              NAKAMA GAME
            </Button>
          </Link>
          <TextField
            sx={{
              backgroundColor: 'white',
            }}
            id="outlined-basic"
            label="Search..."
            variant="standard"
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: '#FF5100',
          }}
          endIcon={
            <IconButton>
              <EmailIcon color="primary" />
            </IconButton>
          }
          sx={{
            marginLeft: '30px',
            color: 'white',
            width: '15%',
            height: '30px',
            padding: '0,15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          Messages
        </Button>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/profile">
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
