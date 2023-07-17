import * as React from 'react'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import { Divider } from '@mui/material'
import Box from '@mui/material/Box'
import { getUsersByGame } from '../../services/game.services'
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