import * as React from 'react'
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
import { Divider, InputAdornment, TextField } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack' 
 import { getAllGames, getUsersByGame } from '../../services/game.services'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Icon from '@mui/material/Icon'
import SearchIcon from '@mui/icons-material/Search'
import CardUser from '../Dashboard/CardUser/CardUser'
import { useParams } from 'react-router-dom'


function ViewPlayers() {
  
  const [users, setUsers] = useState([])
  const {game} = useParams()


  const getUsersByGameName = async () => {
    const result = await getUsersByGame(game)
    setUsers(result)
  }

  useEffect(() => {
    getUsersByGameName()

  }, [])

  if(users.length!== 0) {
  return (
    <Box>
      <Typography
        sx={{
          backgroundColor: '#D9D9D9',
          color: 'black',
          height: '7vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px'
        }}
      >
        PLAYERS OF {game.toUpperCase()}
      </Typography>

      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '40px 5px'
        }}
      >
        {users.users.map((user) => {
          return <CardUser key={user.id} user={user} />
        })} 
      </Box>
    </Box>
  )
  }
}

export default ViewPlayers  