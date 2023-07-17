import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../services/category.services'
import { useState, useEffect } from 'react'
import { InputAdornment, Menu, MenuItem, TextField } from '@mui/material'
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
  localStorage.removeItem('id')
   setAnchorEl(null)
 }

  const handleCloseProfile = () => {
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
      <Link underline="none" className="enlace" to={'/dashboard'}>
        <Button
          variant="contained"
          color="primary"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 10px',
            backgroundColor: '#FF5100',
            width: '150px',
            height: '35px',
            textAlign: 'center',
            lineHeight: '20px',
          }}
          endIcon={
            <IconButton>
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
          PLAYERS
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

      <Link underline="none" className="enlace2" to={'/invitation'}>
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
            width: '150px',
            height: '35px',
            padding: '0,15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          Messages
        </Button>
      </Link>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="primary"
        variant="contained"
        style={{
          backgroundColor: '#FF5100',
        }}
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
          <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </Box>
  )
}

export default Header
