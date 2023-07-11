import React from 'react'
import { useState,useEffect } from 'react'
import { getAllCategories} from '../../services/category.services'
import { getAllUsers} from '../../services/user.services'
import { Box } from '@mui/material'
import CardUser from '../../Pages/Dashboard/CardUser/CardUser'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
} from '@mui/material'


function Dashboard() {

const [ users, setUsers] = useState([])

useEffect(()=> {
  const getUsers = async () => {
    const result = await getAllUsers()
    setUsers(result)
  }
 getUsers()
},[])

//console.log(categories)
console.log(users)

  return (
    <Box
      className="card"
      sx={{
        backgroundColor: '#white',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
        <CardUser user="Hola"/> 
      {/* {users.map((user) => {
        return <CardUser key={user.id} user={user} />
      })} */}

      {/*     <Card
        className="card"
        sx={{
          backgroundColor: '#00BFA5',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          width: '90%',
          height: '400px',
          marginLeft: '350px',
          marginTop: '30px',
        }}
      >
        <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Login">
          Login
        </CardHeader>
        <CardContent sx={{ backgroundColor: '#404040' }}>
          <TextField
            //onChange={handleEmail}
            fullWidth
            margin="dense"
            label="email"
            type="email"
            variant="standard"
          ></TextField>
        </CardContent>
      </Card>

      <Card
        className="card"
        sx={{
          backgroundColor: '#00BFA5',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          width: '70%',
          height: '400px',
          marginLeft: '350px',
          marginTop: '30px',
        }}
      >
        <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Login">
          Login
        </CardHeader>
        <CardContent sx={{ backgroundColor: '#404040' }}>
          <TextField
            //onChange={handleEmail}
            fullWidth
            margin="dense"
            label="email"
            type="email"
            variant="standard"
          ></TextField>
        </CardContent>
      </Card>

      <Card
        className="card"
        sx={{
          backgroundColor: '#00BFA5',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          width: '70%',
          height: '400px',
          marginLeft: '350px',
          marginTop: '30px',
        }}
      >
        <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Login">
          Login
        </CardHeader>
        <CardContent sx={{ backgroundColor: '#404040' }}>
          <TextField
            //onChange={handleEmail}
            fullWidth
            margin="dense"
            label="email"
            type="email"
            variant="standard"
          ></TextField>
        </CardContent>
      </Card>

      <Card
        className="card"
        sx={{
          backgroundColor: '#00BFA5',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          width: '70%',
          height: '400px',
          marginLeft: '350px',
          marginTop: '30px',
        }}
      >
        <CardHeader sx={{ backgroundColor: '#FF5100' }} title="Login">
          Login
        </CardHeader>
        <CardContent sx={{ backgroundColor: '#404040' }}>
          <TextField
            //onChange={handleEmail}
            fullWidth
            margin="dense"
            label="email"
            type="email"
            variant="standard"
          ></TextField>
        </CardContent>
      </Card> */}
    </Box>
  )
}

export default Dashboard