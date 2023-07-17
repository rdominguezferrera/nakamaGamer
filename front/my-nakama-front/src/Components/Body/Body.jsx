import * as React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../services/category.services'
import { getAllUsers } from '../../services/user.services'
import { useState, useEffect } from 'react'

function Body() {
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

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#D9D9D9',
          color: 'black',
          height: '7vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        CATEGORIES
      </Box>
   

      <Box
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '20px 5px',
          width: '100vw',
          height: '7vh',
        }}
      >
        {categories.map((category, index) => {
          return (
            <Box
              key={index}
              sx={{
                color: 'white',
                width: '250px',
                height: '200px',
              }}
            >
              <Link to = {`/dashboard/category/${category.category_type}`}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: 'blue' }}
                  sx={{
                    padding: '0 15px',
                    height: '50px',
                    color: 'white',
                    width: '50%',
                   
                  }}
                >
                  {category.category_type}
                </Button>
              </Link>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Body
