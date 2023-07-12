/* eslint-disable react/prop-types */
import React from 'react'
import Box from '@mui/material/Box'
import { Card, CardContent, CardHeader,Typography } from '@mui/material'
import image from '../../../assets/testimonial-avatar.jpg'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'



function CardUser({user}) {
  console.log(user)
  return (
    <Card
      sx={{
        width: '300px',
        height: '300px',
        backgroundColor: '#00BFA5',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 10px',
        boxShadow: '20px -16px 5px yellow'
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Avatar
          alt="Foto"
          src={image}
          sx={{
            width: '100px',
            height: '100px',
          }}
        />
      </Stack>

      <CardHeader
        sx={{ backgroundColor: '#FF5100', height: '5%' }}
        title={user.user_nickname}
      />

      <CardContent
        sx={{
          backgroundColor: '#00BFA5',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0',
          justifyContent: 'center',
        }}
      >
        <Typography
          //onChange={handleFirstName}
          variant="h6"
          component="h2"
        >
          Firstname: {user.user_firstname}
        </Typography>

        <Typography
          //onChange={handleFirstName}
          variant="h6"
          component="h2"
        >
          Discord nickname: {user.user_discord_user}
        </Typography>
        <Typography
          //onChange={handleFirstName}
          variant="h6"
          component="h2"
        >
          Email: {user.user_email}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardUser