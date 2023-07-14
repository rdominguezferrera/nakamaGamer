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
          //boxShadow: '20px -16px 5px yellow'
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
        <CardHeader sx={{ backgroundColor: '#FF5100', height: '5%' }}
          title="hola"/>
          
        

        <CardContent
          sx=
          {{
            backgroundColor: '#00BFA5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0',
            justifyContent: 'center',
          }}>
          <Typography variant="h6" component="h2">
            Firstname: 
          </Typography>
          <Typography variant="h6" component="h2">
            Discord nickname: 
          </Typography>
          <Typography variant="h6" component="h2">
            Email: 
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile