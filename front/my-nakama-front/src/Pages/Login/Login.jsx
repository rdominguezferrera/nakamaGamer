import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
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
import { login } from '../../services/auth.services'

const Login = () => {
  const [user_email, setEmail] = useState('')
  const [user_password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const body = { user_email, user_password }
    const post = await login(body) //// se queda aqui
    if (post === 200) {
      navigate('/dashboard')
    } else {
      alert(post)
    }
  }

  return (
    <Box
      className="login"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          width: '35%',
          height: '300px',
          marginLeft: '370px',
          marginTop: '30px',
          padding: '0 180px',
          opacity:'0.9'
        }}
      >
        <Card sx={{ border: '2px solid black' }}>
          <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Login">
            Login
          </CardHeader>
          <CardContent sx={{ backgroundColor: '#wheite' }}>
            <TextField
              onChange={handleEmail}
              fullWidth
              margin="dense"
              label="email"
              type="email"
              variant="standard"
            ></TextField>

            <TextField
              onChange={handlePassword}
              fullWidth
              margin="dense"
              label="password"
              type="email"
              variant="standard"
            ></TextField>
          </CardContent>
        </Card>
        <Divider></Divider>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleLogin}
            sx={{ backgroundColor: '#FF5100', marginLeft: '10px' }}
            variant="contained"
            color="error"
          >
            Login
          </Button>
        </CardActions>
      </Box>
    </Box>
  )
}
export default Login
