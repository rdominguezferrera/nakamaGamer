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

const Signup = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickName, setNickName] = useState('')
    const [DNI, setDNI] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [direction, setDirection] = useState('')
    const [user_discord, setUserDiscord] = useState('')


}

const handleFirstName = (e) => {
    setFirstName(e.target.value)

}

const handleLastName = (e) => {
  setLastName(e.target.value)
}


const handleNickName = (e) => {
  setNickName(e.target.value)
}


const handleDNI = (e) => {
  setDNI(e.target.value)
}


const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handlePassword = (e) => {
  setPassword(e.target.value)
}


const handleDirection = (e) => {
  setDirection(e.target.value)
}
const handleUserDiscord = (e) => {
  setUserDiscord(e.target.value)
}



function handleSignup() {
  return (
    <Box>
      <Box
        className="signup"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <CardHeader title="Sign up">Sign up</CardHeader>
        <CardContent sx={{ backgroundColor: '#00BFA5' }}>
          <TextField
            onChange={handleFirstName}
            fullWidth
            margin="dense"
            label="firstname"
            type="email"
            variant="standard"
          ></TextField>

          <TextField
            onChange={handleLastName}
            fullWidth
            margin="dense"
            label="lastname"
            type="email"
            variant="standard"
          ></TextField>

          <TextField
            onChange={handleNickName}
            fullWidth
            margin="dense"
            label="nickname"
            type="email"
            variant="standard"
          ></TextField>
          <TextField
            onChange={handleDNI}
            fullWidth
            margin="dense"
            label="DNI"
            type="email"
            variant="standard"
          ></TextField>

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
          <TextField
            onChange={handleDirection}
            fullWidth
            margin="dense"
            label="direction"
            type="email"
            variant="standard"
          ></TextField>
          <TextField
            onChange={handleUserDiscord}
            fullWidth
            margin="dense"
            label="user_discord"
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
            onClick={handleSignup}
            sx={{ backgroundColor: '#FF5100', marginLeft: '10px' }}
            variant="contained"
            color="error"
          >
            Sign up
          </Button>
        </CardActions>
      </Box>
    </Box>
  )
}

export default handleSignup