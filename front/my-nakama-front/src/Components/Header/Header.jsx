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
import { InputAdornment, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import image from '../../assets/man.jpg'
import image2 from '../../assets/ar.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Icon from '@mui/material/Icon'
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
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
          height: '15vh',
        }}
      >
        <Button
          //onClick={handlePlayer}
          sx={{
            backgroundColor: '#FF5100',
            marginLeft: '10px',
            variant: 'contained',
            color: 'white',
            width: '15%',
            height: '30px',
          }}
        >
          Players
        </Button>
        <Button
          //onClick={handleCategories}
          sx={{
            backgroundColor: '#FF5100',
            marginLeft: '10px',
            variant: 'contained',
            color: 'white',
            width: '15%',
            height: '30px',
          }}
        >
          Categories
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
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
          //onClick={handleCategories}
          sx={{
            backgroundColor: '#FF5100',
            marginLeft: '10px',
            variant: 'filled',
            color: 'white',
            width: '15%',
            height: '30px',
            padding: '0,15px',
          }}
        >
          Messages
        </Button>
        <AccountCircleIcon color="primary" />
      </Box>
      {/* <Box
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
        })}
      </Box> */}
    </Box>
  )
}

export default Header
