import * as React from 'react'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import { getMessage } from '../../services/user.services'
import { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import image2 from '../../assets/testimonial-avatar.jpg'
import { Button, Card, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import CancelSharpIcon from '@mui/icons-material/CancelSharp'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp'

function Message() {


const [user,setUser] = useState({})
const [confirmation, setConfirmation] = React.useState('')
const userId = localStorage.getItem('id')
const [yes, setYes] = React.useState(null)

const getMyMessage = async () => {

    try {

        const result = await getMessage(userId)
        setUser(result)
        
    } catch (error) {
        console.error(error)
    }
}
const Confirmation = () => {

  if (yes) {
    return (
      <Box>
        <p>Invitation acepted</p>
      </Box>
    )
  } else {
    return (
      <Box>
        <p>Invitation rejected</p>
      </Box>
    )
  }


}


  /*const handleCloseMessage = () => {
   setAnchorEl(null)
 }*/

  

useEffect(() => {
    getMyMessage()
},[])

console.log

  return (
    <>
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
          fontSize: '35px',
        }}
      >
        Invitations
      </Box>

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
            title=" Received invitations"
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                marginRight: '270px',
              }}
            >
              <Typography variant="h6" component="h2">
                <b>Pending:</b>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
              }}
            >
              <Typography variant="h6" component="h2">
                <b>Acept invitation?:</b>
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: '#FF5100',
                }}
                onClick={() => Confirmation(yes)}
                endIcon={
                  <IconButton>
                    <CheckCircleSharpIcon color="primary" />
                  </IconButton>
                }
                sx={{
                  marginLeft: '30px',
                  color: 'white',
                  width: '150px',
                  height: '35px',
                  padding: '0,15px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                YES
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: '#FF5100',
                }}
                onClick={() => Confirmation(!yes)}
                endIcon={
                  <IconButton>
                    <CancelSharpIcon color="primary" />
                  </IconButton>
                }
                sx={{
                  marginLeft: '30px',
                  color: 'white',
                  width: '150px',
                  height: '35px',
                  padding: '0,15px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >NO</Button>
            </Box>
           
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Message