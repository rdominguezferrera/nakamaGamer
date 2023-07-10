import React from 'react'
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
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

function handleLogin() {

  return (
    <Box>
      <Box
        className="signup"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <CardHeader title="Login">Login</CardHeader>
        <CardContent sx={{ backgroundColor: '#00BFA5' }}>
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

export default handleLogin
    
  


