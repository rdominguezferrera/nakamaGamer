import React from 'react'
import { useState, useEffect } from 'react'
import { getAllCategories } from '../../services/category.services'
import { getAllUsers } from '../../services/user.services'
import { Box, Typography } from '@mui/material'
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
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const result = await getAllUsers()
      setUsers(result)
    }
    getUsers()
  }, [])
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    const result = await getAllCategories()
    setCategories(result)
  }

  useEffect(() => {
    getCategories()
  }, [])

  //console.log(categories)
  console.log(users)

  return (
    <Box>
      <Typography
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
        PLAYERS
      </Typography>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '40px 5px'
        }}
      >
        {users.map((user) => {
          return <CardUser key={user.id} user={user} />
        })}
      </Box>
    </Box>
  )
}

export default Dashboard
