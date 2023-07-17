import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function HeaderSignupAndLogin() {
  return (
    <Box
      
      sx={{
        
        backgroundColor: '#404040',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100vw',
        height: '10vh',
        padding: '0 0px',
      }}
    >
      <Link underline="none" className="enlace3" to={'/login'}>
        <Button
          variant="contained"
          color="primary"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FF5100',
            width: '150px',
            height: '35px',
            textAlign: 'center',
            lineHeight: '20px',
          }}
          sx={{
            //marginLeft: '30px',
            color: 'white',
            width: '20%',
            height: '30px',
            padding: '0,15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          LOGIN
        </Button>
      </Link>

      <Link underline="none" className="enlace4" to={'/signup'}>
        <Button
          variant="contained"
          color="primary"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0 10px',
            backgroundColor: '#FF5100',
            width: '150px',
            height: '35px',
            textAlign: 'center',
            lineHeight: '20px',
          }}

          sx={{
            marginLeft: '30px',
            color: 'white',
            width: '20%',
            height: '30px',
            padding: '0,15px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          SIGNUP
        </Button>
      </Link>
    </Box>
  )
}

export default HeaderSignupAndLogin
