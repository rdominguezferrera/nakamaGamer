import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function Home() {

  return (
    <Paper>
      <Box

        /* className="home" */

        sx={{

          backgroundColor: 'yellow',
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
          
        }}
      >
        <Typography
          sx={{
            backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '10vh',
            padding: '5px',
          }}
        >
          NAKAMA GAMER
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '10vh',
            padding: '1px 0',
          }}
        >
          Is a new application to find online playmates in a practical and
          simple way. In a few clicks you will get the results you are looking
          for.
        </Typography>
      </Box>
    </Paper>
  )
}

export default Home