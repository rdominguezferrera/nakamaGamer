import React from 'react'
import Box from '@mui/material/Box'
import { Button, Card, CardContent, CardHeader,Typography } from '@mui/material'
import image from '../../../assets/testimonial-avatar.jpg'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'


const settings = ['Aceptar', 'Rechazar'];

function CardUser({user}) {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [inviting, setInviting] = React.useState(false)
  const [yes, setYes] = React.useState(null)

 const handleConfirmation = () => {
  if(yes) {
    return (
      <Box>
          <p>Invitation succesfully sended</p>
      </Box>
    )} else {
      return (
        <Box>
          
            <p>Invitation rejected</p>
         
        </Box>
      )

    }

 }


  function handleInvitation() {

    if(!inviting) {
      return (
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#FF5100' }}
          onClick={() => setInviting(!inviting)}
          sx={{
            marginLeft: '10px',
            color: 'white',
            width: '60%',
            height: '30px',
          }}
        >
          Send Invitation
        </Button>
      )
    } else if (yes) {
         return (
           <Box>
             <p>Invitation succesfully sended</p>
           </Box>
         )

    } else if (yes === false) {
      return(

       <Box>
         <p>Invitation rejected</p>
       </Box>
      )
    }
    
    
    
    else { 
      return (
        <>
          <p>Are you sure?</p>

          <Box
          sx = {{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around'
          }}>
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#FF5100' }}
              onClick={() => setYes(true)}
              
              sx={{
                marginLeft: '10px',
                color: 'white',
                width: '25%',
                height: '30px',
              }}
            >
              YES
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#FF5100' }}
              onClick={() => setYes(false)}
              sx={{
                marginLeft: '10px',
                color: 'white',
                width: '25%',
                height: '30px',
              }}
            >
              NO
            </Button>
          </Box>
        </>
      )
    }



  }



  console.log(user)
  return (
    <Card
      sx={{
        width: '300px',
        height: '400px',
        backgroundColor: '#00BFA5',
        border: '1px solid',
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 10px',
        
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
          sx={{
            display: 'flex',
            flexDirection: 'colum',
            margin: '10px 10px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          variant="h6"
          component="h2"
        >
          <b>Firstname:</b>
          {user.user_firstname}
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            flexDirection: 'colum',
            margin: '10px 10px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          variant="h6"
          component="h2"
        >
          <b>Discord nickname:</b>
          {user.user_discord_user}
        </Typography>
        <Typography
        
          sx={{
            display: 'flex',
            flexDirection: 'colum',
            margin: '10px 10px',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          variant="h6"
          component="h2"
        >
          <b>Email: </b>
          {user.user_email}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {handleInvitation()}
      </Box>
    </Card>
  )
}

export default CardUser