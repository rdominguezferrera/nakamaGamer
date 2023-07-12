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
import CardUser from '../../Pages/Dashboard/CardUser/CardUser'

function Body() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const result = await getAllUsers()
      setUsers(result)
    }
    getUsers()
  }, [])
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
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#D9D9D9',
          color: 'black',
          height: '7vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        CATEGORIES
      </Box>
      {/* <CardUser user="Hola"/>  */}

      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '20px 5px',
          width: '100vw',
          height: '7vh',
        }}
      >
        {categories.map((category, index) => {
          return (
            <Box
              key={index}
              sx={{
                color: 'white',
                width: '250px',
                height: '200px',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: '0 15px',
                  height: '50px',
                  color: 'white',
                  width: '50%',
                  hover: '0',
                }}
              >
                {category.category_type}
              </Button>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Body
