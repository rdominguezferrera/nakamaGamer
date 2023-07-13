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
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import image from '../../assets/man.jpg'
import image2 from '../../assets/ar.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Icon from '@mui/material/Icon'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
//const settings = ['Profile', 'Account', 'Language','Settings','Cookies Preference','Logout']
const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
    const handleCloseUserMenu = () => {
      setAnchorElUser(null)
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
          }}
        >
          <TextField
            sx={{
              backgroundColor: 'white',
              marginLeft: '0px',
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
            /*  display: 'flex',
            flexDirection: 'row',
            just ifyContent: 'space-between',
            marginLeft:'20px' */
          }}
          endIcon={
            <IconButton>
              <EmailIcon color="primary" />
            </IconButton>
          }
          //onClick={handleCategories}
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
        <AccountCircleIcon color="primary" />


       {/*  {     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

        { <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
         }
      </Box> }



      { <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '10px 5px',
          width: '100vw',
          height: '20vh',
        }}
      >
        {categories.map((category, index) => {
          return (
            <Box
              key={index}
              sx={{
                color: 'white',
                width: '200px',
                height: '200px',
              }}
            >
              <Button
                sx={{
                  padding: '0 15px',
                  height: '50px',
                  backgroundColor: 'red',
                  color: 'white',
                  width: '50%',
                }}
              >
                {category.category_type}
              </Button>
            </Box>
          )
        })} */}
      </Box> 
    </Box>
  )
}

export default Header
