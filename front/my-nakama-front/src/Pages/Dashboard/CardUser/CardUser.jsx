import React from 'react'
import Box from '@mui/material/Box'
import { Card, CardContent, CardHeader, TextField } from '@mui/material'

function CardUser({user}) {

  return (
    <Box>
      <Card>
        <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Sign up">
          Sign up
        </CardHeader>
        <CardContent sx={{ backgroundColor: '#00BFA5' }}>
          <TextField
            //onChange={handleFirstName}
            fullWidth
            margin="dense"
            label="firstname"
            type="email"
            variant="standard"
          ></TextField>
        </CardContent>
      </Card>
    </Box>
  )
}

export default CardUser