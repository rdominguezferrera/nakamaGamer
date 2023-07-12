import React from 'react'
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

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#404040',
        display: 'flex',
        width: '100vw',
        height: '15vh',
      }}
    ></Box>
  )
}

export default Footer
