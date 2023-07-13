//import React from 'react'
import * as React from 'react'
//import PropTypes from 'prop-types'
//import AppBar from '@mui/material/AppBar'
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
import { Card, InputAdornment, TextField } from '@mui/material'
/* import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack' */
import { getAllGames } from '../../services/game.services'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Icon from '@mui/material/Icon'
import SearchIcon from '@mui/icons-material/Search'
import { useParams } from 'react-router-dom'
import { getGamesByCategoryType } from '../../services/game.services'

function SelectGame() {

  const [games, setGames] = useState([])
  const [ allgames,setAllGames] = useState([])
  const {category} = useParams()

  const getGames = async () => {
    const result = await getAllGames()
    setAllGames(result)
  }

  const getGamesByCategory = async () => {
    const result = await getGamesByCategoryType(category)
    setGames(result)
  }

  useEffect(() => {
    getGames()
    getGamesByCategory()
  }, [category])
  console.log(games.games)

if(games.length !== 0){
  if(category === 'all'){

    return (
      <Box>
        <Box>
          <Box
            sx={{
              backgroundColor: '#D9D9D9',
              color: 'black',
              height: '7vh',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px',
            }}
          >
            
              CATEGORY:{category.toUpperCase()}
            
          </Box>

          <Box
            sx={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100vw',
              height: '75vh',
            }}
          >
            {allgames.map((game, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    width: '10%',
                    height: '30%',
                    backgroundColor: 'aquamarine',
                  }}
                >
                  <Link key={index} to={`/dashboard/game/${game.game_title}`}>
                    <Typography>{game.game_title.toUpperCase()}</Typography>
                  </Link>
                </Card>
              )
            })}
          </Box>
        </Box>
      </Box>
    )
  }  
  else {
    return (
    <Box>
      <Box>
        <Box
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
         CATEGORY: {category.toUpperCase()}
        </Box>

        <Box
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100vw',
            height: '75vh',
          }}
        >
          {games.games.map((game, index) => {
            return (
              <Card
             
                  key={index}
                  sx={{
                    width: '10%',
                    height: '30%',
                    backgroundColor: 'aquamarine',
                   
                  }}
                >
                  <Link key={index} to={`/dashboard/game/${game.game_title}`}>
                    <Typography>{game.game_title.toUpperCase()}</Typography>
                  </Link>
                </Card>
            )
          })}
        </Box>
      </Box>

      
    </Box>
  )}}
}

export default SelectGame
