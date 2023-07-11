import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
} from '@mui/material'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <Box>
      <Box
        className="home"
        sx={{
          backgroundColor: 'FF5100',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          width: '75%',
          height: '50vh',
          marginLeft: '120px',
          marginTop: '30px',
        }}
        
      >Home</Box>
    </Box>
  )
}

export default Home