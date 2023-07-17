import { Box, Card, CardContent, CardHeader, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import image2 from '../../assets/testimonial-avatar.jpg'
import { getProfile } from '../../services/user.services'




function Profile() {

const [user,setUser] = useState({}) 
const userId = localStorage.getItem('id')
const getMyProfile = async () => {

    try {
        const result = await getProfile(userId)
        setUser(result)
        
    } catch (error) {
        console.error(error)
    }
}

useEffect(() => {
    getMyProfile()
},[])

console.log(user.user_firstname)


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'colum',
        margin: '10px 10px',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          width: '400px',
          height: '500px',
          backgroundColor: '#00BFA5',
          border: '1px solid',
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
            src={image2}
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
            padding: '50px 3px',
            justifyContent: 'center',
          }}
        >
          <Typography sx = {{
            marginTop:'10px'
          }}variant="h6" component="h2">
            <b>Firstname: </b>
            {user.user_firstname}
          </Typography>
          <Typography variant="h6" component="h2">
            <b>Lastname: </b>
            {user.user_lastname}
          </Typography>
          <Typography variant="h6" component="h2">
            <b>DNI:</b> {user.user_DNI}
          </Typography>
          <Typography variant="h6" component="h2">
            <b>Discord nickname: </b>
            {user.user_discord_user}
          </Typography>
          <Typography variant="h6" component="h2">
            <b>Email:</b>
            {user.user_email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile