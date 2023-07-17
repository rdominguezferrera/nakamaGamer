import * as React from 'react'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import { getAllGames } from '../../services/game.services'
import { useParams } from 'react-router-dom'
import { getGamesByCategoryType } from '../../services/game.services'
import CardGame from '../SelectGame/CardGame/CardGame'
function SelectGame() {
  const [games, setGames] = useState([])
  const [allgames, setAllGames] = useState([])
  const { category,setCategory } = useParams()

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
console.log(games)
  if (games.length !== 0) {
    if (category === 'all') {
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
                width: '100vw',
                height: '75vh',
                padding: '30px 5px',
              }}
            >
              {allgames.map((game) => {
       
                return <CardGame key={game.id} game={game} />
              })}
            </Box>
          </Box>
        </Box>
      )
    } else {
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
                width: '100vw',
                height: '75vh',
                padding: '30px 5px',
              }}
            >
              {games.games.map((game) => {
                  console.log(game)
                return <CardGame key={game.id} game={game} />
              })}
            </Box>
          </Box>
        </Box>
            
         
      )
    }
  }
}

export default SelectGame
