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
  TextField,
} from '@mui/material'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { signup } from '../../services/auth.services'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Signup = () => {
  const [user_firstname, setFirstName] = useState('')
  const [user_lastname, setLastName] = useState('')
  const [user_nickname, setNickName] = useState('')
  const [game, setGame] = useState('')
  const [user_role, setRole] = useState('Player')
  const [user_DNI, setDNI] = useState('')
  const [user_email, setEmail] = useState('')
  const [user_password, setPassword] = useState('')
  const [user_direction, setDirection] = useState('')
  const [user_discord_user, setUserDiscord] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleNickName = (e) => {
    setNickName(e.target.value)
  }

  const handleGame = (e) => {
      setGame(e.target.value)
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

  const handleSignup = async (e) => {
     e.preventDefault()
     const body = {
       user_firstname,
       user_lastname,
       user_nickname,
       user_role,
       user_DNI,
       user_email,
       user_password,
       user_direction,
       user_discord_user,
     }
     const post = await signup(body)
     console.log(post)
   
  }

  return (
    <Box>
      <Box
        className="signup"
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          width: '75%',
          marginLeft: '120px',
          marginTop: '30px',
        }}
      >
        <Card>
          <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Sign up">
            Sign up
          </CardHeader>
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
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  favourite games
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={game}
                  label="Age"
                  onChange={handleGame}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

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

export default Signup
