import React from 'react'
//import * as React from 'react'
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
import { getAllCategories} from '../../services/category.services'
import { getAllUsers} from '../../services/user.services'
import { useState,useEffect } from 'react'
import { TextField } from '@mui/material'




const  Header = () => {

const [ categories,setCategories ] = useState([])

const getCategories = async () => {
  const result = await getAllCategories()
  setCategories(result)
}


useEffect(()=> {
  getCategories()
},[]) 


  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#404040',
          display: 'flex',
          width: '100vw',
          height: '25vh',
        }}
      >
        <Button
          //onClick={handlePlayer}
          sx={{
            backgroundColor: '#FF5100',
            marginLeft: '10px',
            variant: 'contained',
            color: 'error',
            width: '25%',
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
            color: 'error',
            width: '25%',
            height: '30px',
          }}
        >
          Categories
        </Button>
        <TextField id="outlined-basic" label="Outlined" variant='standard' />

        <Button
          //onClick={handleCategories}
          sx={{
            backgroundColor: '#FF5100',
            marginLeft: '10px',
            variant: 'contained',
            color: 'error',
            width: '25%',
            height: '30px',
          }}
        >
          Messages
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: '#D9D9D9',
          display: 'flex',
          width: '100vw',
          height: '25vh',
        }}
      >
        {categories.map((category) => {
          return (
            <>
              <button>{category.category_type}</button>
            </>
          )
        })}
      </Box>
    </Box>
  )}
          
    
  


export default Header 