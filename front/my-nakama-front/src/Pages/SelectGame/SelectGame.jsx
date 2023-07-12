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

function SelectGame() {
  const [games, setGames] = useState([])

  const getGames = async () => {
    const result = await getAllGames()
    setGames(result)
  }

  useEffect(() => {
    getGames()
  }, [])

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
          SHOOTER
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
          {games.map((game, index) => {
            return (
              <Card key={index} sx={{
                width:'10%',
                height:'30%',
                backgroundColor:'aquamarine',
              }}>
                <Typography>{game.game_title.toUpperCase()}</Typography>
              </Card>
              /*   <Box
                key={index}
                sx={{
                  color: 'white',
                  width: '250px',
                  height: '200px',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  
                  key={index}
                  sx={{
                    padding: '0 15px',
                    height: '50px',
                    color: 'white',
                    width: '50%',
                  }}
                >
                  
                </Button>
              </Box> */
            )
          })}
        </Box>
      </Box>

      
    </Box>
  )
}

export default SelectGame
